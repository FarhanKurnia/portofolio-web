import React from 'react';
import { motion } from 'framer-motion';
import skills from '../data/skills';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      id="skills"
      className="snap-section bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Backend */}
          <motion.div variants={containerVariants} className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
              <span className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                <i className="fas fa-server"></i>
              </span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, index) => (
                <motion.span 
                  key={index} 
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 cursor-default border border-transparent hover:border-blue-400"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div variants={containerVariants} className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
              <span className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">
                <i className="fas fa-code"></i>
              </span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, index) => (
                <motion.span 
                  key={index} 
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all duration-300 cursor-default border border-transparent hover:border-indigo-400"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={containerVariants} className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
              <span className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl">
                <i className="fas fa-tools"></i>
              </span>
              Tools & Infra
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <motion.span 
                  key={index} 
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 transition-all duration-300 cursor-default border border-transparent hover:border-teal-400"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
