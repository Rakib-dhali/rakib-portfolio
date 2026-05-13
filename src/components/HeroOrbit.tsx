import { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
    >
      
      <div
        style={{ transform: `rotate(${rotation * -1}deg)` }}
        className=" inline-flex "
      >
        {children}
      
      </div>
    </div>
  );
};

export default HeroOrbit;
