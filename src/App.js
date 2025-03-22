import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer.js/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../src/components/redux/authSlice";
  
const Home = lazy(() => import("./components/Home/Home"));
const Login = lazy(() => import("./components/Pages/Login"));
const Signin = lazy(() => import("./components/Pages/Signin"));
const About = lazy(() => import("./components/Pages/About"));
const CourseList = lazy(() => import("./components/Home/CourseList"));
const FAQ = lazy(() => import("./components/Footer.js/FAQ"));
const Profile = lazy(() => import("./components/Pages/Profile"));
const Contact = lazy(() => import("./components/Pages/Contact"));
const AdminDashboard = lazy(() => import("./components/Dashboard/AdminDashboard"));
const PaymentFullfil = lazy(() => import("./components/PaymentPage/PaymentFullfil"));

const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role); // ✅ Fetch role from Redux

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axios.get("https://edu-backend-2.onrender.com/api/auth/me", { withCredentials: true });
        console.log("✅ User Role Response:", res.data);
    
        if (!res.data || !res.data.user) {
          throw new Error("User data not found in response!");
        }
    
        // ✅ Store user details in Redux 
        dispatch(setUser({ user: res.data.user, role: res.data.user.role }));
      } catch (error) {
        console.error("❌ Error fetching user role:", error.response?.data || error.message);
      }
    };
    
    fetchUserRole();
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Suspense fallback={<h1 className="text-center text-blue-500">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          {role === "admin" && <Route path="/admin/dashboard" element={<AdminDashboard />} />}
          <Route path="/thank-you" element={<PaymentFullfil />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
