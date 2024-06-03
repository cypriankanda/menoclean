"use client";
import React, { useEffect } from "react";
import { services } from "../utils/utils";
import Link from "next/link";

const OurServices2 = () => {
  const [serviceIndex, setService] = React.useState(0);
  const [timeOutId, setTimeOutId] = React.useState<any | null>(null);
  const changeCard = () => {
    const timeOutId = setTimeout(() => {
      if (serviceIndex === services.length - 1) {
        return setService(0);
      }
      return setService(serviceIndex + 1);
    }, 3000);
    setTimeOutId(timeOutId);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeOutId);
  };
  const handleMouseLeave = () => {
    changeCard();
  };
  const service = services.find((_, index) => index === serviceIndex);

  useEffect(() => {
    changeCard();
  }, [serviceIndex]);
  return (
    <main
      id="services"
      className="min-h-[90svh]  w-full flex flex-col bg-[#008000] items-center justify-center gap-2"
    >
      <h2 className="text-white">Our services</h2>
      <Link href={`/${service?.id}`}>
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={service?.image}
          alt={service?.service}
          className="md:w-[900px] md:h-[400px] w-[90vw] h-[40vh] rounded-md inset-0 object-cover object-center"
        />
      </Link>
      <div className="flex justify-between md:w-[900px] w-[90vw]">
        <h5 className="text-white capitalize tracking-widest">
          {service?.service}
        </h5>
        <a
          href={`/${service?.id}`}
          className="text-white text-[14px] underline "
        >
          Learn more
        </a>
      </div>

      <div className="flex justify-evenly items-center w-1/2 ">
        {services.map((_, index) => {
          return (
            <div
              onClick={() => {
                clearTimeout(timeOutId);
                setService(index);
              }}
              key={index}
              className={`rounded-full  h-[10px] flex gap-10 w-[10px] ${
                index === serviceIndex
                  ? "bg-white animate-bounce"
                  : "bg-[#CFEFCF]"
              } cursor-pointer `}
            ></div>
          );
        })}
      </div>
    </main>
  );
};

export default OurServices2;
