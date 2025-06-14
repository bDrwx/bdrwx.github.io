import React from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

interface PhotoViewerProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  roomName: string;
}

const PhotoViewer: React.FC<PhotoViewerProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
  roomName
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-lg sm:text-xl font-semibold">{roomName}</h3>
            <p className="text-sm text-gray-300">
              {currentIndex + 1} из {images.length} фото
            </p>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = images[currentIndex];
                link.download = `${roomName}-photo-${currentIndex + 1}.jpg`;
                link.click();
              }}
              className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 text-white hover:scale-110"
              title="Скачать фото"
            >
              <Download className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: roomName,
                    text: `Посмотрите на этот прекрасный номер: ${roomName}`,
                    url: images[currentIndex]
                  });
                }
              }}
              className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 text-white hover:scale-110"
              title="Поделиться"
            >
              <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <button
              onClick={onClose}
              className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 text-white hover:scale-110"
              title="Закрыть"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="flex items-center justify-center h-full p-4 sm:p-8 pt-20 pb-24">
        <div className="relative max-w-7xl max-h-full">
          <img
            src={images[currentIndex]}
            alt={`${roomName} - фото ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 200px)' }}
          />
          
          {/* Loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 text-white hover:scale-110 backdrop-blur-sm"
            title="Предыдущее фото"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 text-white hover:scale-110 backdrop-blur-sm"
            title="Следующее фото"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        </>
      )}

      {/* Bottom Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 sm:p-6">
        <div className="flex justify-center space-x-2 sm:space-x-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                // This will be handled by parent component
              }}
              className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? 'border-yellow-400 scale-110 shadow-lg'
                  : 'border-white/30 hover:border-white/60 hover:scale-105'
              }`}
            >
              <img
                src={image}
                alt={`Миниатюра ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Swipe indicators for mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:hidden">
        Свайпните для навигации
      </div>
    </div>
  );
};

export default PhotoViewer;