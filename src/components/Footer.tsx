import React from 'react';
import { Home, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-1.5 sm:p-2 rounded-lg">
                <Home className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Гоголь</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Ваш дом вдали от дома. Почувствуйте комфорт, тепло и искреннее гостеприимство в нашем очаровательном гостевом доме.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#rooms" className="hover:text-white transition-colors duration-200">Наши номера</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors duration-200">Удобства</a></li>
              <li><a href="#location" className="hover:text-white transition-colors duration-200">Расположение</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors duration-200">Отзывы гостей</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Контакты</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Услуги</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Обслуживание номеров</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Прачечная</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Трансфер из аэропорта</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Помощь с экскурсиями</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Местные рекомендации</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Контактная информация</h3>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <p>ул. Морская, 15<br />Архипо-Осиповка, Краснодарский край</p>
              <p>Телефон: +7 (918) 123-45-67</p>
              <p>Email: info@gogol-guesthouse.ru</p>
              <div className="pt-2">
                <p className="text-xs sm:text-sm">Заезд: 15:00 - 21:00</p>
                <p className="text-xs sm:text-sm">Выезд: до 11:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Гостевой дом "Гоголь". Все права защищены.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Условия обслуживания</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">Политика отмены</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;