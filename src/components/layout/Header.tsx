import { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: '首页', path: '/' },
  { label: '关于', path: '/about' },
  { label: '博客', path: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className={`flex items-center gap-2 text-xl font-bold transition-colors ${
              isScrolled ? 'text-primary-800' : 'text-white'
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
              <span className="text-white font-serif">Z</span>
            </div>
            <span className="font-serif">张三的博客</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-primary-800'
                      : 'text-white'
                    : isScrolled
                    ? 'text-gray-600'
                    : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Twitter size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-800"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-800"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}