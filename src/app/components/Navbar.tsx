import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="sticky top-0 w-full">
      <div className="flex px-4 md:px-20 md:py-0 items-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <span className="font-bold text-lg italics">ListSolo</span>
      </div>
    </nav>
  );
};

export default NavBar;
