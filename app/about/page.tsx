'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const skills = [
    'Branding & Identity',
    'UI/UX Design',
    'Web Design',
    'Mobile App Design',
    'Digital Marketing',
    'Visual Design',
    'Design Systems',
    'Prototyping',
  ];

  const experience = [
    {
      role: 'Senior Designer',
      company: 'Creative Studio',
      period: '2022 - Present',
      description: 'Leading design initiatives for premium brands and digital products.',
    },
    {
      role: 'Product Designer',
      company: 'Tech Company',
      period: '2020 - 2022',
      description: 'Designed user-centered digital experiences for mobile and web platforms.',
    },
    {
      role: 'Junior Designer',
      company: 'Design Agency',
      period: '2019 - 2020',
      description: 'Collaborated on branding, web, and marketing design projects.',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            About Me
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Creative designer with a passion for crafting beautiful, purposeful digital experiences that connect with audiences.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20">
              <Image
                src="/rahma.png"
                alt="Rahma Hassan"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Designer, Creator, Innovator
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              I&apos;m a passionate designer dedicated to creating meaningful digital experiences. With over 5 years of experience in branding, UI/UX design, and digital innovation, I combine strategic thinking with creative excellence.
            </p>
            <p className="text-white/70 mb-6 leading-relaxed">
              My approach focuses on understanding user needs, solving complex design challenges, and delivering solutions that are both beautiful and functional. I believe great design is invisible—it works so well that users don&apos;t notice the effort behind it.
            </p>
            <p className="text-white/70 leading-relaxed">
              When I&apos;m not designing, you can find me exploring creative inspiration, experimenting with new design trends, or collaborating with amazing teams on innovative projects.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <p className="text-white font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-pink-300 font-medium">{exp.company}</p>
                  <p className="text-white/60 text-sm">{exp.period}</p>
                </div>
                <p className="text-white/70 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Collaborate</h2>
            <p className="text-white/70 text-lg mb-8">
              Interested in working together or just want to chat? I&apos;d love to hear from you.
            </p>
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold backdrop-blur-sm border border-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
