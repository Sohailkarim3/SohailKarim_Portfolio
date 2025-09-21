import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="mailto:sohailkarimeng@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://github.com/Sohailkarim3"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/sohail-karim-602534222" 
        target="_blank" 
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;