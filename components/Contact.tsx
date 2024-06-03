import { footerLinks, links, services } from "../utils/utils";
import React, { useId } from "react";
import Image from "next/image";
import WhatsApp from "../public/whatsapp.png";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const sendEmail = async (data: {}) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/contact", data);
      toast.success(`${res.data.message}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(`Please try again later`);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (Object.values(data).includes("")) {
      return toast.error("please fill all the fields");
    }
    sendEmail(data);
  };

  return (
    <main
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <h3 className="text-center text-black">Contact us </h3>
      <section className="md:w-[70vw] w-full h-[80vh] grid md:grid-cols-2 grid-cols-1 ">
        <main className="bg-[#008000] place-content-center place-items-center h-full w-full flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:gap-4 gap-8 p-4 flex-1  w-[100%] text-white justify-evenly items-start mx-20"
          >
            <h3 className=" text-center ">Send us an email</h3>

            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className="bg-transparent outline-none  border-b border-[#CFEFCF] w-full p-2 placeholder:font-light placeholder:text-white"
            />
            <select
              name="service"
              id=""
              className="bg-transparent outline-none  border-b border-[#CFEFCF] w-full p-2"
            >
              {services.map((service) => {
                const id = useId();
                return (
                  <option key={id} className="text-black">
                    {service.service}
                  </option>
                );
              })}
            </select>
            <textarea
              name="description"
              placeholder="enter description here"
              className="bg-transparent outline-none   border-b border-[#CFEFCF] w-full p-2 placeholder:font-light placeholder-white"
            />

            <button
              className="p-2 bg-[#0060F1] rounded-[4px] hover:-translate-y-1 duration-300 ease-in-out"
              type="submit"
            >
              {`${loading ? "loading..." : "request service"}`}
            </button>
          </form>
        </main>
        <main className="md:flex hidden text-white bg-[#0060F1] flex-col justify-center gap-10 md:h-full h-auto items-center">
          <h4>Get in touch!</h4>
          <p className="text-center hidden md:block">
            Reach us by phone, whatsapp, or your favorite social media platform
          </p>
          <span>
            <a href={`tel:${links.phone}`} className="text-black underline">
              {links.phone}
            </a>
          </span>
          <div className="flex justify-center items-start gap-2 p-2">
            <Image src={WhatsApp} alt="whatsapp logo" height={40} width={40} />
            <a href={`https://wa.me/${links.phone}`} className="underline">
              Chat with us on whats app
            </a>
          </div>
          <h5>Follow us on our socials</h5>
          <div className="flex gap-6">
            {footerLinks.map((link, index) => {
              return (
                <a href={link.baseUrl} target="_blank" key={index}>
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={32}
                    height={32}
                  />
                </a>
              );
            })}
          </div>
        </main>
      </section>
    </main>
  );
};

export default Contact;
