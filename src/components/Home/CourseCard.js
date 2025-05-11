import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };
    loadScript();
  }, []);

  const handlePayment = async () => {
    if (!user) {
      alert("❌ Please login first!");
      navigate("/login");
      return;
    }

    try {
      const { data } = await axios.get("https://edu-backend-2.onrender.com/api/payment/get-key");
     
      const razorpayKey = data.key;

      const orderRes = await axios.post("https://edu-backend-2.onrender.com/api/payment/create-order", {
        amount: course.price,
        currency: "INR",
        courseId: course._id,
        userId: user._id,
      });

      const { id: order_id, amount, currency } = orderRes.data;

      const options = {
        key: razorpayKey,
        amount,
        currency,
        name: "EduLearn",
        description: course.title,
        order_id,
        handler: async (response) => {
          alert("✅ Payment Successful!");
          await axios.post("https://edu-backend-2.onrender.com/api/payment/payment-success", {
            userId: user._id,
            courseId: course._id,
            amount: course.price,
            paymentId: response.razorpay_payment_id,
          });
          navigate("/thank-you");
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: "8442060273",
        },
        theme: { color: "#3399cc" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("❌ Payment Error:", error);
    }
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4 text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.category}</p>
      <div className="mt-4">
        <span className="text-blue-600 font-bold">₹{course.price}</span>
      </div>

      <button
        onClick={handlePayment}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Buy Now
      </button>
    </motion.div>
  );
};

export default CourseCard;

