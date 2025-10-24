import React from 'react'
import Navbar from './Components/Navbar'
import Btn from './Components/Btn'
import Footer from './Components/Footer'
import Aboutuslastpart from './Pages/Hamim-Regwan/Aboutpage/Aboutuslastpart'
import Aboutusfirstpart from './Pages/Hamim-Regwan/Aboutus1stpart/Aboutusfirstpart'


const App = () => {
  return (
      <div>
          {/* <Navbar /> */}
          {/* <Btn>Call us</Btn> */}
          <Navbar />

          <Aboutusfirstpart/>
          <Aboutuslastpart/>
          {/* <Footer/> */}
    </div>
  )
}

export default App