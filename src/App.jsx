import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Components/Navbar';
import RootLayout from './RootLayout';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // { index: true, Component:  },
      // { path: "shop-now", Component: ShopNow },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App