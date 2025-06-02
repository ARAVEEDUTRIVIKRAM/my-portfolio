import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12"
        >
          Testimonials
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="italic text-lg text-gray-300 max-w-3xl mx-auto"
        >
          "Trivikram impressed me with his curiosity and willingness to learn. He’s a strong collaborator and takes feedback well, which made working with him on full-stack projects a breeze."
        </motion.blockquote>
        <p className="mt-4 text-gray-400">— Mentor at Roman Technologies</p>
      </div>
    </section>
  );
}



