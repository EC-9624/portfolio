import React from "react";

function Contact() {
  return (
    <div className='flex flex-col mb-10 mt-2 mx-auto'>
      <div className='flex justify-center items-center'>
        <form
          action='https://getform.io/slug'
          method='POST'
          className='flex flex-col w-full md:w-4/12 p-2'
        >
          <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white '>
            Contact
          </h1>

          <input
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />

          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          ></textarea>

          <button
            type='button'
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-stone-900'
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
