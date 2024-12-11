import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  // Function to copy the email to the clipboard
  const copyEmailToClipboard = () => {
    const email = 'saisenapathi325@gmail.com';
    navigator.clipboard.writeText(email).then(
      () => {
        alert('Email copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy email: ', err);
      }
    );
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Data Analyst
              <span className="block">Web Developer</span>
              <span className="block text-teal-500">Problem Solver</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Transforming complex data into actionable insights. Passionate about uncovering patterns
              and driving data-informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/SAIKUMAR90146" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sai-kumar-senapathi-a302a1266/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:saisenapathi325@gmail.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default mailto action
                  copyEmailToClipboard();
                }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="/src/assests/resume.pdf"
                download
                className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors"
              >
                Download Resume
              </a>
              <button
                className="border border-teal-500 text-teal-500 px-6 py-3 rounded-md hover:bg-teal-500 hover:text-white transition-colors"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500">
                <img
                  src="/src/assests/Screenshot 2024-12-09 155943.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
