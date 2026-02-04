import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github } from 'lucide-react'
import { AnimatedProjects } from './ui/animated-projects'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "IntelliPlace – AI-Powered Campus Recruitment Platform",
      description: "Designed an AI-driven campus recruitment platform automating the hiring pipeline, including CV screening, aptitude tests, coding rounds, and interviews. Integrated Judge0 for code evaluation and used OpenCV and NLP models (including Whisper) to analyze video responses and candidate engagement. Built separate portals for students and recruiters to streamline placement workflows.",
      image: "/projects/camp.jpg",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "OpenCV", "Judge0", "NLP", "Whisper"],
      github: "https://github.com/Saravananms7/IntelliPlace",
      live: "#",
      featured: true
    },
    {
      title: "PrintEase – College Print Management",
      description: "Solved long queues and manual coordination at college print shops by developing an Android app that allows students to upload documents, select print preferences, make payments, and track request status in real time. Built a dedicated Windows app for shopkeepers to manage print jobs efficiently by accessing cloud-stored files, updating print progress, and notifying students when their documents are ready, streamlining the entire process end-to-end.",
      image: "/projects/print.jpg",
      tech: ["Flutter", "Supabase", "Email Auth", "Realtime DB", "Cloud Storage"],
      github: "https://github.com/Saravananms7/PrintEase-App",
      live: "https://printease-demo.com",
      featured: true
    },
    {
      title: "FixIT – Smart Internal Issue Resolver",
      description: "Addressed internal support delays by allowing employees to log technical issues and automatically get matched to the most suitable colleague based on skills, history, and availability. Improved organizational efficiency by decentralizing IT support, reducing dependency on a central helpdesk, and enabling faster, peer-driven issue resolution through a secure web platform.",
      image: "/projects/fixing.webp",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "AI Matching"],
      github: "https://github.com/Saravananms7/FixIT",
      live: "https://fix-it-frontend.vercel.app/",
      featured: true
    },
    {
      title: "MentiQuiz",
      description: "Developed a real-time interactive quiz platform inspired by Mentimeter, allowing users to create and join live quizzes via unique codes. Implemented WebSocket-based communication for instant question updates, leaderboard tracking, and participant engagement. Designed a responsive and intuitive interface for both hosts and participants, ensuring seamless cross-device functionality. Focused on scalability and user experience, making it ideal for classrooms, events, and interactive presentations.",
      image: "/projects/OIP.webp",
      tech: ["React", "Node.js", "WebSockets", "Real-Time Quiz Platform"],
      github: "https://github.com/Saravananms7/MentiQuiz",
      live: "https://mentiquiz-demo.com",
      featured: false
    },
    {
      title: "College Marketplace",
      description: "Built a full-stack web platform enabling college students to buy, sell, and trade second-hand items like books, electronics, and furniture within their campus. Implemented secure user authentication, product listing features, wishlist functionality, and advanced search filters to enhance discoverability and trust. Promoted a sustainable and affordable campus ecosystem by encouraging reuse and peer-to-peer transactions in a verified student community.",
      image: "/projects/marketplace.jpg",
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

        {/* Animated Stack Projects */}
        <AnimatedProjects projects={projects} autoplay={false} />

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
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-primary-700 shadow-lg hover:shadow-cyan-500/20"
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
