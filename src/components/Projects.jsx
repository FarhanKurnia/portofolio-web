import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const allTechs = ['all', ...new Set(projects.flatMap(p => p.techStack))];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.techStack.includes(filter));

  return (
    <motion.section
      id="projects"
      className="snap-section bg-gray-50 dark:bg-gray-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTechs.map(tech => (
            <button 
              key={tech} 
              onClick={() => setFilter(tech)} 
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                filter === tech 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto pb-8 scrollbar-hide">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100 dark:border-gray-800 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                      <a href={project.liveDemo} className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a href={project.github} className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;