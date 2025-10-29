import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from './Components/Footer'

const RootLayout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout