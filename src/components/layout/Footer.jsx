const Footer = ({ name }) => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 p-4 mt-8 transition-colors">
      <div className="container mx-auto text-sm text-gray-600 dark:text-gray-400 flex justify-between items-center">
        <p>© {new Date().getFullYear()} {name}</p>
        <div className="flex space-x-4">
          <a href="https://github.com/alif-arrizqy" className="hover:text-blue-600 dark:hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/alif-ayatulloh-arrizqy/" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;