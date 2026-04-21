"use client";
import "./page.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="order-2 md:order-1" variants={itemVariants}>
            <motion.h1
              className="hero-title text-center md:text-left font-bold text-white mb-6 leading-tight text-balance"
              variants={itemVariants}
            >
              RAHMA HASSAN
            </motion.h1>
            <motion.p
       className="text-2xl md:text-[35px] text-white/80 mb-4 font-light text-center md:text-left"
              variants={itemVariants}
            >
              Creative Designer & Digital Artist
            </motion.p>

            <motion.p
              className="text-base md:text-lg lg:text-[25px] text-white/70 mb-8 max-w-lg mx-auto leading-relaxed text-center md:text-left md:mx-0"
              variants={itemVariants}
            >
              Crafting beautiful, innovative digital experiences through
              strategic design and creative excellence.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link href="/projects">
                <motion.button
                  className="px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white text-[20px] font-semibold backdrop-blur-sm border border-white/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-[20px] text-white font-semibold backdrop-blur-sm border border-white/20 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="rahma relative 
               rounded-2xl overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/rahma.png"
                alt="Rahma Hassan"
                fill
                className="object-cover object-center pb-10 md:pb-0"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl">
              A selection of recent work showcasing creative design and
              innovative solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.slice(0, 6).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <motion.button
                className="px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold backdrop-blur-sm border border-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let&apos;s collaborate on your next project. Get in touch to
              discuss your vision.
            </p>
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold backdrop-blur-sm border border-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
