import './App.css'

import { ScreenDetails } from './Components/screenDetails'
import { BodyDetails } from './Components/bodyDetails'
import { Footer } from './Components/footer'


export default function Details() {
  return (
    <div className='details' id="details">
         <ScreenDetails />
         <BodyDetails />
         <Footer/>  
    </div>
  )
}
