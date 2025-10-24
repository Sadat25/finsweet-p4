import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Litan/Home/Home';
import BlogPage from './Pages/Jahangir/blogPage';
import AboutusMain from './Pages/Hamim-Regwan/AboutusMain'


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: BlogPage },
      { path: "about", Component: AboutusMain },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;