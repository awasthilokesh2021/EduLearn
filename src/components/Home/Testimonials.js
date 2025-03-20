import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "John Doe", review: "This platform helped me land my dream job!" },
  { id: 2, name: "Jane Smith", review: "Best online courses with great instructors!" },
  { id: 3, name: "Michael Lee", review: "Highly recommend for learning new skills." },
  { id: 4, name: "John Doe", review: "This platform helped me land my dream job!" },
  { id: 5, name: "Jane Smith", review: "Best online courses with great instructors!" },
  { id: 6, name: "Michael Lee", review: "Highly recommend for learning new skills." },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="p-6 shadow-md bg-white rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <p className="text-gray-700 italic">"{t.review}"</p>
            <h3 className="mt-4 font-semibold">{t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

