import React from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  return (
    <section className="pt-16 pb-8 px-4 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 sm:pt-20 sm:pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 items-center lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="text-center order-2 lg:text-left lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium mb-4 sm:px-4 sm:py-2 sm:text-sm sm:mb-6">
              <Star className="w-3 h-3 mr-1 fill-current sm:w-4 sm:h-4 sm:mr-2" />
              Лучший гостевой дом в Архипо-Осиповке
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4 sm:text-4xl sm:mb-6 md:text-5xl lg:text-6xl">
              Твой лучший
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent"> Дом</span>
              <br />
              на берегу моря
            </h1>
            
            <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto sm:text-lg sm:mb-8 lg:text-xl lg:mx-0">
              Некоторым нужен покой и уединение на отдыхе, другие скучают без шумной компании. Просто расскажите нам о своих                   предпочтениях, и мы постараемся всё устроить.
            </p>
            
            <div className="flex flex-col gap-3 mb-8 justify-center sm:flex-row sm:gap-4 sm:mb-12 lg:justify-start">
              <button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center justify-center group text-sm sm:px-8 sm:py-4 sm:text-base"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Свободные номера
              </button>
              
              <button className="border-2 border-yellow-300 text-yellow-700 px-6 py-3 rounded-full hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-200 font-semibold flex items-center justify-center group text-sm sm:px-8 sm:py-4 sm:text-base">
                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Месторасположение
              </button>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-xs text-gray-500 justify-center sm:flex-row sm:space-y-0 sm:space-x-6 sm:text-sm lg:justify-start lg:space-x-8">
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">4.9★</span>
                <span className="ml-1">Рейтинг</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">150+</span>
                <span className="ml-1">Отдохнувших гостей</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">24/7</span>
                <span className="ml-1">Поддержка</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl transform rotate-3 opacity-20 sm:rounded-3xl"></div>
              <img
                src="https://varhipku.ru/wp-content/uploads/2021/07/lounge-1.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Cozy guest house exterior"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300 sm:rounded-3xl"
              />
              <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-xl shadow-xl sm:-bottom-6 sm:-left-6 sm:p-4 sm:rounded-2xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center sm:w-12 sm:h-12">
                    <span className="text-white font-bold text-xs sm:text-sm">WiFi</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Free WiFi</p>
                    <p className="text-xs text-gray-500 sm:text-sm">High-speed internet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;