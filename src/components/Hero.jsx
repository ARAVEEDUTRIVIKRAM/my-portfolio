import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <motion.header
      className="bg-gray-900 text-white py-20 flex flex-col items-center justify-center text-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, I'm <span className="text-blue-400">Tri Vikram Araveedu</span>
      </motion.h1>
      <motion.p
        className="text-xl mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Full Stack Developer | Passionate Coder | Innovator
      </motion.p>
      <p className="text-xl sm:text-2xl text-gray-300 mb-4">
        A self-driven full stack developer passionate about solving real-world problems through clean code and thoughtful design.
        With a background in engineering and hands-on experience building responsive frontends and scalable backends, I love creating smooth digital experiences from start to finish. I'm constantly learning, iterating, and building projects that matter—whether it's a dynamic web app, a smart OCR tool, or a deep learning project.
        I’d love to connect and talk more about how I can contribute to your team!
      </p>
      <motion.div
        className="flex space-x-6 text-3xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a href="https://github.com/ARAVEEDUTRIVIKRAM" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/araveedu-trivikram-88b2462bb/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="mailto:araveedutrivikram@gmail.com" className="hover:text-blue-400">
          <FaEnvelope />
        </a>
      </motion.div>
    </motion.header>
  );
}

export default Hero;