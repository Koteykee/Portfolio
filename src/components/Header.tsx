export const Header = () => {
  return (
    <nav className="w-full bg-[#f3f0ed] border-b border-[#e2deda] fixed z-50">
      <div className="container h-18 flex items-center justify-between">
        <h3 className="text-[32px] text-[#79542e]">Maria Ridal</h3>
        <div className="text-2xl text-[#79542e] flex gap-6">
          <h4 className="hover:underline hover:cursor-pointer">Projects</h4>
          <h4 className="hover:underline hover:cursor-pointer">About</h4>
          <h4 className="hover:underline hover:cursor-pointer">Contact</h4>
        </div>
      </div>
    </nav>
  );
};
