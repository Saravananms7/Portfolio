import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Calendar, X } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "IIT Kharagpur, NPTEL",
      date: "2024",
      description: "Comprehensive course on cloud computing fundamentals, architecture, and deployment strategies from one of India's premier technical institutes.",
      skills: ["Cloud Computing", "AWS", "Azure", "Cloud Architecture", "DevOps", "Containerization"],
      certificateUrl: "https://nptel.ac.in/certificates/cloud-computing",
      certificateImage: "/certificates/cloud-computing-certificate.png",
      type: "Certification"
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      issuer: "L&T EduTech",
      date: "2024",
      description: "Advanced course covering AI/ML concepts, algorithms, and practical applications in real-world scenarios.",
      skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "Data Science", "AI Algorithms"],
      certificateUrl: "https://lntedutech.com/certificates/ai-ml",
      certificateImage: "/certificates/ai-ml-certificate.png",
      type: "Certification"
    },
    {
      title: "MERN Stack Development",
      issuer: "Zero Pixels",
      date: "2024",
      description: "Complete full-stack development course covering MongoDB, Express.js, React, and Node.js for building modern web applications.",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Full Stack Development"],
      certificateUrl: "https://zeropixels.com/certificates/mern-stack",
      certificateImage: "/certificates/mern-stack-certificate.png",
      type: "Course"
    },
    {
      title: "Project Management Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2024",
      description: "Essential project management skills including planning, execution, monitoring, and team leadership methodologies.",
      skills: ["Project Management", "Agile", "Scrum", "Team Leadership", "Risk Management", "Planning"],
      certificateUrl: "https://skillsbuild.org/certificates/project-management",
      certificateImage: "/certificates/project-management-certificate.png",
      type: "Certification"
    },
    {
      title: "0–100 Full Stack Web Development Cohort",
      issuer: "100xDevs",
      date: "2024",
      description: "Intensive full-stack development program covering modern web technologies, best practices, and industry-standard development workflows.",
      skills: ["Full Stack Development", "React", "Node.js", "Database Design", "API Development", "Deployment"],
      certificateUrl: "https://100xdevs.com/certificates/fullstack-cohort",
      certificateImage: "/certificates/100xdevs-certificate.jpg",
      type: "Course"
    }
  ]

  const getTypeColor = (type) => {
    return type === "Certification" 
      ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
      : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
  }

  const getTypeIcon = (type) => {
    return type === "Certification" ? "🏆" : "📚"
  }

  return (
    <section id="certifications" ref={ref} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Courses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{getTypeIcon(cert.type)}</div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(cert.type)}`}>
                      {cert.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
              </div>

              {/* Title and Issuer */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Link */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCertificate(cert)}
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
              >
                <Award className="w-4 h-4" />
                View Certificate
                <ExternalLink className="w-3 h-3" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications and courses represent my commitment to professional development 
              and expanding my technical expertise in software development.
            </p>
          </div>
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {selectedCertificate.issuer} • {selectedCertificate.date}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </motion.button>
                </div>

                {/* Certificate Image */}
                <div className="p-6">
                  <div className="relative flex justify-center">
                    <div className="w-80 h-60 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <img
                        src={selectedCertificate.certificateImage}
                        alt={`${selectedCertificate.title} Certificate`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback for missing image */}
                      <div className="hidden w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                        <div className="text-center">
                          <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                            Certificate Image
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                            {selectedCertificate.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedCertificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Online
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Certifications
