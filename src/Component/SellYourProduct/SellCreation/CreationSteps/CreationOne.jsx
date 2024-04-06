import { useEffect, useState, useRef } from 'react';
import './Creation.css';

export function CreationOne({ isNewUser, sellerName, handleNext }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bannerTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Auto Switching Images for CSS-Slider
    const bannerSwitcher = () => {
      console.log('Switching to next slide...');
      const inputs = document.querySelectorAll('.sec-1-input');
      const checkedInput = document.querySelector('.sec-1-input:checked');
      const currentIndex = Array.from(inputs).indexOf(checkedInput);
      const nextIndex = (currentIndex + 1) % inputs.length;
      inputs[nextIndex].checked = true;
    };

    bannerTimerRef.current = setInterval(bannerSwitcher, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(bannerTimerRef.current);
  }, []);

  const handleNavigationClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='creationOne'>
      <section id="section-1">
        <div className="content-slider">
          <input type="radio" id="banner1" className="sec-1-input" name="banner" defaultChecked />
          <input type="radio" id="banner2" className="sec-1-input" name="banner" />
          <input type="radio" id="banner3" className="sec-1-input" name="banner" />
          <input type="radio" id="banner4" className="sec-1-input" name="banner" />
          <div className="slider">
        <div id="top-banner-1" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Creative Template</h2>
            <h1>Welcome<br />to MoGo</h1>
            <div className="line"></div>
            <div className="learn-more-button"><button href="#section-2" onClick={handleNext}>Learn More</button></div>
          </div>
        </div>
        <div id="top-banner-2" className="banner">
          <div className="banner-inner-wrapper">
            <h2>What We Do</h2>
            <h1>Great<br />MoGo</h1>
            <div className="line"></div>
            <div className="learn-more-button"><button href="#section-4">Learn More</button></div>
          </div>
        </div>
        <div id="top-banner-3" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Here We Are</h2>
            <h1>We Are<br />MoGo</h1>
            <div className="line"></div>
            <div className="learn-more-button"><button href="#section-6">Learn More</button></div>
          </div>
        </div>
        <div id="top-banner-4" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Our Contacts</h2>
            <h1>Welcome<br />to MoGo</h1>
            <div className="line"></div>
            <div className="learn-more-button"><button href="#main-footer">Learn More</button></div>
          </div>
        </div>
          </div>
          <nav>
            <div className="controls">
              <label htmlFor="banner1" onClick={() => handleNavigationClick('section-2')}><span className="progressbar"><span className="progressbar-fill"></span></span><span>01</span> Intro</label>
              <label htmlFor="banner2" onClick={() => handleNavigationClick('section-4')}><span className="progressbar"><span className="progressbar-fill"></span></span><span>02</span> Work</label>
              <label htmlFor="banner3" onClick={() => handleNavigationClick('section-6')}><span className="progressbar"><span className="progressbar-fill"></span></span><span>03</span> About</label>
              <label htmlFor="banner4" onClick={() => handleNavigationClick('main-footer')}><span className="progressbar"><span className="progressbar-fill"></span></span><span>04</span> Contacts</label>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
