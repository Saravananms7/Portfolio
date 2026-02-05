
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const SkillsExpandable = ({ skills }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <div className="w-full bg-transparent">
            <div className="w-full overflow-hidden">
                <div className="flex w-full items-center justify-center overflow-hidden bg-transparent">
                    {/* Reduced max-width from 7xl to 5xl */}
                    <div className="relative w-full max-w-5xl">
                        {/* Reduced height from 400px to 300px */}
                        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-2 h-auto lg:h-[300px]">
                            {skills.map((category, idx) => {
                                const isExpanded = idx === expandedIndex;
                                return (
                                    <div
                                        key={category.title}
                                        className={cn(
                                            "relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm group",
                                            // Added consistent thin border around every card
                                            "border border-white/20",
                                            isExpanded ? "flex-[3] lg:flex-[3]" : "flex-[1] lg:flex-[1]",
                                            "h-[60px] lg:h-full w-full lg:w-auto"
                                        )}
                                        onMouseEnter={() => setExpandedIndex(idx)}
                                        onClick={() => setExpandedIndex(idx)}
                                    >
                                        {/* Dynamic Background */}
                                        <div
                                            className="absolute inset-0 transition-opacity duration-500"
                                            style={{
                                                background: isExpanded
                                                    ? `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)`
                                                    : `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)`
                                            }}
                                        />

                                        {/* Color Glow Overlay */}
                                        <div
                                            className={`absolute inset-0 opacity-10 transition-opacity duration-500 ${isExpanded ? 'opacity-20' : 'group-hover:opacity-20'} 
                            ${category.technologies[0].color.split(' ')[0].replace('bg-', 'bg-gradient-to-br from-').replace('-100', '-500').replace('text-', 'to-transparent')}`}
                                        />

                                        {/* Decorative Grid Pattern */}
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:16px_16px]"></div>

                                        <div className="relative h-full w-full p-4 flex flex-col justify-center items-center z-10">
                                            {/* Header: Icon & Title */}
                                            <div className={`flex flex-col items-center justify-center text-center transition-all duration-300 ${isExpanded ? 'scale-100' : 'lg:h-full justify-center'}`}>
                                                <span className={`text-3xl mb-2 transition-all duration-300 ${isExpanded ? 'scale-100' : 'lg:mb-0 lg:scale-110 group-hover:scale-125'}`}>
                                                    {category.icon}
                                                </span>
                                                <h3 className={`font-bold text-white transition-all duration-300 ${isExpanded ? 'text-xl whitespace-nowrap' : 'text-base lg:[writing-mode:vertical-rl] lg:rotate-180 opacity-70 group-hover:opacity-100 group-hover:text-cyan-200 lg:mt-4'}`}>
                                                    {category.title}
                                                </h3>
                                            </div>

                                            {/* Content: Tech Stack (Only visible when expanded) */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.3, delay: 0.1 }}
                                                        className="mt-4 hidden lg:flex flex-wrap justify-center gap-2 max-w-[90%]"
                                                    >
                                                        {category.technologies.slice(0, 10).map((tech) => (
                                                            <div
                                                                key={tech.name}
                                                                className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm whitespace-nowrap border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default`}
                                                            >
                                                                <span className="text-sm">{tech.icon}</span>
                                                                <span className="text-xs font-medium text-gray-200">{tech.name}</span>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Mobile View Content */}
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 flex lg:hidden flex-wrap justify-end gap-1.5 max-w-[50%]"
                                                >
                                                    {category.technologies.slice(0, 3).map((tech) => (
                                                        <div key={tech.name} className={`bg-white/10 p-1.5 rounded-md text-xs border border-white/10`}>
                                                            {tech.icon}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsExpandable;
