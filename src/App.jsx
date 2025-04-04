import About from "./Component/About"
import CarList from "./Component/CarList"
import Footer from "./Component/Footer"
import Hero from "./Component/Hero"
import Information from "./Component/Information"
import Navbar from "./Component/Navbar"
import OverViewCounter from "./Component/OverViewCounter"
import Aos from "aos"
import 'aos/dist/aos.css'
import React from "react"


function App() {
    React.useEffect(()=>{
        Aos.init({
          offset:100,
          duration:700,
          easing:'ease-in',
          delay:100,
        });
        Aos.refresh();
      })
 return(
 <>
<div className="overflow-x-hidden">
<Navbar/>
<Hero/>
<OverViewCounter/>
<About/>
<Information/>
<CarList/>
<Footer/>
</div>
 </>
 )
}

export default App
