import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationAndCerts from "@/components/EducationAndCerts";
import { cvData } from "@/data/cv";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <EducationAndCerts />
      
      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {cvData.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}

