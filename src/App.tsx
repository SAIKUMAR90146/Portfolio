import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent pointer-events-none" />
      
      <Header
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#experience" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </a>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors">
              Hire Me
            </button>
          </div>
        </div>
      )}

      <main className="relative">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <footer className="bg-white/5 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Data Analyst Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
