import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className={`sm:sticky top-0 z-20 flex justify-between items-center h-24 mx-auto px-4 text-zinc-600 bg-gray-100 backdrop-opacity-20 backdrop-filter backdrop-blur-lg cursor-pointer transition-colors duration-300 ${
        navOpen ? "sticky" : ""
      }`}
      style={{ backgroundColor: navOpen ? "#4A5568" : "transparent" }}>
      <h1 className='w-full text-2xl md:text-4xl font-bold text-orange-400'>
        ISAM TRADERS
      </h1>
      <div
        className='md:hidden'
        style={{ transform: navOpen ? "scale(1.1)" : "scale(1)" }}>
        {navOpen ? (
          <AiOutlineClose size={24} onClick={handleNavToggle} />
        ) : (
          <AiOutlineMenu size={24} onClick={handleNavToggle} />
        )}
      </div>
      <ul
        className={`${
          navOpen ? "block h-24 text-base text-orange-300" : "hidden"
        } md:flex md:items-center md:flex-row md:gap-4`}
        style={{ zIndex: navOpen ? "20" : "auto" }}>
        <li className='p-2 hover:text-orange-600 transition-colors duration-300'>
          Home
        </li>
        <li className='p-2 hover:text-orange-600 transition-colors duration-300'>
          Cars
        </li>
        <li className='p-2 hover:text-orange-600 transition-colors duration-300'>
          Shop
        </li>
        <li className='p-2 hover:text-orange-600 transition-colors duration-300'>
          Company
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
