export const Header = () => {
  return (
    <nav className="w-full bg-[#f3f0ed] border-b border-[#e2deda] fixed z-50">
      <div className="container h-18 flex items-center justify-between">
        <h3 className="text-[32px] text-[#79542e]">Maria Ridal</h3>
        <div className="text-2xl text-[#79542e] flex gap-6">
          <a
            href="#about-section"
            className="hover:underline hover:cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects-section"
            className="hover:underline hover:cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact-section"
            className="hover:underline hover:cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
