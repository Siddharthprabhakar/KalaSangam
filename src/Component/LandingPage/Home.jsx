import { EndSection } from '../Footer/EndSection'
import ReactFullpage from '@fullpage/react-fullpage';
import { SectionOne } from './Sections/SectionOne/SectionOne';
import { SectionTwo } from './Sections/SectionTwo/SectionTwo'
import { SectionThree } from './Sections/SectionThree/SectionThree';
import { SectionFour } from './Sections/SectionFour/SectionFour';

export function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={1000} 
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
        
          <div
            className="section"
          >
            <SectionOne />
          </div>

          <div className="section">
            <SectionTwo />
          </div>

          <div className="section">
            <SectionThree />
          </div>

          <div className="section">
            <SectionFour />
          </div>

          <div className="section" style={{ height: '80vh', backgroundColor: "Black" }} >
            <EndSection />
          </div>

        </ReactFullpage.Wrapper>
      )}
    />
  );
}
