import React, { useState, useEffect, useRef } from 'react';

const clients = [
  { name: 'Aether 1', logo: '/assets/aether-logo-black.png' },
  { name: 'Aether 2', logo: '/assets/aether-logo-black.png' },
  { name: 'Aether 3', logo: '/assets/aether-logo-black.png' },
  { name: 'Aether 4', logo: '/assets/aether-logo-black.png' },
  { name: 'Aether 5', logo: '/assets/aether-logo-black.png' },
  { name: 'Aether 6', logo: '/assets/aether-logo-black.png' },
  { name: 'Aether 7', logo: '/assets/aether-logo-black.png' },
  { name: 'Aether 8', logo: '/assets/aether-logo-black.png' },
];

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 768) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(3);
      else setItemsToShow(5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === clients.length - itemsToShow ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, itemsToShow]);

  const dotsCount = Math.max(0, clients.length - itemsToShow + 1);

  return (
    <section className="bg-white py-20 md:py-28 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            OUR CLIENTS AND PARTNERS!
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-20 bg-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-[#0062fe]"></div>
            <div className="h-[2px] w-20 bg-gray-200"></div>
          </div>
        </div>
      
      <div className="w-full max-w-7xl px-4 relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="h-20 w-full flex items-center justify-center p-2">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = `https://via.placeholder.com/200x80?text=${client.name}`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex gap-3 mt-12">
        {Array.from({ length: dotsCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? "w-3 h-3 bg-[#0062fe]" 
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
