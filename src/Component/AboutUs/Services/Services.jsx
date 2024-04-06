import "./services.css";
import stich from "../../../Assets/Stich.png";
import pottery from "../../../Assets/pottery.png";
import painter from "../../../Assets/Painting.png";

export function Services() {
  return (
    <div>
      <div className="product-navbar">
        <div className="product-navbar-centered">
          <ul>
            <li>
              <a href="#" className="">
                <span>LINK</span>
              </a>
            </li>
            <li>
              <a href="#" className="">
                LINK
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="about-main">
        <div className="jumbotron">
          <div className="jumbotron-inner">
            <div className="top-box">
              <div className="content-box">
                <h1>About कलाSangam</h1>
                <p>
                  कला Sangam is a unique platform designed for rural artisans,
                  providing them with the opportunity to showcase and sell their
                  products online or through phone calls. Our dedicated call
                  providers offer assistance in selling their crafts, manage
                  expenses, track sales, and forecast future demand, ensuring
                  sustainable livelihoods for these talented artisans.
                </p>
              </div>
            </div>
          </div>
          <div className="img-layer-container">
            <div className="team-image" id="team-image">
              <img src={stich} />
            </div>
          </div>
        </div>
        <div className="story-container">
          <div className="need-for-dx-container">
            <h3 className="text-center">Bringing Smiles to Every Story</h3>
            <p>
              At Kala Sangam, we believe in more than just transactions; we
              believe in transformations. Our platform has become a beacon of
              hope, empowering individuals to not only earn a living but to
              craft their dreams into reality. Join us in creating a world where
              every story begins with a smile.
            </p>
          </div>
          <div className="img-flex-container">
            <div className="img-container">
              <img
                src="https://images.unsplash.com/photo-1611574557783-9a50bb34e9f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwYXJ0aXNhbnN8ZW58MHx8MHx8fDA%3D"
                alt="lady selling pots"
                className="img-responsive"
              />
            </div>
            <div className="img-container">
              <img
                src="https://images.unsplash.com/photo-1640239259272-6f26a9affb98?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="man working"
                className="img-responsive"
              />
            </div>
            <div className="img-container">
              <img
                src="https://images.unsplash.com/photo-1591285512566-b71a700e0e66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="stitching clothes"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="container-divider"></div>
          <div className="our-tech-container">
            <h3 className="text-center">Empowering Rural Artisans</h3>
            <p>
              Kala Sangam empowers rural artisans by combining traditional and
              modern sales methods. Artisans can showcase their products on our
              website, manage inventory and pricing, and reach a wider audience.
              We also offer phone call sales assistance, helping artisans list
              products, handle inquiries, and process orders seamlessly. Our
              tracking tools enable artisans to monitor sales, track expenses,
              and plan for future production needs effectively.
            </p>
            <div className="techimage-flex-container">
              <div className="techimage-container">
                <img src={pottery} alt="pottery" />
              </div>
              <div className="techimage-container">
                <img src={painter} alt="Painting" />
              </div>
            </div>
          </div>
          <div className="container-divider"></div>
          <div className="origin-story-container">
            <h3 className="text-center">The कला Sangam Journey</h3>
            <p>
              The story of Kala Sangam begins with a vision rooted in
              empowerment and innovation. our journey has been shaped by a 
              deep understanding of the challenges faced by rural artisans 
              and a relentless commitment to providing them with opportunities 
              to thrive in the modern marketplace.
            </p>
            <p>
              It&apos;s driven by a passion for art and technology, embarked on a
              mission to bridge the gap between traditional craftsmanship and
              digital commerce. They recognized that while artisans possessed
              incredible talent, they often lacked access to the resources and
              platforms needed to showcase and sell their creations to a wider
              audience.
            </p>
            <p>
              Through innovative solutions like online storefronts, phone call
              sales assistance, inventory management tools, and price
              optimization features, we empower artisans to showcase their
              talent, reach a global audience, and thrive in the modern
              marketplace. Our journey is fueled by a deep appreciation for
              cultural heritage and a relentless dedication to empowering
              artisans worldwide.
            </p>
          </div>
          <div className="container-divider"></div>
          <div className="today-container">
            <h3 className="text-center">A Journey of Success</h3>
            <p>
              Kala Sangam's journey is a testament to the transformative power
              of art and technology. Over the years, we have evolved from a
              simple platform to a comprehensive ecosystem that empowers rural
              artisans in numerous ways:
            </p>
            <ul>
              <li>
                We provide artisans with the tools to create captivating online
                storefronts, showcasing their unique creations to a global
                audience.
              </li>
              <li>
                Through our platform, artisans can sell their products with
                ease, whether it&apos;s through our user-friendly website or a
                personalized phone call service.
              </li>
              <li>
                Our robust inventory management system helps artisans keep track
                of their products, sales, and stock levels efficiently.
              </li>
              <li>
                We assist artisans in pricing their products competitively,
                ensuring fair value for their craftsmanship while attracting
                customers.
              </li>
              <li>
                Our dedicated team provides personalized sales assistance,
                guiding artisans through the selling process and handling
                customer inquiries.
              </li>
              <li>
                With advanced tracking and reporting tools, artisans can monitor
                their sales performance, analyze trends, and make data-driven
                decisions for future growth.
              </li>
              <li>
                Kala Sangam fosters a vibrant community of artisans, encouraging
                collaboration, learning, and collective empowerment.
              </li>
            </ul>
          </div>
          <div className="container-divider"></div>
        </div>
      </div>
    </div>
  );
}
