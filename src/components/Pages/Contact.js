import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
   const [formData, setFormData] = useState({ name: "", email: "", address: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/contact/send-message", formData);

      setResponseMessage("✅ Message Sent Successfully!");
      setFormData({ name: "", email: "", address: "", message: "" }); // Reset Form
    } catch (error) {
      if (error.response) {
        setResponseMessage("❌ " + error.response.data.error);
      } else {
        setResponseMessage("❌ Something went wrong. Try again later.");
      }
    }
  };

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto mt-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Contact Us
      </h1>

      {/* Contact Information */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">
          Have questions? Reach out to us!
        </p>
        <p className="mt-2 text-gray-600">📧 Email: education@edulearn.com</p>
        <p className="mt-2 text-gray-600">📞 Phone: +91 98765 43210</p>
        <p className="mt-2 text-gray-600">📍 Address: Jaipur, India</p>
      </div>

      {/* Google Map Embed (Location Only) */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Our Location
        </h2>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.275084276172!2d75.8080895150258!3d26.912433983138436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d9cfbad1b3%3A0xf3b14482f5f703e2!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1619389330833!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="https://in.linkedin.com/"
          className="text-blue-500 text-2xl hover:text-blue-700 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-blue-400 text-2xl hover:text-blue-600 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://in.linkedin.com/"
          className="text-blue-600 text-2xl hover:text-blue-800 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Contact Form */}
     <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h2>
        {responseMessage && <p className="text-center text-lg font-semibold mb-4">{responseMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} className="w-full p-3 border rounded" required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
