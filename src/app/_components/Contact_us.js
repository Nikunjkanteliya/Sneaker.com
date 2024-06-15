import React from "react";
import Map from "./Map";
import Contact_us_form from "./Contact_us_form";

const Contact_us = () => {
  return (
    <div className="max-w-[1080px] mx-auto my-0 p-5 contact_us_section">
      <p className="p-[15px] text-[30px] text-[#212a2f] font-[700] font-serif underline sm:text-center">
        Contact_us
      </p>
      <div className="grid grid-cols-3 place-items-center mt:grid-cols-1 mt:gap-y-3">
        <Contact_us_form />
        <div className="border-l-[1px] w-full h-full mx-auto max-w-[25%] border-gray-500"></div>
        <Map />
      </div>
    </div>
  );
};

export default Contact_us;
