"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { GraduationCap, Award } from "lucide-react";

export default function EducationAndCerts() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
            </div>
            <div className="space-y-8">
              {cvData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.degree}
                  </p>
                  <span className="text-sm text-slate-500 font-medium">{edu.period}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
            </div>
            <div className="grid gap-4">
              {cvData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

