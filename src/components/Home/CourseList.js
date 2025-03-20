import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/courses");
        console.log("✅ Courses Fetched:", res.data);
        setCourses(res.data);
      } catch (error) {
        console.error("❌ Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-12 px-6 mt-4">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Courses</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;

