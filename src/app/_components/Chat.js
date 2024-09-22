 "use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Chat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal opened");
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // console.log("Modal closed");
  };
  useEffect(() => {
    // When modal is open, prevent body scrolling
    if (isModalOpen) {
      document.querySelector(".scroll_frezz").classList.add("overflow_hidden");
    } else {
      // document.element.style.overflow = 'auto';
      document
        .querySelector(".scroll_frezz")
        .classList.remove("overflow_hidden");
    }

    // Clean up to revert the style on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="bg-gray-700 border rounded-md w-20 h-12 px-4 pt-3 fixed bottom-12 right-5 text-center cursor-pointer z-[99]">
      <p className="text-gray-200" onClick={openModal}>
        Chat
      </p>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Our Social Media Handle`s
            </h2>
            <p className="mb-4">Follow Us on....</p>
            <div className="grid grid-cols-3 place-items-center mb-[16px]">
              {" "}
              <Link
                href={"https://www.instagram.com/accounts/login/?hl=en"}
                target="_blank"
              >
                {" "}
                <Instagram />
              </Link>{" "}
              <Link href={"https://www.facebook.com/"} target="_blank">
                {" "}
                <Facebook />{" "}
              </Link>{" "}
              <Link href={"https://x.com/?lang=en"} target="_blank">
                <Twitter />
              </Link>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
