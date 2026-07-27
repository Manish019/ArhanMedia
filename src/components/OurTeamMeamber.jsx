import React, { useState } from "react";
import { motion } from "framer-motion";
import "./OurTeam.css";
import teamMembers from "../Data/TeamsMembers.js";

const OurTeamMember = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleMembers = showAll
    ? teamMembers
    : teamMembers.slice(0, 6);

  return (
    <div className="testing-container">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#193568] mb-10 text-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
       Meet Our Team 
      </motion.h2>

      <div className="team-grid">
        {visibleMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img
              src={member.img}
              alt={member.name}
              className="team-image"
              onClick={() => setSelectedImage(member.img)}
            />
          </div>
        ))}
      </div>

      {teamMembers.length > 6 && (
        <div className="text-center mt-10">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="popup-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              className="popup-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeamMember;
