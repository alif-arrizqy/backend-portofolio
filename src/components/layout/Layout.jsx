import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, name, lastUpdated }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300">
      <Header name={name} />
      <main className="container mx-auto p-4 flex-grow">
        {children}
      </main>
      <Footer name={name} />
    </div>
  );
};

export default Layout;