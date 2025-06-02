import React from 'react';
import { FaCode, FaHtml5, FaCss3, FaJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'JavaScript' },
      ],
      icon: FaCode,
    },
    {
      category: 'Frontend Development',
      items: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'React.js' },
      ],
      icon: FaHtml5,
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Spring Boot' },
        { name: 'Flask' },
      ],
      icon: FaHtml5,
    },
    {
      category: 'Databases',
      items: [
        { name: 'SQL' },
        { name: 'MySQL' },
      ],
      icon: FaDatabase,
    },
    {
      category: 'Machine Learning & Libraries',
      items: [
        { name: 'OpenCV' },
        { name: 'TensorFlow' },
        { name: 'Keras' },
        { name: 'NumPy' },
        { name: 'Pandas' },
      ],
      icon: FaCode,
    },
    {
      category: 'Version Control',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
      ],
      icon: FaGitAlt,
    },
    {
      category: 'Software Development Methodologies',
      items: [
        { name: 'Agile' },
        { name: 'SDLC (Software Development Life Cycle)' },
      ],
      icon: FaCode,
    },
  ];

  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center mb-4">
                {skillCategory.icon && (
                  <skillCategory.icon className="mr-2 text-xl text-blue-400" />
                )}
                <h3 className="text-xl font-bold">{skillCategory.category}</h3>
              </div>
              <ul>
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="mb-2">
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
