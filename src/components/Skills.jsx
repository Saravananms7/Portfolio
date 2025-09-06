import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      technologies: [
        { name: "Python", icon: "🐍", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
        { name: "C", icon: "🔵", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "JavaScript", icon: "🟨", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      technologies: [
        { name: "React.js", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "HTML", icon: "📄", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "CSS", icon: "🎨", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Bootstrap", icon: "🎯", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
      ]
    },
    {
      title: "App Development",
      icon: "📱",
      technologies: [
        { name: "Flutter", icon: "🚀", color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200" },
        { name: "React Native", icon: "📲", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      ]
    },
    {
      title: "Design",
      icon: "🎨",
      technologies: [
        { name: "Figma", icon: "🎭", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
        { name: "Canva", icon: "🌈", color: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200" },
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: "🤖",
      technologies: [
        { name: "Python", icon: "🐍", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
        { name: "TensorFlow", icon: "🧠", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "OpenCV", icon: "👁️", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "Deep Learning", icon: "🔬", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
        { name: "Model Deployment", icon: "🚀", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      ]
    },
    {
      title: "Programming & Development",
      icon: "⚙️",
      technologies: [
        { name: "DSA", icon: "📊", color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200" },
        { name: "API Integration", icon: "🔗", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "GitHub", icon: "📝", color: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200" },
      ]
    },
    {
      title: "Backend & Databases",
      icon: "🗄️",
      technologies: [
        { name: "Supabase", icon: "⚡", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "Firebase", icon: "🔥", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "MongoDB", icon: "🍃", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "SQL", icon: "🗃️", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      ]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      technologies: [
        { name: "Problem-Solving", icon: "🧩", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Analytical Thinking", icon: "📈", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "Teamwork", icon: "👥", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
        { name: "Adaptability", icon: "🔄", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "Project Management", icon: "📋", color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200" },
      ]
    }
  ]


  return (
    <section id="skills" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid - Card Based Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              {/* Technology Badges */}
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.2 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`${tech.color} px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200`}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              I'm currently exploring advanced React patterns, cloud architecture, and machine learning applications. 
              I believe in continuous learning and always look for opportunities to expand my skill set.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
