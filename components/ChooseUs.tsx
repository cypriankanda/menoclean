import React, { useEffect, useId } from "react";
import { WhyChooseUs } from "../utils/utils";
// import { IconType } from "react-icons/lib";

const ChooseUs = () => {
  const [reason, setReason] = React.useState(0);
  const [timeOutId, setTimeOutId] = React.useState<any | null>(null);
  const changeCard = () => {
    const timeOutId = setTimeout(() => {
      if (reason === WhyChooseUs.length - 1) {
        return setReason(0);
      }
      return setReason(reason + 1);
    }, 3000);
    setTimeOutId(timeOutId);
  };
  const reasonFound = WhyChooseUs.find((_, index) => index === reason);
  useEffect(() => {
    changeCard();
  }, [reason]);
  return (
    <main className="min-h-screen flex flex-col p-4 justify-evenly items-center">
      <section className="flex gap-2  flex-col items-center justify-center">
        <h3 className="text-black m-2">Why choose us?</h3>
        <p className="text-black  text-center text-[16px] tracking-widest md:max-w-[60%] w-full m-2 leading-6">
          MenoClean Remedial Services is a leading provider of comprehensive and
          specialized cleaning solutions, catering to various sectors including
          residential, commercial, and industrial. With a dedicated team of
          trained professionals and state-of-the-art equipment, we are committed
          to delivering top-notch remediation services tailored to our clients'
          needs.
        </p>
      </section>

      <section className="h-[40vh] w-[90vw] items-center gap-4 justify-evenly  md:w-[500px] min-h-[50svh] transition duration-300 ease-linear flex flex-col bg-[#000918] md:p-4 p-2 rounded-md">
        {reasonFound?.icon}
        <h3 className="text-white text-center font-semibold">
          {reasonFound?.title}
        </h3>
        <p className="text-white md:text-[16px] text-[14px] text-center leading-8">
          {reasonFound?.description}
        </p>
      </section>
      <div className="flex gap-2 items-center justify-evenly h-2/3 md:w-1/6 w-[30vw] mx-auto p-1">
        {Array(WhyChooseUs.length)
          .fill(0)
          .map((_, index) => {
            const id = useId();
            return (
              <div
                key={id}
                onClick={() => {
                  clearTimeout(timeOutId);
                  setReason(index);
                }}
                className={` w-[10px] h-[10px]   ${
                  index == reason ? "bg-[#6FCC6F]" : "bg-[#CFEFCF]"
                }  rounded-full transition duration-200 cursor-pointer`}
              ></div>
            );
          })}
      </div>
    </main>
  );
};

export default ChooseUs;
