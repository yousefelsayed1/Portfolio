import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import { navLinks } from "../constants";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const { linkdein, github, twitter } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mx-auto md:flex justify-between py-2 max-width bg-primary">
      <div className="flex justify-between items-center py-2 md:py-3">
        <NavLink to="/">
          <img
            className="w-10"
            src={logos.logo}
            alt="logo"
            onClick={() => {
              setActive("");
            }}
          />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <i class="fa-solid fa-bars text-secondary text-2xl"></i>
        </div>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : null
        } text-center md:flex justify-between`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } pb-1 md:pb-0 text-xl`}
            >
              <NavLink
                to={`/${nav.id}`}
                onClick={() => {
                  toggleClass();
                  setActive(nav.title);
                }}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <i class="fa-brands fa-twitter text-secondary text-2xl"></i>
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <i class="fa-brands fa-linkedin text-secondary text-2xl"></i>
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <i class="fa-brands fa-github text-secondary text-2xl"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
