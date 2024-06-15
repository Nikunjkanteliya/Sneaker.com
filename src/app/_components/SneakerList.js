import React from "react";
import Sneakeritems from "./Sneakeritems";

const SneakerList = ({ category, sneakers }) => {
  return (
    <div>
      <h2 className="p-[15px] text-[30px] text-[#212a2f] font-[700] font-serif underline sm:text-center">
        {category}
      </h2>
      <div className="sneaker-items grid grid-cols-3 place-items-center min-h-[1650px] mt:grid-cols-2 sm:grid-cols-1">
        {Object.entries(sneakers).map(([key, sneaker]) => (
          <Sneakeritems key={key} details={sneaker} />
        ))}
      </div>
    </div>
  );
};

export default SneakerList;
