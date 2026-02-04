
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const AnimatedProjects = ({
    projects,
    autoplay = false,
    className,
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 8000); // Slower interval for projects
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div className={cn("max-w-sm md:max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-12", className)}>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <div>
                    <div className="relative h-64 md:h-96 w-full">
                        <AnimatePresence>
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title} // Using Title as key since image might be placeholder
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 999
                                            : projects.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <div className="h-full w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl relative group">
                                        {project.image && !project.image.startsWith('/api/placeholder') ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                draggable={false}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center">
                                                <span className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</span>
                                            </div>
                                        )}
                                        {/* Overlay for quick info if needed */}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    {/* Navigation Buttons Moved Here */}
                    <div className="flex gap-4 pt-8 justify-center md:justify-end">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center group/button hover:bg-slate-700 hover:border-slate-500 transition-all"
                        >
                            <ArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center group/button hover:bg-slate-700 hover:border-slate-500 transition-all"
                        >
                            <ArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between flex-col h-full">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col h-full justify-center"
                    >
                        <h3 className="text-3xl font-bold text-white mb-2">
                            {projects[active].title}
                        </h3>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {projects[active].tech.map((tech) => (
                                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-cyan-900/40 text-cyan-200 border border-cyan-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            {projects[active].description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            {projects[active].github && projects[active].github !== "#" && (
                                <a
                                    href={projects[active].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
                                >
                                    <Github className="w-5 h-5" />
                                    Code
                                </a>
                            )}
                            {projects[active].live && projects[active].live !== "#" && (
                                <a
                                    href={projects[active].live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg hover:shadow-cyan-500/25"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
