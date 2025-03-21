import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice"; // Import Redux Action

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
  
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        { withCredentials: true }
      );
  
      console.log("✅ API Response:", res.data);
  
      if (!res.data || !res.data.user) {
        throw new Error("User data not found in API response!");
      }
  
      // ✅ Store user data in Redux
      dispatch(
        setUser({ user: res.data.user, role: res.data.role, token: res.data.token })
      );
  
      // ✅ Redirect based on Role
      setMessage("✅ Login Successful!");
      setTimeout(() => {
        if (res.data.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/profile");
        }
      }, 1000);
  
    } catch (error) {
      console.error("❌ Login Error:", error.response?.data || error);
      setMessage("❌ " + (error.response?.data?.error || "Invalid credentials!"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Sign In
        </h2>
        {message && <p className="text-center mb-4 text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-3 text-center">
          Already have an account?
          <NavLink to="/Signin" className="text-blue-600 ml-1">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
