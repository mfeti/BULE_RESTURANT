/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import { dropDownLinks, navLinks } from "../constants";
import Button from "../ui/Button";

function Navbar({ handlePopup }) {
  const [activeLink, setActiveLink] = useState();
  return (
    <header data-aos="fade" className="shadow-lg bg-white">
      <div className="2xl:px-48 xl:px-24 sm:px-16 px-8 flex items-center justify-between py-3 sm:py-4">
        {/* Logo section */}
        <div className="font-bold xl:text-3xl text-2xl">
          <a href="/" className="whitespace-nowrap">
            ቡሌ | BUULE-RESTAURANT
          </a>
        </div>
        {/* NavLinks section */}
        <nav className="sm:flex hidden">
          <ul className="flex items-center gap-10">
            {navLinks.map((link, i) => (
              <li key={link.label} className="lg:block hidden">
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
            <li className="group lg:block hidden">
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
              <Button style="bg-secondary" handlePopup={handlePopup}>
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
