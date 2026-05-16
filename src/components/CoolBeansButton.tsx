export default function CoolBeansButton({ label = 'hover me', href = '#', className="text-white/80 text-3xl border-white hover:text-black after:bg-white" }) {
  return (
    <a
      href={href}
      style={{ fontFamily: "'Roboto', sans-serif", willChange: 'transform' }}
      className={`
       ${className}
        relative z-0 inline-block overflow-hidden no-underline
        rounded-xl border-2 
        px-6 py-2
         font-thin
        transition-[transform,border-color,color] duration-400 ease-in-out
        hover:scale-105 hover:border-transparent 
        after:absolute after:left-0 after:top-0
        after:block after:h-full after:w-full
        after:content-['']
         after:rounded-xl
        after:-z-10
        after:-translate-x-full after:rotate-10
        after:origin-top-left
        after:transition-transform after:duration-400 after:ease-out
        hover:after:translate-x-0 hover:after:rotate-0
      `}
    >
      {label}
    </a>
  );
}