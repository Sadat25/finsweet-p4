import React from 'react'
import Navbar from './Components/Navbar'
import Btn from './Components/Btn'
import Footer from './Components/Footer'
import Aboutuslastpart from './Pages/Hamim-Regwan/Aboutpage/Aboutuslastpart'


const App = () => {
  return (
      <div>
          <Navbar />
          <Btn>Call us</Btn>
          <Aboutuslastpart/>
          <Footer/>
    </div>
  )
}

export default App