import React, { useLayoutEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  useLayoutEffect(() => {
    // Disable scroll snapping and smooth scroll immediately before paint
    const html = document.documentElement;
    const body = document.body;
    
    const originalHtmlSnap = html.style.scrollSnapType;
    const originalHtmlBehavior = html.style.scrollBehavior;
    const originalBodySnap = body.style.scrollSnapType;

    // Apply overrides
    html.style.scrollSnapType = 'none';
    html.style.scrollBehavior = 'auto';
    body.style.scrollSnapType = 'none';
    body.style.scrollBehavior = 'auto';
    
    // Force scroll to top
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Small delay safeguard to handle any late layout shifts or browser snapping
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => {
      // Restore original styles on unmount
      html.style.scrollSnapType = originalHtmlSnap;
      html.style.scrollBehavior = originalHtmlBehavior;
      body.style.scrollSnapType = originalBodySnap;
      clearTimeout(timeoutId);
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Projects
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="relative h-64 md:h-96">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white">{project.name}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Project</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors border border-gray-700"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {['Responsive Design', 'Modern UI/UX', 'Optimized Performance'].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
