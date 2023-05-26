import React from "react";
import Title from "./Title";
import axios from "axios";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Get the values of name and email fields from the form data
    const name = formData.get("name");
    const email = formData.get("email");

    // Valadite
    if (!name || !email) {
      console.error("Name or email is empty");
      return;
    }

    //Post
    axios
      .post(
        "https://getform.io/f/150132c8-6b67-478a-beee-f68b3d631241",
        formData
      )
      .then((response) => {
        console.log("Form submitted successfully", response);
      })
      .catch((error) => {
        console.error("Failed to submit form:", error);
      });
  };
  return (
    <div className="flex flex-col mb-10 mt-2 mx-auto max-w-screen-lg ">
      <div className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
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
            type="submit"
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
