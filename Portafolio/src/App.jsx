/*import { useState } from 'react'
*/

import Navbar from './components/Navbar.jsx'
import AboutMe_Seccion from './components/AboutMe.jsx'

import './App.css'

function App() {
 

  return (
    <>
    
     
       <Navbar />
       <div className='Secciones flex flex-column justify-center '>
       <AboutMe_Seccion />
       </div>
    </>

 
  )
}

export default App
