import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Litan/Home/Home';
import BlogPage from './Pages/Jahangir/blogPage';
import AboutusMain from './Pages/Hamim-Regwan/AboutusMain';
import Work from './Pages/Motasin/Work';
import Contact from './Pages/Ahnaf/ContuctUs';
import Riat from './Pages/Riat/Riat';
import { Policy } from './Pages/Ahnaf/Policy';
import Readmore from './Pages/Antara/Readmore';
import Features from './Pages/Sumon-Kibria/Features';
import rafin from './Pages/Tawsif/rafin';



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
      { path: "pricing", Component: Riat},
      { path: "policy", Component: Policy},
      { path: "read-blog", Component: Readmore},
      { path: "features", Component: Features},
      { path: "read", Component: rafin},
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;