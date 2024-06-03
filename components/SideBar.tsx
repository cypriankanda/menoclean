"use client";
import { useGlobalContext } from "../context/AppContext";
import { navLinks } from "../utils/utils";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const SideBar = () => {
  const { hideSideBar, isSideBarOpen } = useGlobalContext();
  return (
    <aside
      className={`sidebar flex flex-col  justify-around p-10 items-center bg-[#CFEFCF] md:hidden ${
        isSideBarOpen ? "show-sidebar " : ""
      }`}
    >
      <IoMdClose
        color="#008000"
        className="absolute cursor-pointer  top-10 right-10"
        size={24}
        onClick={() => hideSideBar()}
      />
      <ul className=" w-[80%] h-[60%] flex flex-col justify-around  items-center">
        {navLinks.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:scale-105 duration-300 ease-linear"
            >
              <a
                onClick={() => hideSideBar()}
                href={item.link}
                className="capitalize text-navclamp text-[16px] cursor-pointer text-[#514B4B] "
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
