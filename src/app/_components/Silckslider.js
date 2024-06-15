"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import imgfirstDown from "../../../public/assets/nelson-ndongala-kKObh7tUPNc-unsplash.jpg";
import imgsecDown from "../../../public/assets/super-straho-5BMPrXBFTI8-unsplash.jpg";
import imgthirdDown from "../../../public/assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import fourthImg from "../../../public/assets/jakob-owens-JzJSybPFb3s-unsplash.jpg";
import fifthImg from "../../../public/assets/omar-prestwich-jLEGurepDco-unsplash.jpg";
export default function Carousel() {
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    loop: true,
    duration: 1000, // Slide transition duration in ms
  });
  const [crouselImages, setCrouselimages] = useState([
    imgfirstDown,
    imgsecDown,
    imgthirdDown,
    fourthImg,
    fifthImg,
  ]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!slider.current) return;

    const autoPlay = () => {
      slider.current.next();
    };

    // Set the interval to change slides
    intervalRef.current = setInterval(autoPlay, 3000); // Change slide every 3 seconds

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalRef.current);
  }, [slider]);
  return (
    <div ref={sliderRef} className="keen-slider mt-[50px] Home_crousel">
      {crouselImages.map((ele, inx) => {
        return (
          <div className="keen-slider__slide" key={inx}>
            {" "}
            <Image
              src={ele}
              alt="img"
              width={0}
              height={0}
              style={{ width: "100vw", height: "94vh", objectFit: "cover" }}
              className="bg-center"
            />
          </div>
        );
      })}
    </div>
  );
}
