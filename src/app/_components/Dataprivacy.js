/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { ReactFlashlight } from "react-flashlight";
import Image from "next/image";

const Dataprivacy = () => {
  const style = {
    background:
      "radial-gradient(circle closest-side at 00% 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)",
    width: "100vw",
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col p-5 bg-[#000]">
        <Image
          src="https://web-images.credcdn.in/v2/_next/assets/images/landing/datasafe.png"
          alt="Lock_id"
          width={100}
          height={100}
          className="pt-8"
        />
        <p className="text-[27px] text-[#fff] capitalize font-[700] my-8 sm:text-center">
          your data isn't our business. keeping it safe is.
        </p>
      </div>
      <ReactFlashlight>
        <div className="bg-black">
          <div className="w-[100vw]">
            <div style={style} className="text-center">
              <p className="text-[64px] text-[#fff] capitalize font-[700] my-14">
                all your personal data and <br />
                transactions are encrypted and <br />
                secured. there's no room for mistakes <br />
                because we didn't leave any.
              </p>
            </div>
          </div>
        </div>
      </ReactFlashlight>
    </div>
  );
};

export default Dataprivacy;
