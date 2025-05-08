import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ name }) => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 p-4 transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {name} <span className="text-blue-600 dark:text-blue-400">/</span> 
          <span className="text-gray-600 dark:text-gray-400">portfolio</span>
        </h1>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;