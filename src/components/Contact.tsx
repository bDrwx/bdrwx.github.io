import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Готовы
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent"> забронировать проживание?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Мы будем рады приветствовать вас в нашем гостевом доме. Свяжитесь с нами, чтобы проверить наличие мест или задать любые вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-yellow-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Отправьте нам сообщение</h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Иван"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Фамилия</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Иванов"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="ivan@email.com"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Дата заезда</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Дата выезда</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Расскажите нам о ваших предпочтениях для проживания..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center justify-center group text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Свяжитесь с нами</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Мы здесь, чтобы сделать ваше пребывание идеальным. Если у вас есть вопросы о наших номерах, 
                местных достопримечательностях или особых пожеланиях, не стесняйтесь обращаться к нам.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Позвоните нам</p>
                  <p className="text-gray-600 text-sm sm:text-base">+7 (918) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Напишите нам</p>
                  <p className="text-gray-600 text-sm sm:text-base">info@gogol-guesthouse.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Посетите нас</p>
                  <p className="text-gray-600 text-sm sm:text-base">ул. Морская, 15<br />Архипо-Осиповка, Краснодарский край</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Время заезда</p>
                  <p className="text-gray-600 text-sm sm:text-base">Заезд: 15:00 - 21:00<br />Выезд: до 11:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-yellow-200">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-600" />
                Совет по быстрому бронированию
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Для бронирования в день заезда, пожалуйста, звоните нам напрямую. Мы сделаем все возможное, чтобы удовлетворить ваши потребности!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;