import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from './Components/Section/Section';
import Services from './Components/Services/Services';
import Sliderr from './Components/Sliderr/Sliderr';
import Footer from './Components/Footer/Footer';



function App() {


  return (
  <>
  <Navbar/>
  <Hero/>
  <Section/>
  <Services/>
  <Sliderr/><br />
  <Footer/>
      
    
  
  </>
  )
}

export default App
