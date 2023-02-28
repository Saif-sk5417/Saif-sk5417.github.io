import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";


import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {

  return (
    <>
      <div className="section">
        <h2 className="section__title">
         <span className="different">Contacts</span>
        </h2>
        <div className="contactcontainer" >
          <a
            href="https://www.linkedin.com/in/saif-shaikh-76888624a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://github.com/Saif-sk5417"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
            <p>Github</p>
          </a>
          <a
            href="mailto:saifshaikh230304@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
            <p>saifshaikh230304@gmail.com</p>
          </a>
          {/* <a
            href="https://www.instagram.com/thesavagesquall"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
          </a> */}
          <a href="tel:+919324373472" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
            <p>+91 9324373472</p>
          </a>
        </div>
      </div>
    </>
  );
};