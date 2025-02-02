import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/ShivankLogo.png";
import { HiDownload } from "react-icons/hi";

const NavBar = () => {
  return (
    <nav className="mb-16 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shivank-sharma13">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/shivank13">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
