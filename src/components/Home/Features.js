import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-12 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { icon: FaLaptopCode, title: "Expert Instructors" },
          { icon: FaChalkboardTeacher, title: "Interactive Learning" },
          { icon: FaCertificate, title: "Certified Courses" },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 shadow-md rounded-lg bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <feature.icon className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

