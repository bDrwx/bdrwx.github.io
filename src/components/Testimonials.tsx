import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Анна Петрова',
      location: 'Москва, Россия',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Абсолютно замечательное пребывание! Номер был безупречно чистым, хозяева невероятно гостеприимными, а расположение идеальным для изучения города. Чувствовала себя как дома.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      location: 'Санкт-Петербург, Россия',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Гостевой дом превзошел все ожидания. Красивые номера, отличные удобства, а завтрак был потрясающим. Хозяева сделали все возможное, чтобы наше пребывание стало незабываемым.',
      rating: 5
    },
    {
      name: 'Елена Кузнецова',
      location: 'Краснодар, Россия',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Идеально для романтического отдыха! Внимание к деталям было невероятным, от уютного декора до продуманных мелочей. Мы обязательно вернемся на годовщину.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Истории
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent"> наших гостей</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Прочитайте, что говорят наши гости о своем опыте пребывания у нас.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-200" />
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm sm:text-base">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mr-1 sm:mr-2 fill-current" />
            4.9/5 средний рейтинг из 150+ отзывов
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;