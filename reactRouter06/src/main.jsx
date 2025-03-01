import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// // import './index.css'
import Layout from './Layout'
import { RouterProvider, createBrowserRouter, createRoutesFromElement } from 'react-router-dom'
// // import { Children } from 'react'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import { Route } from 'react-router-dom'


// // import { createBrowserHistory } from 'history'
// const import { js } from '@eslint/js';
// const rost = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     Children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       }
//     ]
//   }
// ])
const rost = createBrowserRouter(
  createRoutesFromElement(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rost} ></RouterProvider>
  </StrictMode>,
)
