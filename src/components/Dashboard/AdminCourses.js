import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "", // ✅ Image Field Added
  });

  
// ✅ Course Delete Karne Ka Function
  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/courses/${id}`, {
        withCredentials: true,
      });
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // ✅ API Se Courses Fetch Karna
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/courses", {
        withCredentials: true,
      });
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // ✅ Input Fields Handle Karna
  const handleInputChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  // ✅ New Course Add Karna
  const addCourse = async (e) => {
    e.preventDefault();
    console.log("✅ Sending Course Data:", newCourse); // 🛠 Debugging

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/courses",
        newCourse,
        {
          withCredentials: true,
        }
      );

      console.log("✅ Course Added Successfully:", response.data);
      setCourses([...courses, response.data.course]);
      setNewCourse({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
      }); // ✅ Image Reset
    } catch (error) {
      console.error("❌ Error Adding Course:", error.response?.data || error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-5 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        📚 Course Management
      </h1>

      {/* ✅ New Course Form */}
      <form onSubmit={addCourse} className="mb-5 bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">➕ Add New Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newCourse.image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newCourse.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newCourse.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newCourse.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newCourse.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded md:col-span-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full md:w-auto"
        >
          Add Course ✅
        </button>
      </form>

      {/* ✅ Courses List */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Image</th> {/* ✅ Add Image Column */}
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course._id}
                className="text-center hover:bg-gray-100 transition"
              >
                <td className="p-3 border">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="p-3 border">{course.title}</td>
                <td className="p-3 border">₹{course.price}</td>
                <td className="p-3 border">{course.category}</td>
                <td className="p-3 border">
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {courses.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No courses available.</p>
      )}
    </div>
  );
};

export default AdminCourses;
