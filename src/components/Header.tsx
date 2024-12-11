import { Menu, X } from 'lucide-react'; 

interface HeaderProps {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export function Header({ toggleMobileMenu, isMobileMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md dark:bg-gray-900/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">
            SAI KUMAR <span className="text-teal-500">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            
            <a href="#home" className="nav-link">Home</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            {/* <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">
              Hire Me
            </button> */}
          </div>

          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
