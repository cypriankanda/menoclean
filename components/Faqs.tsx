"use client";
import axios from "axios";
import Accordion from "./Accordion";
import React from "react";
import toast from "react-hot-toast";

const Faqs2 = () => {
  const [loading, setLoading] = React.useState(false);
  const sendQuestion = async (data: {}) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/contact", data);
      setLoading(false);
      toast.success(`${res.data.message}`);
    } catch (error) {
      setLoading(false);
      toast.error(`Please try again later`);
    }
  };
  const handleQuestionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (Object.values(data).includes("")) {
      return toast.error("please fill all the fields");
    }

    sendQuestion(data);
  };
  return (
    <section id="faqs" className="min-h-svh flex flex-col">
      <div className="w-full flex flex-col justify-evenly h-[50vh] bg-[url('../public/faqs.avif')]  bg-center bg-cover bg-no-repeat bg-opacity-85 bg-blend-overlay">
        <h3 className="text-white text-center mt-2">FAQS</h3>
        <form
          onSubmit={handleQuestionSubmit}
          className="md:w-2/4 w-full mx-auto p-4 flex flex-col justify-center items-center gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="enter your email here"
            className="bg-transparent rounded-md text-black  bg-white w-2/3 p-2 placeholder:font-light placeholder:text-gray-600"
          />
          <input
            type="text"
            name="question"
            placeholder="enter your question here"
            className="bg-transparent rounded-md  text-black  bg-white w-2/3 p-2 placeholder:font-light placeholder:text-gray-600"
          />
          <button
            type="submit"
            className="p-2 mx-auto col-span-2 w-1/3 rounded-[4px] bg-[#008000] text-white "
          >
            {`${loading ? "loading..." : "send question"}`}
          </button>
        </form>
      </div>
      <div className="text-white flex-1 flex-col">
        <h4 className="text-center">Frequently asked questions</h4>
        <Accordion />
      </div>
    </section>
  );
};

export default Faqs2;
