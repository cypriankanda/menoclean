"use client";
import { links, navLinks, formatPhoneNumber } from "../utils/utils";
import Image from "next/image";
import Logo from "../public/logo.png";
import { FaBars } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { useGlobalContext } from "../context/AppContext";
import { useRef } from "react";

const Navbar = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { showSideBar, showNavBarMenu, hideNavBarMenu } = useGlobalContext();
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX } = e;
    if (clientX >= 648 || clientX < 600) {
      return hideNavBarMenu();
    }
    return;
  };
  return (
    <nav className="flex sticky top-0 bg-white overflow-hidden justify-between items-center z-50 ">
      <a href="#home" className="flex w-[20%]  items-start">
        <Image alt="Logo" src={Logo} width={80} height={80} priority />
      </a>
      <ul className="  hidden md:flex-1 md:flex justify-evenly gap-2 items-center p-4 text-[16px]">
        {navLinks.map((link) => {
          return (
            <li
              key={link.name}
              className=" hover:scale-105 duration-300 hover:underline hover:underline-offset-8"
            >
              <a
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => {
                  if (link.name === "Services") {
                    console.log(link.name);

                    return showNavBarMenu();
                  } else {
                    return;
                  }
                }}
                className="flex gap-1 items-center active:text-[#0060F1] leading-6 text-black tracking-[1px] "
                href={link.link}
              >
                {link.name}
                {/* {link.name === "Services" ? <RiArrowDropDownLine /> : ""} */}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="hidden md:flex w-[20%] justify-around items-center">
        <a href={`https://wa.me/${links.phone}`} target="_blank">
          <FaWhatsapp color="#008000" size={24} className="hover:scale-105" />
        </a>
        <a href={`mailto:${links.email}`} target="_blank">
          <MdOutlineMailOutline
            color="#008000"
            size={24}
            className="hover:scale-105"
          />
        </a>

        <FaPhone
          id="phone"
          onClick={() => modalRef.current?.showModal()}
          color="#008000"
          size={24}
          className="hover:scale-105 cursor-pointer"
        />
      </div>
      <dialog
        className="p-1"
        ref={modalRef}
        onClick={() => modalRef.current?.close()}
      >
        <p className="text-[24px] font-bold">
          {formatPhoneNumber(links.phone)}
        </p>
      </dialog>

      <div className="md:hidden w-[40px] flex justify-center items-center h-[40px] bg-[#CFEFCF] rounded-full m-2">
        <FaBars
          color="#008000"
          size={24}
          onClick={() => showSideBar()}
          className="inline-block md:hidden cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
