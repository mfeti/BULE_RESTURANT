import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import { dropDownLinks, navLinks } from "../constants";
import Button from "../ui/Button";

function Navbar() {
  const [activeLink, setActiveLink] = useState();
  return (
    <header className="shadow-sm bg-white">
      <div className="container flex items-center justify-between py-3 sm:py-4">
        {/* Logo section */}
        <div className="font-bold text-3xl">
          <a href="/" className="whitespace-nowrap">
            BULE-RESTAURANT
          </a>
        </div>
        {/* NavLinks section */}
        <nav className="flex">
          <ul className="lg:flex hidden items-center gap-10">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${
                    activeLink === i ? "text-primary" : ""
                  } text-xl hover:text-primary font-semibold transition-all duration-300 whitespace-nowrap`}
                  onClick={() => setActiveLink(i)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Sample dropdown for categories */}
            <li className="group">
              <a
                href=""
                className={`text-xl hover:text-primary font-semibold transition-all duration-300 flex items-center gap-2`}
                onClick={() => {}}
              >
                Categories
                <span className="group-hover:rotate-180 transition">
                  <IoMdArrowDropdown />
                </span>
              </a>
              {/* Dropdown Section */}
              <div className="absolute z-[999] hidden group-hover:block w-[200px] shadow-md">
                <ul>
                  {dropDownLinks.map((link) => (
                    <li key={link.label} className="">
                      <a
                        href={link.href}
                        className="w-full hover:border-l-4 border-primary font-semibold inline-block py-3 px-4 hover:bg-primary/20 text-xl"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Login button section */}
            <li>
              <Button style="uppercase text-white font-inter font-semibold bg-secondary px-4 h-[40px] py-2 focus:outline-none focus:ring focus:ring-secondary/30 rounded-sm flex gap-2 items-center hover:scale-125 duration-300">
                <span>
                  <FaUser />
                </span>{" "}
                My Account
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
