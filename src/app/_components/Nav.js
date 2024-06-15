"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { shoesdata } from '../constants/shoesdata';
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import Scrollprogress_bar from "./Scrollprogress_bar";

const Nav = () => {
  const [activeindex, setactiveindex] = useState(null);
  const breadcrums = [" Home", "Contact us", "About", "Pairs"];
  const totalItems = useSelector((state) => state?.counter?.addedItems);

  useEffect(() => {
    // Find the nextjs-portal element
    setTimeout(() => {
      const nextjsPortal = document.querySelector("nextjs-portal"); // Adjust the selector based on your actual structure

      // Check if the element exists and has a shadowRoot
      if (nextjsPortal.shadowRoot) {
        // console.log("inside shadow root")
        const shadowRoot = nextjsPortal.shadowRoot;

        // Example: Manipulating elements inside the shadow DOM
        const shadowElement = shadowRoot.querySelector(
          ".nextjs-toast-errors-parent"
        );
        if (shadowElement) {
          shadowElement.style.display = "none"; // Example of changing style
        }
      } else {
        console.error("nextjs-portal does not have a shadowRoot.");
      }
    }, 1000);
  }, []);

  const handleClick = (index) => {
    if (index === 2) {
      const aboutusElem = document.querySelector(".about_us_view");
      aboutusElem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    } else if (index === 3) {
      const aboutusElem = document.querySelector(".shoes_List");
      aboutusElem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } else if (index === 0) {
      const aboutusElem = document.querySelector(".Home_crousel");
      aboutusElem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    } else if (index === 1) {
      const aboutusElem = document.querySelector(".contact_us_section");
      aboutusElem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
    if (index === activeindex) return;
    setactiveindex(index);
  };

  return (
    <div className="h-[55px] flex items-center fixed w-[100%] bg-[#fff] top-0 left-0 z-10 shadow-md">
      <Scrollprogress_bar />
      <ul className="flex justify-around items-center w-full">
        {breadcrums.map((menucrums, inx) => (
          <li
            key={inx}
            className={`border-b-2 border-transparent p-2 hover:border-[#393e46] ease-in-out delay-[200ms] transform cursor-pointer text-gray-500 hover:text-black ${
              inx === activeindex ? "active" : ""
            } sm:text-[12px]`}
            onClick={() => {
              handleClick(inx);
            }}
          >
            {" "}
            {menucrums}
          </li>
        ))}
        <Link href={"/cart"} className="relative w-[50px]">
          <ShoppingCart />{" "}
          {totalItems.length > 0 ? (
            <span className="absolute top-0 left-[30px] rounded-full w-[18px] h-[18px] text-[12px] font-[700] bg-black text-[#fff] text-center">
              {totalItems.length}
            </span>
          ) : null}{" "}
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
