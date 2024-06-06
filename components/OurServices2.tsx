"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { services } from "../utils/utils";
import Link from "next/link";

const OurServices2 = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null);

  const changeCard = useCallback(() => {
    const id = setTimeout(() => {
      setServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    setTimeOutId(id);
  }, []);

  const handleMouseEnter = () => {
    if (timeOutId) clearTimeout(timeOutId);
  };

  const handleMouseLeave = () => {
    changeCard();
  };

  useEffect(() => {
    changeCard();
    return () => {
      if (timeOutId) clearTimeout(timeOutId);
    };
  }, [serviceIndex, changeCard]);

  const service = useMemo(() => services[serviceIndex], [serviceIndex]);

  return (
    <main
      id="services"
      className="min-h-[90svh] w-full flex flex-col bg-[#008000] items-center justify-center gap-2"
    >
      <h2 className="text-white">Our services</h2>

      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={service?.image}
        alt={service?.service}
        className="md:w-[900px] cursor-pointer md:h-[400px] w-[90vw] h-[40vh] rounded-md object-cover object-center"
      />

      <div className="flex justify-between md:w-[900px] w-[90vw]">
        <h5 className="text-white capitalize tracking-widest">
          {service?.service}
        </h5>
        <Link
          href={`/${service?.id}`}
          className="text-white text-[14px] underline"
        >
          Learn more
        </Link>
      </div>

      <div className="flex justify-evenly items-center w-1/2">
        {services.map((_, index) => (
          <div
            onClick={() => {
              if (timeOutId) clearTimeout(timeOutId);
              setServiceIndex(index);
            }}
            key={index}
            className={`rounded-full h-[10px] w-[10px] ${
              index === serviceIndex
                ? "bg-white animate-bounce"
                : "bg-[#CFEFCF]"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default OurServices2;
