import data from "../data";
import Image from "./Image";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useState } from "react";

const ImageContainer = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };
  const handleNext = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="h-[250px] mt-16 md:mt-0 md:h-[450px] flex relative">
      <FaChevronCircleLeft
        className="absolute top-1/3 translate-y-1/3 left-[50px] text-2xl cursor-pointer"
        onClick={handlePrev}
      />
      {data.map((img, idx) => idx === index && <Image key={idx} {...img} />)}

      <FaChevronCircleRight
        className="absolute top-1/3 translate-y-1/3 right-[50px] text-2xl cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
};

export default ImageContainer;
