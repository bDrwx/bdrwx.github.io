import React, { useState } from 'react';
import { Menu, X, Home, TentTree } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-yellow-100">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-1.5 sm:p-2 rounded-lg">
              <TentTree className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">ГОГОЛЬ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#rooms" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium text-sm lg:text-base">
              Комнаты
            </a>
            <a href="#amenities" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium text-sm lg:text-base">
              Услуги
            </a>
            <a href="#about" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium text-sm lg:text-base">
              О нас
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium text-sm lg:text-base">
              Отзывы
            </a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium text-sm lg:text-base">
              Контакты
            </a>
            <button 
              onClick={onBookingClick}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-sm lg:text-base"
            >
              Забронировать
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-100">
            <nav className="flex flex-col space-y-3">
              <a href="#rooms" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium py-2">
                Комнаты
              </a>
              <a href="#amenities" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium py-2">
                Услуги
              </a>
              <a href="#about" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium py-2">
                О нас
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium py-2">
                Отзывы
              </a>
              <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 font-medium py-2">
                Контакты
              </a>
              <button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200 font-medium self-start mt-2"
              >
                Забронировать
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;