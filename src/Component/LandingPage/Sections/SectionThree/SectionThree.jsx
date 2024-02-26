import { useState, useEffect } from 'react';
import './three.css'

export function SectionThree() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    'https://assets-global.website-files.com/61c11b4eea114eeb2cece931/64bf9bfb38f1f3db884370f8_Untitled%20design%20(34).jpg',
    'https://assets-global.website-files.com/61c11b4eea114eeb2cece931/64bf9d1a6b409344b78c728d_Untitled%20design%20(35).jpg',
    'https://assets-global.website-files.com/61c11b4eea114eeb2cece931/64bf9dfce155dc29dbba807f_Untitled%20design%20(36).jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <main>
      <div>
        <span>KalaSangam</span>
        <h1>Sell products online</h1>
        <hr />
        <p>Showcase your products at their absolute best. Allow your visitors to browse your merchandise, add items to their cart, check out simply and efficiently, and leave product reviews.</p>
        <a href="#">LEARN MORE</a>
      </div>
      <div style={{ width: '2000px', height: '500px', overflow: 'hidden', position: 'relative' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: `${index * 100}%`,
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          <img src={slide} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
        </div>
      ))}
    </div>
    </main>
  );
}

