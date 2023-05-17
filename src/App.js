import './App.css';
import { NaVbar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import  {Other}  from './Components/Other';
import { Testimonials } from './Components/Testimonials';
import { Sectfinal } from "./Components/Sectfinal";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NaVbar/>
     <Banner/>
     <Other/>
     <Testimonials/>
     <Sectfinal/>
     <Footer/>
    </div>
  );
}

export default App;
