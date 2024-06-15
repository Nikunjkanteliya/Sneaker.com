"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useFormik } from "formik";
import { contactusSchema } from "../schemas";
import { useForm, ValidationError } from "@formspree/react";
const inivalValues = {
  userName: "",
  userMail: "",
  userMsg: "",
};
const Contact_us_form = () => {
  const [state, handleSubmit] = useForm("xdoqqgvd");
  const { handleChange, values, errors, touched } = useFormik({
    initialValues: inivalValues,
    validationSchema: contactusSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      resetForm();
    },
  });
  if (state.succeeded) {
    return (
      <div className="text-[22px] text-green-600 font-[500] drop-shadow-md">
        {" "}
        <Typewriter
          words={["Thanks for response 👍"]}
          loop={false}
          cursor
          cursorStyle="..."
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="text-[25px] font-[700] first-letter:text-red-700 sm:text-center">
        {" "}
        <Typewriter
          words={["Drop us a line"]}
          loop={false}
          cursor
          cursorStyle="..."
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <label
          for="website-admin"
          className="block my-2 text-sm font-medium text-gray-900 sm:text-center"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            name="userName"
            id="website-admin"
            onChange={handleChange}
            value={values.userName}
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
            placeholder="Bruce Wayne"
          />
        </div>
        {errors && touched ? (
          <div>
            <p className="text-[14px] text-red-700 font-semibold p-[2px] text-center">
              {errors.userName}
            </p>{" "}
          </div>
        ) : null}
        <label
          for="website-admin"
          className="block my-2 text-sm font-medium text-gray-900 sm:text-center"
        >
          Useremail
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="email"
            name="userMail"
            id="website-admin"
            onChange={handleChange}
            value={values.userMail}
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
            placeholder="Xyz@gmail.com"
          />
        </div>
        {errors && touched ? (
          <div>
            <p className="text-[14px] text-red-700 font-semibold p-[2px] text-center">
              {errors.userMail}
            </p>{" "}
          </div>
        ) : null}
        <label
          for="message"
          className="block my-2 text-sm font-medium text-gray-900 sm:text-center"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="userMsg"
          rows="4"
          value={values.userMsg}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Leave a comment..."
        ></textarea>
        {errors && touched ? (
          <div>
            <p className="text-[14px] text-red-700 font-semibold p-[2px] text-center">
              {errors.userMsg}
            </p>
          </div>
        ) : null}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800  rounded-lg text-center "
          >
            <svg
              className="w-3.5 h-3.5 text-white me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact_us_form;
