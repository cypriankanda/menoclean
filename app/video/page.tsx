"use client";
import { useRouter } from "next/navigation";
import { FaHouse } from "react-icons/fa6";
const page = () => {
  const router = useRouter();
  const videoSrc = [
    "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1",
    "https://www.youtube.com/embed/GnSBhPHHfZ8?autoplay=1&mute=1&controls=0",
  ];

  return (
    <section className="min-h-svh over flex flex-col text-black text-center items-center justify-center gap-4">
      <h4 className="mt-4">Get a brief overview by watching our video</h4>
      <p className="mt-4 md:max-w-[60%] w-full text-[14px] md:text-[16px] text-pretty text-primary-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        exercitationem? Numquam dolorum nam necessitatibus aperiam reiciendis
        autem! Natus, facilis officiis incidunt fuga expedita autem aliquid
        impedit cum voluptatum corporis ipsum?
      </p>
      <iframe
        title="Menoclean services briefing video"
        src={videoSrc[1]}
        className="md:w-[70vw] md:h-[60vh] w-[100vw] h-[40vh]"
      ></iframe>

      <button
        onClick={() => router.push("/")}
        className="p-2 text-[16px] mt-4 text-black  border border-[#0060F1] md:w-1/6 w-2/3 rounded-[4px] transition hover:-translate-y-1 duration-200 ease-linear flex items-center justify-center gap-4 "
      >
        back home
        <FaHouse size={14} fill="green" />
      </button>
    </section>
  );
};

export default page;
