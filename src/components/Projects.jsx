import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'; // ✅ Added for animations

function Projects() {
  const projects = [
    {
      title: 'File Sharing Management System',
      description:
        'Developed a secure, user-friendly file sharing application enabling effortless uploads, downloads, and shareable links, with automatic file expiry management.',
      technologies: ['Java', 'Spring Boot', 'HTML', 'CSS', 'React.js', 'PostgreSQL', 'Docker', 'Render', 'Git'],
      thumbnail: 'File_Sharing_Manager_Profile_img.png',
      github: 'https://github.com/ARAVEEDUTRIVIKRAM/file-sharing-manager',
    },
    {
      title: 'Automated Optical Character Recognition (OCR) System',
      description:
        'Engineered an advanced OCR system for high-accuracy text extraction from images, significantly improving text recognition accuracy.',
      technologies: ['Python', 'OpenCV', 'Pytesseract', 'Flask', 'JavaScript'],
      thumbnail: 'Automated_Ocr_System_profile_img.png',
      github: 'https://github.com/ARAVEEDUTRIVIKRAM/ocr_web_app',
    },
    {
      title: 'Blood Group Detection Through Fingerprint images using CNN',
      description:
        'Developed a deep learning model using CNN for blood group classification from fingerprint images, achieving 85% accuracy.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
      thumbnail: 'Blood_Group_Projcet_img.png',
      github: 'https://github.com/ARAVEEDUTRIVIKRAM/Blood_Group_Detection_Through_Fingerprint_images_Using_CNN',
    },
    // Add more projects here...
  ];

  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // ✅ Animated card
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
