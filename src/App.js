
import './App.css';
import Home from './Components/home';
import Farmhouse from './Components/farmhouse';
import Booknow from './Components/booknow';
import Aboutus from './Components/aboutus';
import Services from './Components/services';
import Testimonials from './Components/testimonials';
import Contactus from './Components/contactus';
import Nav from './Components/navbar';
import Invoice from './Components/invoice';
import Explore from './Components/explore';
import Facilities from './Components/facilities';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmhouses" element={<Farmhouse />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/invoice" element={<Invoice />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
