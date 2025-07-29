import './App.css'
import Gallery from "./components/Gallery/Gallery"
import Home from "./components/Home/Home"
import Parent from './components/Parent/Parent'
import Layout from "./components/Layout/Layout"
import Send from "./components/Send/Send"
import Hero from "./components/Hero/Hero"
import NotFound from "./components/NotFound/NotFound"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      { path: '/gallery', element: <Gallery/>, children:[
        {path: 'About', element:<About/>},
        {path: 'Footer', element: <Footer/>},
      ] },
      {path: '/send', element: <Send/>},
      {path: '/hero', element: <Hero/>},
      {path: '/parent', element: <Parent/>},
      {path: '*', element: <NotFound/>},
    ]},
  ])

  return (
     <>
         <RouterProvider router={routes} />
     </>
  )
}

export default App
