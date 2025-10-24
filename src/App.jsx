import React from 'react'
import Navbar from './Components/Navbar'
import Btn from './Components/Btn'
import Footer from './Components/Footer'
import Work from './Pages/Motasin/components/pages/Work'

const App = () => {
  return (
      <div>
          <Navbar />
          {/* <Btn>Call us</Btn> */}
          <Work/>
          <Footer/>
    </div>
  )
}

export default App