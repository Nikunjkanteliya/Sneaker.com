import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addCart, grandTotal } from "../store/counterSlice";

const Sneakeritems = ({ details }) => {
  const dispatch = useDispatch();
  const [itemsLeftOnClick, setItemsLeftOnClick] = useState(
    details?.itemsLeft || 0
  );

  useEffect(() => {
    if (details) {
      setItemsLeftOnClick(details.itemsLeft);
    }
  }, [details]);

  const notify = () => {
    if (!details) return;

    // toast.success(`${details.name} Added`);
    dispatch(addCart(details));
    dispatch(grandTotal(details.price));
    setItemsLeftOnClick((prev) => (prev > 0 ? prev - 1 : 0));
  };

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.85 }}
      >
        <div className="cursor-pointer w-[330px] h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#ffff] lg:w-[310px]  dark:border-gray-700 mt-[20px]  ">
          <div className="grid place-items-center">
            <Image
              className="p-8 rounded-t-lg max-h-[300px] max-w-[300px] object-cover"
              src={details.img}
              alt={details.name}
              width={300}
              height={300}
            />
          </div>

          <div className="px-5 pb-5 grid place-items-center">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {details.name}
            </h5>

            <div className="flex items-center mt-2.5 mb-5">
              <span>Items Left:</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {" "}
                {itemsLeftOnClick}{" "}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900">
                ${details.price}
              </span>
            </div>

            {itemsLeftOnClick > 0 ? (
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ms-2 mt-3"
                onClick={notify}
              >
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Buy now
              </button>
            ) : (
              <p className="mt-3 font-[500] text-[22px] text-red-600 drop-shadow-lg">
                Sold Out
              </p>
            )}
          </div>
        </div>
      </motion.div>
      {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /> */}
    </div>
  );
};

export default Sneakeritems;
