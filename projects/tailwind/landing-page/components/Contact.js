import React from "react";
import ContactButton from "./buttons/ContactButton";

function Contact() {
  return (
    <section className="text-white py-20 bg-bookmark-purple">
      <div className="container">
        <div className="sm:w-3/4 lg:w-2/4 mx-auto ">
          <p className="font-light uppercase text-center mb-8">
            69,000 Already Joined
          </p>
          <h1 className="text-3xl text-center">
            Stay up-to-date with what we're doing
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter your email address"
              className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black shadow-lg"
            />
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
