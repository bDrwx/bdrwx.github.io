import { useState } from 'react';

export const useBookingForm = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const openBookingForm = () => {
    setIsBookingFormOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  return {
    isBookingFormOpen,
    openBookingForm,
    closeBookingForm
  };
};