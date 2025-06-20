import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calculator, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/extra-salsa', label: 'Extra Salsa', icon: Calculator },
    { path: '/egg-muffin', label: 'EggMuffin', icon: Calculator },
    { path: '/cdp', label: 'CDP', icon: Calculator },
    { path: '/agranda-combos', label: 'Agranda Combos', icon: Calculator },
    { path: '/digital-channels', label: 'Canales Digitales', icon: Calculator },
    { path: '/mcxmenos', label: 'McxMenos', icon: Calculator },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="bg-mcd-red dark:bg-mcd-red-dark text-white p-4 shadow-lg md:hidden">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            McDonald's Reports
          </Link>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-mcd-red-dark dark:hover:bg-mcd-red transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-mcd-red-dark dark:hover:bg-mcd-red transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="bg-white dark:bg-gray-800 shadow-lg md:hidden animate-slide-up border-b dark:border-gray-700">
          <div className="py-2">
            {navigationItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  isActive(path) ? 'bg-mcd-red/10 dark:bg-mcd-red/20 text-mcd-red dark:text-mcd-yellow border-r-2 border-mcd-red dark:border-mcd-yellow' : ''
                }`}
              >
                <Icon size={20} className="mr-3" />
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Desktop Header */}
      <header className="hidden md:block bg-mcd-red dark:bg-mcd-red-dark text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              McDonald's - Reportes Operacionales
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-mcd-red-dark dark:hover:bg-mcd-red transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white dark:bg-gray-800 shadow-lg border-b dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {navigationItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-4 py-4 text-gray-700 dark:text-gray-200 hover:text-mcd-red dark:hover:text-mcd-yellow transition-colors whitespace-nowrap ${
                  isActive(path) ? 'text-mcd-red dark:text-mcd-yellow border-b-2 border-mcd-red dark:border-mcd-yellow' : ''
                }`}
              >
                <Icon size={18} className="mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;