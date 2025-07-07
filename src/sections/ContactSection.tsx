"use client";
import React from 'react';

const ContactSection: React.FC = () => {
  // Hardcoded content for the contact section
  const content = {
    heading: ["Any Questions?", "Write or call us."],
    phone: "+1 (234) 567-890",
    email: "contact@company.com",
    location: "1234 Arjunwad, Some City, State, Country",
    formFields: [
      { type: "email", placeholder: "E-mail Address" },
      { type: "text", placeholder: "Phone Number" },
      { type: "text", placeholder: "Your Name" },
      { type: "textarea", placeholder: "Message...", rows: 4 },
    ],
    consentText: "I consent to the processing of my personal data by the Administrator in accordance with the Privacy Policy *",
    buttonText: "Submit",
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:mx-0 lg:mx-[200px] mb-[100px]">
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-6/12 md:mt-0">
          <h2 className="text-sm m-2 tracking-[10px] text-gray-500 font-medium">CONTACT</h2>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight">
            {content.heading.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <div className="mt-8 space-y-4 text-lg text-gray-700">
            <p className="flex items-center">
              <span className="mr-2">📞</span>{content.phone}
            </p>
            <p className="flex items-center">
              <span className="mr-2">📧</span> {content.email}
            </p>
            <p className="flex items-center">
              <span className="mr-2">📍</span> {content.location}
            </p>
          </div>

          <div className="mt-10 py-5 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122237.18993477206!2d74.628396!3d16.781044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12102e1214d0b%3A0x1527ff323ff45359!2sSiddhivinayak%20Engineers!5e0!3m2!1sen!2sus!4v1727588966231!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full mt-8 py-10 md:mt-0 md:w-5/12">
          <form className="space-y-4">
            {content.formFields.map((field, index) => (
              field.type !== 'textarea' ? (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0074F5]"
                />
              ) : (
                <textarea
                  key={index}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0074F5]"
                ></textarea>
              )
            ))}
            <div className="flex items-start space-x-2 mt-4">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-500">{content.consentText}</p>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-[#0074F5] hover:bg-black rounded-md font-semibold tracking-wide flex items-center justify-center"
            >
              {content.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
