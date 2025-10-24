import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Litan/Home/Home';
import BlogPage from './Pages/Jahangir/blogPage';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: BlogPage },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;