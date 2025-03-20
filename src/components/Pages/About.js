import React from "react";
import { motion } from "framer-motion";

const FAQs = [
    { question: "How do I enroll?", answer: "Click on a course and follow the steps to enroll." },
    { question: "Do I get a certificate?", answer: "Yes, after successfully completing a course." },
  ];
  

const About = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto mt-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600">About EduLearn</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Empowering learners with high-quality online education, designed for
          skill growth and career success.
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2022, EduLearn started with a simple goal: to provide
          affordable and accessible education to everyone. We believe that
          learning should not be limited by location, time, or financial
          constraints. Our platform has helped thousands of students gain skills
          in technology, business, and personal development.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 shadow-md rounded-lg bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-2">
              To provide top-quality education that is accessible, affordable,
              and effective for students worldwide.
            </p>
          </motion.div>
        </div>
        <div className="p-6 shadow-md rounded-lg bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              To be the leading online education platform that transforms
              careers and empowers individuals to succeed.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Head of Education</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-lg font-semibold">Michael Lee</h3>
            <p className="text-gray-500">Lead Instructor</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-lg font-semibold">Expert Instructors</h3>
            <p>Learn from top industry professionals.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-lg font-semibold">Flexible Learning</h3>
            <p>Access courses anytime, anywhere.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-lg font-semibold">Affordable Pricing</h3>
            <p>Get the best education at minimal cost.</p>
          </div>
        </div>
      </div>

      {/* Student Success Stories */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Student Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 shadow-md rounded-lg bg-white">
            <p className="text-gray-600">
              "EduLearn helped me land my dream job as a web developer! The
              courses are easy to follow and full of real-world projects." –{" "}
              <strong>Rahul Sharma</strong>
            </p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <p className="text-gray-600">
              "I gained confidence in coding and now work as a data scientist.
              The mentorship and guidance were top-notch!" –{" "}
              <strong>Priya Patel</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600">Have questions? Reach out to us at:</p>
        <p className="text-blue-600 font-semibold">support@edulearn.com</p>
      </div>
    </section>
  );
};

export default About;
