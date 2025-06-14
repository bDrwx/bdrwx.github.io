import React from 'react';
import { CheckCircle, Heart, Users, Award } from 'lucide-react';

interface AboutProps {
  onBookingClick: () => void;
}

const About: React.FC<AboutProps> = ({ onBookingClick }) => {
  const highlights = [
    'Уютные, хорошо оборудованные номера с современными удобствами',
    'Отличное расположение рядом с местными достопримечательностями и ресторанами',
    'Персональное обслуживание от дружелюбных местных хозяев',
    'Тихая садовая зона, идеальная для отдыха',
    'Удобный доступ к общественному транспорту '
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl sm:rounded-3xl transform -rotate-6 opacity-20"></div>
            <img
              src="https://varhipku.ru/wp-content/uploads/2023/06/video-bg.jpg?auto=compress&cs=tinysrgb&w=800"
              alt="Интерьер комфортного гостевого номера"
              className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-red-500 fill-current" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Любимец гостей</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Награжденное гостеприимство
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Теплый прием
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent"> ждет вас</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Наш очаровательный гостевой дом принимает путешественников уже более десяти лет. Мы гордимся 
              созданием домашней атмосферы, где каждый гость чувствует себя ценным и комфортно. С момента 
              вашего прибытия вы почувствуете тепло искреннего гостеприимства.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-gray-900">150+</p>
                <p className="text-xs sm:text-sm text-gray-600">Довольных гостей</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mx-auto mb-1 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-gray-900">4.9★</p>
                <p className="text-xs sm:text-sm text-gray-600">Средний рейтинг</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-sm sm:text-base"
              >
                Забронировать проживание
              </button>
              <button className="border-2 border-yellow-300 text-yellow-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-200 font-semibold text-sm sm:text-base">
                Виртуальная экскурсия
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;