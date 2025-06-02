import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    { name: "IBM: Introduction to Web Development with HTML5, CSS3, and JavaScript", file: "/certifications/IBM_Introduction to Web Development withHTML5, CSS3, and JavaScript _ edX.pdf" },
    { name: "IBM: Introduction to Cloud Computing", file: "/certifications/IBM_Introduction to Cloud Computing_ edX.pdf" },
    { name: "LinuxFoundationX: Git for Distributed Software Development", file: "/certifications/Git for Distributed Software Development_LinuxFoundationX LFD109x Certificate _ edX.pdf" },
    { name: "LinuxFoundationX: Secure Software Development", file: "/certifications/Secure Software Development_LinuxFoundationX LFD104x Certificate _ edX.pdf" },
    { name: "Skill Rack: Python 3.x Programming Course (Hands-On)", file: "/certifications/SkillRack_Python.pdf" },
    { name: "Skill Rack: SQL-Basics (Hands-On)", file: "/certifications/SkillRack_SQL.pdf" },
    { name: "TCS iON Career Edge – Young Professional", file: "/certifications/TCS ARAVEEDU_TRIVIKRAM_.pdf" },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>
        <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
          I take pride in staying up-to-date with the latest industry practices and tools. These certifications reflect my passion for building reliable, scalable, and secure applications. From mastering the foundations of full-stack development to deepening my understanding of cloud computing and secure software practices, these certifications have been instrumental in shaping my growth as a software engineer and full-stack developer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold mb-4">{cert.name}</h3>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-blue-400 hover:underline"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

