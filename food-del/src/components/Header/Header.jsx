import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    {
      id: 1,
      imageUrl: '/header_img copy.png', 
      heading: 'Order your favourite food here',
      description: 'Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.',
      buttonLabel: 'View Menu',
    },
    {
      id: 2,
      imageUrl: '/header_img.jpg',
      heading: 'Free Delivery',
      description: 'From May 1 till May 30',
      buttonLabel: 'Order Now',
    },
    {
      id: 3, // Changed ID to make it unique
      imageUrl: '/header_imgg2.jpeg',
      heading: 'Get your food delivered.', // Updated heading for the third slide
      description: 'Feast at your door step everyday', // Updated description
      buttonLabel: 'Explore',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length ? 1 : currentSlide + 1); 
    }, 5000); 

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentSlide, slides.length]);

  return (
    <div className='header'>
      <div className='header-contents'>
        {/* Include logic to switch between slides based on currentSlide */}
        {slides.map((slide) => (
          currentSlide === slide.id && (
            <div key={slide.id} className="slide-container">
              <img src={slide.imageUrl} alt={slide.heading} className="slide-image" />
              <div className="slide-description">
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <button className="button-label">{slide.buttonLabel}</button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Header;
