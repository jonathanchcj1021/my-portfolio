"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { Mail, Phone, MapPin, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-4">
              {cvData.title}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              {cvData.name}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {cvData.summary}
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5" />
                <span>{cvData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Phone className="w-5 h-5" />
                <span>{cvData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>{cvData.contact.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cvData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-900 dark:text-white rounded-full font-medium transition-colors"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

