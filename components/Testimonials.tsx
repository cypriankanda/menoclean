"use client";
import { CardStack } from "./ui/TestimonialCard";
import { testimonials } from "../utils/utils";
const Testimonials = () => {
  return (
    <main
      id="testimonials"
      className="min-h-screen flex flex-col justify-evenly items-center bg-[#0060F1] p-2"
    >
      <h3 className="text-white text-center mt-4">
        {/* What our clients say about us */}
        Testimonials
      </h3>
      <CardStack items={testimonials} offset={20} />
    </main>
  );
};

export default Testimonials;
{
  /* <section className="mt-6 flex-1 flex flex-wrap gap-2 justify-evenly items-center p-2">
{Array(4)
  .fill(0)
  .map((item) => (
    <main className="bg-[#CFEFCF] flex flex-col w-full h-1/3 md:w-1/3 p-4 rounded-md">
      <div className="flex justify-between p-2">
        <p>image</p>
        <h5 className="text-black">Name</h5>
      </div>
      <div className="p-2 mt-2 ">
        <p className="tracking-wider text-center text-black leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          accusantium, repudiandae placeat laudantium quaerat officiis
          odit aliquam fugiat iure ad!
        </p>
      </div>
    </main>
  ))}
</section> */
}
