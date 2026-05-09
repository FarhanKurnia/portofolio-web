import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="snap-section bg-gray-50 dark:bg-gray-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                // src="https://via.placeholder.com/400x500" 
                src="/src/assets/profile.webp" 
                alt="Farhan Kurnia" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I'm <span className="text-blue-600 dark:text-blue-400">Farhan</span>, a passionate Backend Developer based in Indonesia.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With a solid foundation in Computer Science and over 6 years of experience in the IT industry, I specialize in building robust and scalable backend systems. My expertise lies in <span className="font-semibold text-gray-900 dark:text-white">Golang, PHP (Laravel), and Node.js</span>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I thrive on solving complex technical challenges, from designing efficient database architectures to optimizing microservices performance. My goal is always to deliver clean, maintainable code that powers seamless user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div>
                <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">3.85</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">GPA</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">6+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Years IT Exp</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">10+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
