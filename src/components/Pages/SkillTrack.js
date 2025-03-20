import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const skillTrackData = [
  { id: 1, title: "React for Beginners", category: "Web Development", image: "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=" },
  { id: 2, title: "Python for Data Science", category: "Data Science", image: "https://static.vecteezy.com/system/resources/thumbnails/013/030/138/small/big-data-science-analysis-information-technology-concept-server-room-background-photo.jpg" },
  { id: 3, title: "UI/UX Design Basics", category: "Design", image: "https://img.freepik.com/free-vector/creative-thinking-geometric-lettering_23-2148475702.jpg" },
  { id: 4, title: "Graphic Designer", category: "Web Development", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, title: "Data Science", category: "Data Science", image: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg" },
  { id: 6, title: "Design Basics", category: "Design pattern", image: "https://t4.ftcdn.net/jpg/01/45/77/45/360_F_145774524_G35kjiqkhRjmeJIUgHkmpoB5qFiW7AuD.jpg" },
];

const categories = ["All", "Web Development", "Data Science", "Design"];

const SkillTrack = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredSkillTracks = selectedCategory === "All"
    ? skillTrackData
    : skillTrackData.filter(track => track.category === selectedCategory);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Skill Tracks</h2>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Tracks Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredSkillTracks.map((track) => (
          <div
            key={track.id}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
            onClick={() => navigate("/course-list")}
          >
            <img
              src={track.image}
              alt={track.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{track.title}</h3>
            <p className="text-sm text-gray-500">{track.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillTrack;

