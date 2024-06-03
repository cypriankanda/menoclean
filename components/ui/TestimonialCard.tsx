"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: any;
  name: string;
  image: string;
  testimony: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 6000);
  };

  return (
    <div className="relative flex justify-center items-center h-[50vh] w-full md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black  w-full h-auto md:w-[35vw] rounded-md bg-[#CFEFCF] p-4 shadow-xl border border-neutral-200  flex flex-col justify-evenly"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex justify-between p-2">
              <Image
                src={card.image}
                height={100}
                width={100}
                className="w-[100px] h-[100px] rounded-full object-cover"
                alt={card.name.concat("image")}
              />

              <h5 className="text-black font-bold">{card.name}</h5>
            </div>
            <div className="p-2 mt-2 ">
              <p className=" text-center font-medium text-black leading-8">
                {card.testimony}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
