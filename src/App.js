import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './utilites/routes'

import 'react-toastify/dist/ReactToastify.css';



function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App