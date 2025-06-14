import React, { useState } from 'react';
import { Bed, Users, Wifi, Coffee, Tv, Bath, Star, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import PhotoViewer from './PhotoViewer';

interface RoomsProps {
  onBookingClick: () => void;
}

const Rooms: React.FC<RoomsProps> = ({ onBookingClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [photoViewer, setPhotoViewer] = useState<{
    isOpen: boolean;
    roomId: number | null;
    currentIndex: number;
  }>({
    isOpen: false,
    roomId: null,
    currentIndex: 0
  });

  const rooms = [
    {
      id: 1,
      name: 'Делюкс номер с двуспальной кроватью',
      images: [
        'https://varhipku.ru/wp-content/uploads/2023/04/IMG_20220702_200627-izmenennyj-scaled.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://varhipku.ru/wp-content/uploads/2023/05/2023-06-25-13-12-15_1687785710.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      price: '4500₽',
      capacity: '2 гостя',
      size: '30 м²',
      features: ['Двуспальная кровать', 'Собственная ванная', 'Вид на город', 'Рабочий стол'],
      amenities: [Wifi, Coffee, Tv, Bath],
      rating: 4.9,
      description: 'Просторный и комфортный номер с современными удобствами и красивым видом на город. Идеально подходит для пар или деловых путешественников.'
    },
    {
      id: 2,
      name: 'Уютный номер с двумя кроватями',
      images: [
        'https://varhipku.ru/wp-content/uploads/2023/04/IMG_20220705_192103.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://varhipku.ru/wp-content/uploads/2023/04/IMG_20180603_113607.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      price: '3500₽',
      capacity: '2 гостя',
      size: '26 м²',
      features: ['Две односпальные кровати', 'Общая ванная', 'Вид на сад', 'Уголок для чтения'],
      amenities: [Wifi, Coffee, Tv],
      rating: 4.8,
      description: 'Светлый и просторный номер с двумя кроватями, идеально подходящий для друзей или путешественников, которые хотят больше пространства.'
    },
    {
      id: 3,
      name: 'Семейный люкс',
      images: [
        'https://varhipku.ru/wp-content/uploads/2023/04/IMG_20220709_112151-izmenennyj-scaled.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      price: '6500₽',
      capacity: '4 гостя',
      size: '42 м²',
      features: ['Двуспальная кровать + диван-кровать', 'Собственная ванная', 'Мини-кухня', 'Балкон'],
      amenities: [Wifi, Coffee, Tv, Bath],
      rating: 5.0,
      description: 'Просторный люкс, идеальный для семей, с отдельной гостиной зоной и мини-кухней для длительного проживания.'
    },
    {
      id: 4,
      name: 'Студия',
      images: [
        'https://varhipku.ru/wp-content/uploads/2021/07/A12A2709.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      price: '5000₽',
      capacity: '2 гостя',
      size: '35 м²',
      features: ['Двуспальная кровать', 'Полноценная кухня', 'Гостиная зона', 'Отдельный вход'],
      amenities: [Wifi, Coffee, Tv, Bath],
      rating: 4.9,
      description: 'Автономная студия с полноценной кухней и гостиной зоной. Идеально для длительного проживания или гостей, предпочитающих независимость.'
    }
  ];

  const nextImage = (roomId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (roomId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToImage = (roomId: number, index: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: index
    }));
  };

  const openPhotoViewer = (roomId: number, imageIndex: number) => {
    setPhotoViewer({
      isOpen: true,
      roomId,
      currentIndex: imageIndex
    });
    // Prevent body scroll when photo viewer is open
    document.body.style.overflow = 'hidden';
  };

  const closePhotoViewer = () => {
    setPhotoViewer({
      isOpen: false,
      roomId: null,
      currentIndex: 0
    });
    // Restore body scroll when photo viewer is closed
    document.body.style.overflow = 'unset';
  };

  const nextPhotoViewerImage = () => {
    if (photoViewer.roomId) {
      const room = rooms.find(r => r.id === photoViewer.roomId);
      if (room) {
        const nextIndex = (photoViewer.currentIndex + 1) % room.images.length;
        setPhotoViewer(prev => ({ ...prev, currentIndex: nextIndex }));
      }
    }
  };

  const prevPhotoViewerImage = () => {
    if (photoViewer.roomId) {
      const room = rooms.find(r => r.id === photoViewer.roomId);
      if (room) {
        const prevIndex = (photoViewer.currentIndex - 1 + room.images.length) % room.images.length;
        setPhotoViewer(prev => ({ ...prev, currentIndex: prevIndex }));
      }
    }
  };

  const currentRoom = photoViewer.roomId ? rooms.find(r => r.id === photoViewer.roomId) : null;

  return (
    <section id="rooms" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Наши прекрасные
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent"> номера</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Каждый номер продуман с заботой о вашем комфорте. Выберите из нашего ассортимента 
            уютных номеров, каждый со своим уникальным шармом и современными удобствами.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {rooms.map((room) => {
            const currentIndex = currentImageIndex[room.id] || 0;
            return (
              <div
                key={room.id}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Room Image Slider */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] overflow-hidden group">
                  <img
                    src={room.images[currentIndex]}
                    alt={`${room.name} - фото ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => openPhotoViewer(room.id, currentIndex)}
                  />
                  
                  {/* Full Screen Button */}
                  <button
                    onClick={() => openPhotoViewer(room.id, currentIndex)}
                    className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                    title="Посмотреть в полном размере"
                  >
                    <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </button>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => prevImage(room.id, room.images.length)}
                    className="absolute left-3 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-700" />
                  </button>
                  
                  <button
                    onClick={() => nextImage(room.id, room.images.length)}
                    className="absolute right-3 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-700" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                    {room.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(room.id, index)}
                        className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-white scale-125 shadow-lg' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 bg-white px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-full shadow-lg">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current" />
                      <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">{room.rating}</span>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-lg">
                    {room.price}/ночь
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-black/60 text-white px-3 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-2 rounded-full text-sm sm:text-base lg:text-lg font-medium backdrop-blur-sm">
                    {currentIndex + 1}/{room.images.length}
                  </div>

                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
                </div>

                {/* Room Details */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{room.name}</h3>
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {room.capacity}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{room.description}</p>

                  {/* Room Features */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Особенности номера</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities Icons */}
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    {room.amenities.map((Icon, index) => (
                      <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                      </div>
                    ))}
                  </div>

                  {/* Room Size */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center text-gray-500">
                      <Bed className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      <span className="text-xs sm:text-sm">{room.size}</span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <button 
                    onClick={onBookingClick}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 sm:py-4 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-sm sm:text-base"
                  >
                    Забронировать номер
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white shadow-lg border border-yellow-200">
            <span className="text-gray-600 mr-2 text-sm sm:text-base">Нужна помощь в выборе?</span>
            <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200 text-sm sm:text-base">
              Свяжитесь с нами за рекомендациями
            </button>
          </div>
        </div>
      </div>

      {/* Photo Viewer */}
      {currentRoom && (
        <PhotoViewer
          isOpen={photoViewer.isOpen}
          onClose={closePhotoViewer}
          images={currentRoom.images}
          currentIndex={photoViewer.currentIndex}
          onNext={nextPhotoViewerImage}
          onPrev={prevPhotoViewerImage}
          roomName={currentRoom.name}
        />
      )}
    </section>
  );
};

export default Rooms;