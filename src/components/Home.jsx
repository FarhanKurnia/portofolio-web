import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = 'Building efficient backend solutions with Golang, PHP (Laravel), Node.js & modern architectures';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
  }, []);

  return (
    <section id="home" className="snap-section relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Farhan <span className="text-blue-600 dark:text-blue-400">Kurnia</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Software Engineer | <span className="text-gray-900 dark:text-white">Backend Developer</span>
          </motion.div>

          <motion.div 
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto h-20 md:h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {text}<span className="inline-block w-1 h-6 ml-1 bg-blue-600 animate-pulse" />
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}Resume-BackendDeveloper-ETS-ENG.pdf`} 
              download="Resume-BackendDeveloper-ETS-ENG.pdf"
              className="btn-outline w-full sm:w-auto"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div 
            className="mt-16 flex justify-center space-x-8 text-3xl text-gray-400 dark:text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com/FarhanKurnia" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/farhan-kurnia" className="hover:text-blue-600 transition-colors duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
