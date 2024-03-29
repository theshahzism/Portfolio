import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin, fiver } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex item-center gap-[20px]"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] cursor-pointer text-center mt-1">
            Shahzain Hassan
          </p>
        </Link>

        <ul className="list-none hidden gap-10 flex-row sm:flex items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <div className="flex gap-2 items-center justify-center">
              <a href="https://github.com/theshahzism" target="blank">
                <img src={github} alt="Github" className="h-[35px] w-auto" />
              </a>
              <a href="https://www.fiverr.com/zainshahzain" target="black">
                <img
                  src={fiver}
                  alt="Fiver"
                  className="h-[30px] w-auto rounded-md"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/shahzainhassan/"
                target="blank"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-[40px] w-auto rounded-m"
                />
              </a>
            </div>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } cursor-pointer font-poppins font-medium text-[16px] `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <div className="flex gap-2 items-center justify-center">
                  <a href="https://github.com/theshahzism" target="blank">
                    <img
                      src={github}
                      alt="Github"
                      className="h-[30px] w-auto"
                    />
                  </a>
                  <a href="https://www.fiverr.com/zainshahzain" target="black">
                    <img
                      src={fiver}
                      alt="Fiver"
                      className="h-[27px] w-auto rounded-md"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shahzainhassan/"
                    target="blank"
                  >
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="h-[35px] w-auto rounded-md"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
