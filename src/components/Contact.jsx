import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mt-2 mx-auto max-w-screen-xl ">
      <div className="flex justify-center items-center ">
        <form
          action="https://getform.io/slug"
          method="POST"
          className="flex flex-col w-full md:w-7/12 p-2"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>

          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
