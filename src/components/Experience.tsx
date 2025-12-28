"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {cvData.experience.map((exp, idx) => (
            <div key={exp.company} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-200 dark:border-slate-800 ml-4">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950" />
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xl mb-4">
                  <Briefcase className="w-5 h-5" />
                  <h3>{exp.company}</h3>
                </div>

                <div className="space-y-6">
                  {exp.roles.map((role, ridx) => (
                    <div key={ridx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {role.title}
                        </h4>
                        <span className="text-sm text-slate-500 font-medium">
                          {role.period}
                        </span>
                      </div>
                      {ridx === 0 && (
                        <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

