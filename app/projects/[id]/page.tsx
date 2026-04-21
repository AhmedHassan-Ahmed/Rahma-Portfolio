'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== id).slice(0, 3);

  return (
    <main className="min-h-screen pt-20">
      <Navigation />

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <div className="mb-12">
            <p className="text-pink-300 font-medium mb-2">{project.category}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                {project.details}
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                This project demonstrates a comprehensive approach to design thinking, user experience, and creative execution. Every element has been carefully crafted to deliver both aesthetic excellence and functional purpose.
              </p>
            </div>

            {/* Project Info */}
            <motion.div
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 h-fit"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white font-semibold mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Category</p>
                  <p className="text-white font-medium">{project.category}</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Year</p>
                  <p className="text-white font-medium">2024</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Status</p>
                  <p className="text-white font-medium">Completed</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <motion.div
                  key={idx}
                  className="relative h-96 rounded-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Related Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-medium text-pink-300 mb-2">
                          {relatedProject.category}
                        </p>
                        <h3 className="text-lg font-bold text-white group-hover:text-pink-200 transition-colors">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Back Button */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Link href="/projects">
            <motion.button
              className="flex items-center gap-2 px-6 py-2 text-white/70 hover:text-white transition-colors"
              whileHover={{ x: -5 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
