import React from 'react';
import { useRouter } from 'next/router';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push('/booking');
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Book Now</h3>
      <p className="text-2xl font-bold mb-4">${price} per night</p>
      <button
        onClick={handleBookNow}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Reserve
      </button>
    </div>
  );
};

export default BookingSection;