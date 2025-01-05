import Image from "next/image";

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full bg-transparent p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">P P </h1>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
