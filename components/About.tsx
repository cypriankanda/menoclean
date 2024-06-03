import React from "react";
import { CardContainer } from "../components/ui/Card";
import { services } from "../utils/utils";
import Link from "next/link";
const About = () => {
  return (
    <main id="about" className="flex flex-col justify-evenly  min-h-[100svh]">
      <section className="flex  flex-col gap-6 p-4  items-center">
        <h2 className="text-black capitalize">Who we are</h2>
        <p className="md:max-w-[70%] w-full leading-8  text-center text-[#171717]">
          MenoClean Remedial Services is a trusted name in the remediation
          industry, with years of experience and expertise in handling complex
          cleanup projects. Our team consists of highly trained professionals
          who are equipped with the latest tools, techniques, and technology to
          tackle any bio-hazard, hoarding, crime scene, homeless camp,
          industrial accident, mold remediation, construction cleanup ,
          Janitorial Services , odor removal, or disinfection challenge with
          precision and care
        </p>
      </section>
      <h2 className="text-center text-black">Our top services</h2>
      <section className="flex flex-wrap flex-1 items-center justify-around">
        {Array(3)
          .fill(0)
          .map((item, index) => {
            return (
              <CardContainer
                key={index}
                className={`w-[350px] h-[500px]  flex flex-col`}
              >
                <img
                  src={services[index].image}
                  alt={services[index].image}
                  className="w-full h-full inset-0 object-cover object-center rounded-md"
                />
                <p className="text-black z-50 font-bold">
                  {services[index].service}
                </p>
                <Link href={`/${services[index].id}`} className="text-blue-500">
                  Learn more
                </Link>
              </CardContainer>
            );
          })}
      </section>
    </main>
  );
};

export default About;
