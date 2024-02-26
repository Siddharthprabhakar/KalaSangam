import { AboutUs } from './Component/AboutUs/AboutUs';
import { EndSection } from './Component/Footer/EndSection';
import { Home } from './Component/LandingPage/Home';
import { Header } from './Component/NavBar/Header';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
      <EndSection />
    </>
  );
}
