import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/payments", {
          withCredentials: true,
        });
        setPayments(res.data.payments);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">💳 Payment History</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 border">User</th>
              <th className="p-3 border">Course</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((payment) => (
                <tr key={payment._id} className="text-center hover:bg-gray-100 transition">
                  <td className="p-3 border">{payment.userId?.name || "Unknown"}</td>
                  <td className="p-3 border">{payment.courseId?.title || "Unknown Course"}</td>
                  <td className="p-3 border font-semibold text-green-600">₹{payment.amount}</td>
                  <td className={`p-3 border font-bold ${payment.status === "Paid" ? "text-green-500" : "text-red-500"}`}>
                    {payment.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayments;

