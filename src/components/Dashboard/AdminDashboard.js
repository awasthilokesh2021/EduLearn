import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminUsers = lazy(() => import("./Adminuser"));
const AdminCourses = lazy(() => import("./AdminCourses"));
const AdminContacts = lazy(() => import("./AdminContacts"));
const AdminPayments = lazy(() => import("./AdminPayments"));

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [stats, setStats] = useState({ totalUsers: 0, totalCourses: 0 });

  const role = useSelector((state) => state.auth.role);;

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/dashboard", {
          withCredentials: true,
        });
        setAdmin(res.data.admin);
      } catch (err) {
        setError(err.response?.data?.error || "Access Denied! Only Admins can access this page.");
      }
    };

    if (role === "admin") checkAdmin();
  }, [role]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/stats", {
          withCredentials: true,
        });
        setStats({
          totalUsers: res.data.totalUsers || 0,
          totalCourses: res.data.totalCourses || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex mt-10">
      {/* ✅ Sidebar */}
      <div className="w-1/4 bg-blue-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-5">Admin Panel</h2>
        <ul className="space-y-3">
          {["dashboard", "users", "courses", "contacts", "payments"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left p-2 hover:bg-blue-700 ${activeTab === tab ? "bg-blue-700" : ""}`}
              >
                {tab === "dashboard" && "📊 Dashboard"}
                {tab === "users" && "👤 Manage Users"}
                {tab === "courses" && "📚 Manage Courses"}
                {tab === "contacts" && "📩 Contact Queries"}
                {tab === "payments" && "💳 View Payments"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Main Content */}
      <div className="w-3/4 p-5">
        {error ? (
          <h1 className="text-2xl text-red-500">{error}</h1>
        ) : (
          <Suspense fallback={<h1 className="text-blue-500 text-center">Loading...</h1>}>
            {activeTab === "dashboard" && (
              <div>
                <h1 className="text-3xl font-bold">Welcome Admin: {admin?.name || "Admin"}</h1>
                <p className="mt-2 text-gray-700">Manage Users, Courses, and more...</p>
                {/* ✅ Stats Cards */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold">Total Users</h2>
                    <p className="text-2xl">{stats.totalUsers}</p>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold">Total Courses</h2>
                    <p className="text-2xl">{stats.totalCourses}</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "users" && <AdminUsers />}
            {activeTab === "courses" && <AdminCourses />}
            {activeTab === "contacts" && <AdminContacts />}
            {activeTab === "payments" && <AdminPayments />}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
