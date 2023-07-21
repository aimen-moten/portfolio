import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Skills, StarsCanvas} from "./components";
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#00000] p-4'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
        </div>
        <About/>
        <Experience />
        <Skills />
        {/* <Tech/> */}
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas/> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
