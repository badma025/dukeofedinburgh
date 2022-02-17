import React from "react";
import FAQButton from "./buttons/FAQButton";
import Item from "./items/Item";
import FAQHeader from "./items/Item";

function FAQ() {
  return (
    <section className="bg-bookmark-white py-20">
        {/* heading */}
      <div className="container">
        <div className="sm:first-letter:w-3/4 lg:w-5/2 mx-auto px-2 ">
          <h1 className="text-3xl text-center  text-bookmark-blue">Frequently Asked Questions</h1>
          <p className="text-center text-bookmark-grey mt-4">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to contact us.</p>
        </div>
      </div>
      {/* items */}
      <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto ">
         <Item text="What is a Bookmark?"/>
         <Item text="How can I request a new browser?"/>
         <Item text="Is there a mobile app?"/>
         <Item text="What about other Chromium Browsers?"/>
         <FAQButton/>
         </div>
    </section>
  );
}
export default FAQ;
