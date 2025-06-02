import { motion } from 'framer-motion';

export default function Interests() { 
  return (
    <section id="interests" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Interests
        </motion.h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-300 max-w-3xl mx-auto">
          <li>Exploring new web technologies and contributing to open-source projects.</li>
          <li>Staying updated with best practices in full-stack development and cloud computing.</li>
          <li>Building side projects to experiment with new frameworks and improve coding efficiency.</li>
          <li>Collaborating with peers to solve real-world problems and share knowledge.</li>
          <li>Balancing productivity with creativity through walks in nature and reading tech blogs.</li>
        </ul>
      </div>
    </section>
  );
}

