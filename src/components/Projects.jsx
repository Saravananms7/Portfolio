import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "PrintEase – College Print Management",
      description: "Solved long queues and manual coordination at college print shops by developing an Android app that allows students to upload documents, select print preferences, make payments, and track request status in real time. Built a dedicated Windows app for shopkeepers to manage print jobs efficiently by accessing cloud-stored files, updating print progress, and notifying students when their documents are ready, streamlining the entire process end-to-end.",
      image: "/api/placeholder/400/300",
      tech: ["Flutter", "Supabase", "Email Auth", "Realtime DB", "Cloud Storage"],
      github: "https://github.com/Saravananms7/PrintEase-App",
      live: "https://printease-demo.com",
      featured: true
    },
    {
      title: "FixIT – Smart Internal Issue Resolver",
      description: "Addressed internal support delays by allowing employees to log technical issues and automatically get matched to the most suitable colleague based on skills, history, and availability. Improved organizational efficiency by decentralizing IT support, reducing dependency on a central helpdesk, and enabling faster, peer-driven issue resolution through a secure web platform.",
      image: "/api/placeholder/400/300",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "AI Matching"],
      github: "https://github.com/Saravananms7/FixIT",
      live: "https://fixit-demo.com",
      featured: true
    },
    {
      title: "MentiQuiz",
      description: "Developed a real-time interactive quiz platform inspired by Mentimeter, allowing users to create and join live quizzes via unique codes. Implemented WebSocket-based communication for instant question updates, leaderboard tracking, and participant engagement. Designed a responsive and intuitive interface for both hosts and participants, ensuring seamless cross-device functionality. Focused on scalability and user experience, making it ideal for classrooms, events, and interactive presentations.",
      image: "/api/placeholder/400/300",
      tech: ["React", "Node.js", "WebSockets", "Real-Time Quiz Platform"],
      github: "https://github.com/Saravananms7/MentiQuiz",
      live: "https://mentiquiz-demo.com",
      featured: false
    },
    {
      title: "College Marketplace",
      description: "Built a full-stack web platform enabling college students to buy, sell, and trade second-hand items like books, electronics, and furniture within their campus. Implemented secure user authentication, product listing features, wishlist functionality, and advanced search filters to enhance discoverability and trust. Promoted a sustainable and affordable campus ecosystem by encouraging reuse and peer-to-peer transactions in a verified student community.",
      image: "/api/placeholder/400/300",
      tech: ["MERN Stack", "User Authentication", "Search Filters", "Community Platform"],
      github: "https://github.com/Saravananms7/College-Marketplace",
      live: "https://college-marketplace-demo.com",
      featured: false
    }
  ]

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {project.title.charAt(0)}
                  </span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Saravananms7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
