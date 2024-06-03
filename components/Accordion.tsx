import { Questions } from "../utils/utils";
import { motion } from "framer-motion";
import React, { useId, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
const Accordion = () => {
  const [showAns, toggleAns] = useState(false);
  const [currentQuestion, setQuestion] = useState<number | null>(null);
  return (
    <section className="flex flex-col p-10  md:gap-8 justify-center gap-8 w-full">
      {Questions.map((question, index) => {
        const id = useId();
        return (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={id}
            className=" text-black border-gray-300 border-b rounded-md  p-4 md:w-[70%] w-[100%] mx-auto"
          >
            <motion.div
              animate={"visible"}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.8 },
              }}
              transition={{ duration: 0.5 }}
              className="flex justify-between p-2"
            >
              <h5 className="flex-1 text-black">{question.question}</h5>
              <IoAddCircle
                color="#008000"
                className={`${showAns ? "hidden" : "visible"} cursor-pointer`}
                size={24}
                onClick={() => {
                  setQuestion(index);
                  toggleAns(true);
                }}
              />
            </motion.div>
            <motion.div
              animate={showAns ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.8 },
              }}
              transition={{ duration: 0.5 }}
              className={` ${
                showAns && currentQuestion == index ? "block" : "hidden"
              }  bg-[#E4ECF7] p-2 flex flex-col gap-4 rounded-md`}
            >
              <p className="text-black text-center">{question.answer}</p>

              <FaMinus
                color="#008000"
                size={24}
                className="self-end cursor-pointer"
                onClick={() => {
                  toggleAns(false);
                  setQuestion(null);
                }}
              />
            </motion.div>
          </motion.section>
        );
      })}
    </section>
  );
};

export default Accordion;
