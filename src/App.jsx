import React from 'react'
import Navbar from './Components/Navbar'
import Btn from './Components/Btn'
import Footer from './Components/Footer'
import Aboutuslastpart from './Pages/Hamim-Regwan/Aboutpage/Aboutuslastpart'
import Aboutusfirstpart from './Pages/Hamim-Regwan/Aboutus1stpart/Aboutusfirstpart'
import AboutusMain from './Pages/Hamim-Regwan/AboutusMain'


const App = () => {
  return (
      <div>
          <Navbar />

          <AboutusMain/>
          <Footer/>
    </div>
  )
}

export default App