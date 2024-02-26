import { TypeAnimation } from "react-type-animation";
import './One.css'; 

export function SectionOne() {
  return (
    <div className="section-one-container">
      <div className="content-wrapper">
        <div className="text-container">
        <h2 className="main-text">
          Welcome to KalaSangam
        </h2>
        <h2 className="type-animation">
          <TypeAnimation
            data-aos="fade-up"
            sequence={[
              "Connecting Artisans",
              2500,
              "Preserving Traditions",
              2500,
              "Crafting Stories",
            ]}
            speed={30}
            wrapper="h2"
            repeat={Infinity}
          />
        </h2>
        
          <p>
            Your journey into authentic Indian crafts starts here
          </p>
        </div>
      </div>
    </div>
  );
}
