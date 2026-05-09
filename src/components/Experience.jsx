import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Backend Developer",
    organization: "BADAN SISTEM INFORMASI UNIVERSITAS ISLAM INDONESIA",
    duration: "Oct 2023 - Present",
    description: "Designing and maintaining robust backend systems using Golang and Lumen. Focused on database optimization, RESTful API development, and high-performance architecture.",
    icon: "fa-server"
  },
  {
    role: "Web Developer (Freelance)",
    organization: "HABBIE AROMATIC",
    duration: "Jul - Sep 2023",
    description: "Developed a full-featured e-commerce platform using Laravel and Tailwind CSS. Integrated Midtrans payment gateway and automated administrative workflows.",
    icon: "fa-shopping-cart"
  },
  {
    role: "IT Helpdesk Officer",
    organization: "CITRANET",
    duration: "Aug 2017 - Sep 2023",
    description: "Six years of deep technical troubleshooting, network analysis, and infrastructure support for a major Internet Service Provider.",
    icon: "fa-headset"
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="snap-section bg-white dark:bg-gray-900 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h2 className="section-title">Professional Journey</h2>
        
        <div className="relative mt-20 max-w-6xl mx-auto w-full">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-100 dark:bg-gray-800/50 rounded-full">
            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-blue-600 to-indigo-600 opacity-20"></div>
          </div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center mb-32 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600/10 z-10 flex items-center justify-center shadow-2xl">
                <div className="w-10 h-10 rounded-full bg-blue-600 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                  <i className={`fas ${exp.icon} text-white text-base`}></i>
                </div>
              </div>

              {/* Content Card container */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-20 md:pl-0 md:pr-32' : 'pl-20 md:pl-32'}`}>
                <div className="relative bg-gray-50 dark:bg-gray-800/40 p-8 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 dark:border-gray-700/30 card-hover">
                  
                  <div className="flex flex-col gap-5 mb-8">
                    <span className="inline-block px-5 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full w-fit shadow-md shadow-blue-500/20">
                      {exp.duration}
                    </span>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <p className="text-blue-600 dark:text-blue-400 font-black mb-6 text-sm flex items-center gap-4">
                    <span className="w-8 h-[3px] bg-blue-600 rounded-full"></span>
                    {exp.organization}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
