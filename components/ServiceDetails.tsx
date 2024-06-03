"use client";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { links, services } from "../utils/utils";
import Image from "next/image";
const ServiceDetails = ({ id }: { id: string }) => {
  const service = services.find((service) => service.id == id);
  const router = useRouter();
  if (!service) {
    return (
      <section className="min-h-screen bg-[#6FCC6F] flex flex-col gap-8 items-center justify-center">
        <h2 className="text-center text-white">
          There is a problem page not found
        </h2>
        <a href="/">
          <button className="p-2 text-white flex items-center justify-center btn btn-lg btn-error">
            Go back home
          </button>
        </a>
      </section>
    );
  }
  return (
    <section className="min-h-screen grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center flex-col justify-center gap-10 p-10">
      <Image
        src={service.image}
        alt={service.service.concat("image")}
        height={600}
        width={600}
      />
      <div className="flex flex-col gap-4 justify-evenly items-center min-h-[40vh]">
        <h3 className="text-black">{service?.service}</h3>
        <p className="leading-9 tracking-wider md:max-w-[70%] w-full text-black">
          {service?.description}
        </p>
        <div className=" md:w-2/3 w-full flex p-2 justify-around items-center">
          <a href={`https://wa.me/${links.phone}`} target="_blank">
            <FaWhatsapp color="black" size={24} />
          </a>
          <a href={`mailto:${links.email}`} target="_blank">
            <MdOutlineMailOutline color="black" size={24} />
          </a>
          <a href={`tel:${links.phone}`} target="_blank">
            <FaPhone color="black" size={24} />
          </a>
        </div>
        <button
          onClick={() => router.push("/#contact")}
          className="p-2 text-[16px] text-white bg-[#0060F1] md:w-2/3 w-full rounded-[4px] transition hover:-translate-y-1 duration-200 ease-linear"
        >
          Request service
        </button>
        <button
          onClick={() => router.push("/")}
          className="p-2 text-[16px] text-black  border border-[#0060F1] md:w-2/3 w-full rounded-[4px] transition hover:-translate-y-1 duration-200 ease-linear"
        >
          back home
        </button>
      </div>
    </section>
  );
};

export default ServiceDetails;
