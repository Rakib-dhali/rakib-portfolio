// CoolBeansButton.jsx
export default function CoolBeansButton({ label = 'hover me', href = '#' }) {
  return (
    <a
      href={href}
      style={{ fontFamily: "'Roboto', sans-serif", willChange: 'transform' }}
      className="
        relative z-0 inline-block overflow-hidden no-underline
        rounded-[3rem] border-2 border-yellow-400
        px-8 py-4
        text-[4rem] font-thin text-yellow-400
        transition-[transform,border-color,color] duration-200 ease-in-out
        hover:scale-105 hover:border-transparent hover:text-[indigo]
        after:absolute after:left-0 after:top-0
        after:block after:h-full after:w-full
        after:content-['']
        after:bg-yellow-400 after:rounded-[3rem]
        after:-z-10
        after:-translate-x-full after:rotate-10
        after:origin-top-left
        after:transition-transform after:duration-200 after:ease-out
        hover:after:translate-x-0 hover:after:rotate-0
      "
    >
      {label}
    </a>
  );
}