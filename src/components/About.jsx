import { motion } from 'framer-motion';

function About() {
  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="md:flex md:items-center md:justify-center md:gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed mb-6">
              Hello! I’m Araveedu Trivikram, a recent Electronics and Communication Engineering graduate who found his calling in software development. Over the past few years, I’ve enjoyed exploring different areas of technology — from backend APIs and databases to creating smooth, responsive web interfaces.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              During my final year, I had the opportunity to work as a full-stack intern at Roman Technologies. That experience taught me how to build scalable applications, collaborate with others in an Agile team, and ship clean, maintainable code. I loved working with React for front-end development and Spring Boot for building robust backends, and I’m excited to keep learning and applying these skills.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Some of my favorite projects include building an OCR system that boosted text recognition accuracy by 70% and a CNN model that predicted blood groups from fingerprint images. These experiences taught me to think like a problem solver and stay curious about how things work.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Outside of work, I’m always exploring new tech stacks, reading articles about software architecture, or just going for long walks to clear my mind. I also enjoy participating in Group Discussinos and debates and collaborating with peers — it’s a great way to share ideas and keep growing.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              As a fresh graduate, I’m looking for opportunities to join a supportive team where I can learn, contribute, and grow as a full-stack developer. I’m excited to apply what I know and pick up new skills along the way!
            </p>
          </motion.div>

          {<motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="ARAVEEDUTRIVIKRAM_IMG_1.jpg" alt="Your Picture" className="rounded-full" />
          </motion.div>}
        </div>
      </div>
    </div>
  );
}

export default About;
