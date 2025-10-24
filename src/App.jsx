import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Components/Navbar';
import RootLayout from './RootLayout';
import Home from './Pages/Litan/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      // { path: "shop-now", Component: ShopN },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;