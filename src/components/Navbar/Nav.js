import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { logoutUser } from "../redux/authSlice";


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user, role } = useSelector((state) => state.auth); // ✅ Redux State

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/api/auth/logout", { withCredentials: true });

      dispatch(logoutUser());
      navigate("/");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md p-3 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* ✅ Logo */}
        <NavLink to="/" className="text-lg font-bold text-blue-700">
          EduLearn
        </NavLink>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
          <li><NavLink to="/course-list" className="hover:text-blue-500">Courses</NavLink></li>
          <li><NavLink to="/about" className="hover:text-blue-500">About</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink></li>

          {/* ✅ Admin Panel / Login */}
          {role === "admin" ? (
            <li>
              <button onClick={() => navigate("/admin/dashboard")} className="text-blue-600 font-semibold">
                Admin Panel
              </button>
            </li>
          ) : !role ? (
            <li><NavLink to="/login" className="text-green-600 font-semibold">Login</NavLink></li>
          ) : null}
        </ul>

        {/* ✅ Right Section */}
        <div className="flex items-center space-x-4">
          {/* ✅ Profile Dropdown */}
          {user && (
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-2xl">
                <FaUserCircle />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-32 text-sm"
                  >
                    <li className="p-2 hover:bg-gray-200">
                      <NavLink to="/profile" onClick={() => setDropdownOpen(false)}>Profile</NavLink>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* ✅ Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-blue-700 p-4 text-white text-sm mt-2"
          >
            <ul className="space-y-3">
              <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/course-list" onClick={() => setMenuOpen(false)}>Courses</NavLink></li>
              <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>

              {/* ✅ Admin Panel / Login */}
              {role === "admin" ? (
                <li>
                  <button onClick={() => { navigate("/admin/dashboard"); setMenuOpen(false); }} className="text-yellow-300">
                    Admin Panel
                  </button>
                </li>
              ) : !role ? (
                <li><NavLink to="/login" onClick={() => setMenuOpen(false)} className="font-semibold">Login</NavLink></li>
              ) : null}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;


