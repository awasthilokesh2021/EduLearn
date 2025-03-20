import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-blue-300 text-white py-20 px-6 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Learn & Grow with <span className="text-yellow-300">EduLearn</span>
        </h1>
        <p className="text-lg mb-6">
          Explore top courses and boost your skills from anywhere.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink
            to="/course-list"
            className="bg-yellow-300 text-blue-800 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Explore Courses
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

