import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact
        </motion.h2>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* Contact Information */}
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-blue-400" />
              <a href="mailto:your-email@example.com">araveedutrivikram@gmail.com</a>
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2 text-blue-400" />
              +91 9392275504
            </p>
            <div className="flex items-center mt-4">
              <a
                href="https://www.linkedin.com/in/araveedu-trivikram-88b2462bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-blue-400 hover:text-blue-300"
              >
                <FaLinkedin className="mr-1" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ARAVEEDUTRIVIKRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                <FaGithub className="mr-1" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Send me a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-700 text-white rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-700 text-white rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="bg-gray-700 text-white rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
