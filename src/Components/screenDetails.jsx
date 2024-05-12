import { Link } from "react-router-dom"

export const ScreenDetails =()=> {

  return (
    <div className="header_d" id="header_d">
        <div className="filter_p">
             <p className="met">MET</p>
             <p className="headTitle_p">ElectroMechanical projects</p>
             <p className="headText_p"><Link to='/' className="home">Home</Link> | Electromechanical projet</p>
        </div>  
        
    </div>
  )
}
