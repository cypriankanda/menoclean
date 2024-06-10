"use client";
import { MdOutlineMailOutline, MdLocationCity } from "react-icons/md";
import {
  footerLinks,
  links,
  services,
  formatPhoneNumber,
} from "../utils/utils";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-around min-h-[60vh] bg-[#0060F1]">
      <section className="w-[80%] mx-auto md:grid flex flex-wrap gap-4  mt-6 grid-cols-4 p-2 ">
        <div className="flex w-full gap-2 h-[200px] items-center">
          <div>
            <h1 className="text-white font-black">M</h1>
          </div>
          <div className="flex flex-col justify-between items-start text-white">
            <h5>eno</h5>
            <h5>clean</h5>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 text-white -tracking-wide">
          <h3 className="font-black text-xl">Company</h3>
          <p className="text-[14px]">
            <MdLocationCity />
            Seattle , Western Washington,Eastern Washington , Portland Oregon
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 text-white  tracking-wide">
          <h3 className="font-black text-xl col-span-2">Services</h3>
          {services.map((service, index) => {
            return (
              <p className="text-[14px]" key={index}>
                {service.service}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 text-white -tracking-wide">
          <h3 className="font-black text-xl">Contact</h3>
          <div className="flex justify-start items-center gap-2">
            <a href={`tel:${links.phone}`}>
              <FaPhone />
            </a>
            <p className="text-[14px] md:text-[16px]">
              {formatPhoneNumber(links.phone)}
            </p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <a href={`https://wa.me/${links.phone}`}>
              <FaWhatsapp />
            </a>
            <p>Chat on whatsapp</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <a href={`mailto:${links.email}`}>
              <MdOutlineMailOutline />
            </a>
            <p className="text-[14px] md:text-[16px]">send us an email</p>
          </div>
        </div>
      </section>
      <section className="flex p-8 w-full items-center justify-between">
        <div className="w-1/3 h-[1px] bg-white"></div>
        {footerLinks.map((link, index) => {
          return (
            <a href={link.baseUrl} target="_blank" key={index}>
              <Image src={link.icon} alt={link.alt} width={32} height={32} />
            </a>
          );
        })}
        <div className="w-1/3 h-[1px] bg-white"></div>
      </section>
      <p className="text-center text-white">
        MenoClean Remedial Services . All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
