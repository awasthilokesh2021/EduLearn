import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";



const Shimmer = () => (
  <div className="animate-pulse flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-3 bg-gray-300 rounded-full w-full mt-4"></div>
    <div className="h-10 bg-gray-300 rounded w-full mt-4"></div>
  </div>
);


const Profile = () => {
  const navigate = useNavigate();
  const { user,role } = useSelector((state) => state.auth); 
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileAndOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true,
        });

        if (!res.data?.user) throw new Error("User not found!");
        
        const ordersRes = await axios.get("http://localhost:5000/api/payment/orders", {
          params: { userId: res.data.user._id },
          withCredentials: true,
        });

        setOrders(ordersRes.data.orders);
      } catch (err) {
        navigate("/login"); // Redirect if not logged in
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndOrders();
  }, [navigate]);

  if (loading) return <Shimmer />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {role}</p>
        {user?.role === "user" && (
          <div className="mt-4">
            <h3 className="font-semibold">Course Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full w-[60%]"></div>
            </div>
            <p className="text-sm text-gray-600">60% completed</p>
          </div>
        )}

        <div className="mt-4">
          <h3 className="font-semibold">🛒 Your Purchases</h3>
          {orders.length > 0 ? (
            <ul className="list-disc pl-5 text-gray-700">
              {orders.map((order) => (
                <li key={order._id}>
                  {order.courseTitle || "Unknown Course"} - ₹{order.amount}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No purchases yet.</p>
          )}
        </div>
        
      </motion.div>
    </div>
  );
};

export default Profile;

