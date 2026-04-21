'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        className="group cursor-pointer h-full"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-pink-300 mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-white/70 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-white transition-colors">
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
