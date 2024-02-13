import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Carl from "@/assets/Carl.webp";
import Forrest from "@/assets/Forrest.webp";
import Alen from "@/assets/Alen.webp";
import Black from "@/assets/Black.webp";
import Elina from "@/assets/Elina.webp";
import arrowDownIcon from "@/assets/arrow_down.gif";

const HorizontalCarousel = () => {
  return (
    <div className="bg-[#e4efea]">
      <div className="flex h-[120px] items-center justify-center">
        <span className="font-semibold uppercase text-[#f79946e8]">
          Scroll down
        </span>
      </div>
      <div className="flex justify-center">
        <img src={arrowDownIcon} alt="Arrow Icon" className="w-[55px] h-[55px]" style={{ zIndex: 1000 }} />
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#e4efea]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCarousel;

type CardType = {
  image: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    image: Carl,
    title: "Harmony",
    id: 1,
  },
  {
    image: Forrest,
    title: "In Motion",
    id: 2,
  },
  {
    image: Alen,
    title: "Yoga",
    id: 3,
  },
  {
    image: Black,
    title: "For",
    id: 4,
  },
  {
    image: Elina,
    title: "You",
    id: 5,
  },
];
