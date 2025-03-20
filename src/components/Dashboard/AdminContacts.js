import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact/all", {
          withCredentials: true, // ✅ Cookies Authentication Enable करें
        });
        //console.log("✅ Contact Queries Fetched:", res.data);
        setContacts(res.data.contacts);
      } catch (err) {
        console.error("❌ Error fetching contacts:", err);
        setError("Failed to fetch contact queries.");
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📩 Contact Queries</h2>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : contacts.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left hidden md:table-cell">Address</th>
                <th className="border p-3 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="border hover:bg-gray-100 transition">
                  <td className="p-3 border">{contact.name}</td>
                  <td className="p-3 border">{contact.email}</td>
                  <td className="p-3 border hidden md:table-cell">{contact.address}</td>
                  <td className="p-3 border">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No queries submitted yet.</p>
      )}
    </div>
  );
};

export default AdminContacts;

