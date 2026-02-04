
import React from 'react'
import { Award, Cloud, FileCode, CheckCircle, Database } from 'lucide-react'
import RadialOrbitalTimeline from './ui/radial-orbital-timeline'

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Cloud Computing",
      date: "2024",
      content: "IIT Kharagpur, NPTEL. Comprehensive course on cloud computing fundamentals, AWS, Azure, and deployment strategies.",
      category: "Certification",
      icon: Cloud,
      relatedIds: [3, 5],
      status: "completed",
      energy: 95,
      certificateUrl: "#",
      certificateImage: "/certificates/cloud-computing-certificate.png"
    },
    {
      id: 2,
      title: "AI & ML",
      date: "2024",
      content: "L&T EduTech. Advanced course covering AI/ML algorithms, TensorFlow, and Python for Data Science.",
      category: "Certification",
      icon: Database,
      relatedIds: [1],
      status: "completed",
      energy: 90,
      certificateUrl: "#",
      certificateImage: "/certificates/ai-ml-certificate.png"
    },
    {
      id: 3,
      title: "MERN Stack",
      date: "2024",
      content: "Zero Pixels. Full-stack development covering MongoDB, Express.js, React, and Node.js.",
      category: "Course",
      icon: FileCode,
      relatedIds: [5],
      status: "completed",
      energy: 85,
      certificateUrl: "#",
      certificateImage: "/certificates/mern-stack-certificate.png"
    },
    {
      id: 4,
      title: "Project Mgmt",
      date: "2024",
      content: "IBM SkillsBuild. Agile, Scrum, and team leadership methodologies.",
      category: "Certification",
      icon: CheckCircle,
      relatedIds: [1, 2],
      status: "completed",
      energy: 80,
      certificateUrl: "#",
      certificateImage: "/certificates/project-management-certificate.png"
    },
    {
      id: 5,
      title: "100xDevs Cohort",
      date: "2024",
      content: "0–100 Full Stack Web Development Cohort. Modern web technologies and best practices.",
      category: "Course",
      icon: Award,
      relatedIds: [3],
      status: "completed",
      energy: 100,
      certificateUrl: "#",
      certificateImage: "/certificates/100x.png"
    },
  ];

  return (
    <section id="certifications" className="w-full h-screen bg-transparent overflow-hidden relative">
      {/* Overlay Title */}
      <div className="absolute top-10 left-0 right-0 z-20 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Certifications</span>
        </h2>
      </div>

      <RadialOrbitalTimeline timelineData={certificationsData} />
    </section>
  )
}

export default Certifications
