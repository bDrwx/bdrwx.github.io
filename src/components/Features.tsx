import React from 'react';
import { Wifi, Car, Coffee, Utensils, Tv, Wind } from 'lucide-react';

const Features = () => {
  const amenities = [
    {
      icon: Wifi,
      title: 'Бесплатный WiFi',
      description: 'Высокоскоростное интернет-соединение по всей территории для работы или отдыха.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Car,
      title: 'Бесплатная парковка',
      description: 'Бесплатная парковка на территории доступна для всех гостей во время их пребывания.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Coffee,
      title: 'Кофе и чай',
      description: 'Бесплатный кофе и чай доступны круглосуточно в общей зоне.',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      icon: Utensils,
      title: 'Мини-кухня',
      description: 'Полностью оборудованная мини-кухня с холодильником, микроволновкой и необходимой посудой.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Tv,
      title: 'Smart TV',
      description: 'Большой Smart TV со стриминговыми сервисами и кабельными каналами в каждом номере.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Wind,
      title: 'Климат-контроль',
      description: 'Индивидуальное управление кондиционированием и отоплением для оптимального комфорта.',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <section id="amenities" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Комфорт и
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent"> удобство</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Все необходимое для комфортного и незабываемого пребывания. Мы продумали каждую деталь, 
            чтобы сделать ваш визит максимально приятным.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${amenity.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                  {amenity.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-sm sm:text-base">
            Посмотреть все удобства
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;