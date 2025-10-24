import React from 'react'
import Navbar from './Components/Navbar'
import Btn from './Components/Btn'
import Footer from './Components/Footer'
import Riat from './Pages/Riat/Riat.jsx'
const App = () => {
  return (
      <div>
          <Navbar />
          <Riat/> 
          <Footer/>
    </div>
  )
}

export default App