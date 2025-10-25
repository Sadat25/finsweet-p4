import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Litan/Home/Home';
import BlogPage from './Pages/Jahangir/blogPage';
import AboutusMain from './Pages/Hamim-Regwan/AboutusMain'

import Work from './Pages/Ahnaf/Work';
import Contact from './Components/Contact';
import PrivacyPolicy from './Components/PrivacyPolicy';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: BlogPage },
      { path: "about", Component: AboutusMain },
      { path: "work", Component: Work},
      { path: "contact", Component: Contact},
      { path: "policy", Component: PrivacyPolicy},
      
      
      
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;