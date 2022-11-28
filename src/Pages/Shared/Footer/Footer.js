import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1282E7" }}
      className="footer footer-center p-10  text-white absolute border-t-2 mt-10"
    >
      <div>
        <img
          src="https://i.ibb.co/gDS3J7f/logo3.png"
          className="w-36"
          alt="logo"
        />
        <p className="font-bold">Xen Matrix Ltd.</p>
        <span>Phone: +01820 7946 0612</span>
        <span>Email: contact@xenmatrix.com</span>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link>
            <AiFillLinkedin className="h-6 w-6 cursor-pointer" />
          </Link>
          <Link>
            <BsTwitter className="h-6 w-6 cursor-pointer" />
          </Link>
          <Link>
            <AiFillFacebook className=" h-6 w-6 cursor-pointer"></AiFillFacebook>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
