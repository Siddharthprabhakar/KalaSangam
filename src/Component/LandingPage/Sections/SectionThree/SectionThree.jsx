import { useState, useEffect } from 'react';
import './three.css'

export function SectionThree() {

  return (
    <div className="sectionthree-main">
    <section className="sectionthree">
      <div className="threecontainer">
        <div className="threewrapper">
          <header>
            <h2 className="heading-2">
              Your Travel journey
              <span className="highlight"> Starts Here</span>
            </h2>
          </header>
          <div className="threecontent">
            <a href="#" className="main-card">
              <div className="main-card-visual">
                <img
                  className="main-card-image"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/services-section/images/main-img.avif"
                  alt="Travel Discover"
                  width="384"
                  height="203"
                />
              </div>
              <div className="meta">
                <h1 className="heading-1">
                  Enhance your voyage with tips, tools and more
                </h1>
                <div className="threecontrols">
                  <div className="threebutton-link">Explore Booking Center</div>
                </div>
              </div>
            </a>
            <ul className="sectionthree-cards">
              <li>
                <a href="#" className="sectionthree-card padding-end">
                  <div className="sectionthreecard-visual">
                    <img
                      className="sectionthreecard-image"
                      src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/services-section/images/img-1.avif"
                      alt="music event"
                      width="194"
                      height="135"
                    />
                  </div>
                  <h3 className="heading-3">
                    Plan all your trips with Travel Business Center
                  </h3>
                </a>
              </li>
              <li>
                <a href="#" className="sectionthree-card sectionthreepadding-end">
                  <div className="sectionthreecard-visual">
                    <img
                      className="sectionthreecard-image"
                      src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/services-section/images/img-2.avif"
                      alt="Greek Island"
                      width="194"
                      height="135"
                    />
                  </div>
                  <h3 className="heading-3">
                    Connect with Trip Partners to enhance your experience
                  </h3>
                </a>
              </li>
              <li>
                <a href="#" className="sectionthree-card">
                  <div className="sectionthreecard-visual">
                    <img
                      className="card-image"
                      src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/services-section/images/img-3.avif"
                      alt="Hotel with mountain view"
                      width="194"
                      height="135"
                    />
                  </div>
                  <h3 className="heading-3">
                    Unleash your wanderlust with Travel Academy
                  </h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

