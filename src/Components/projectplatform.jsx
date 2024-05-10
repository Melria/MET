import { Link } from "react-scroll"

export const ProjectPlatform=()=> {
  return (
    <div className="projectPlatform">
        <div className="title0"><p>The <span style={{color:'#FDAD15'}}>latest </span>Electro - mechanical projet platform</p></div>
        <div className="description0">
            <p>Discover the latest electromechanical project platform! With advanced software such as AUTOCAD, SOLIDWORKS and MPLAB, complete innovative electromechanical projects with ease. Benefit from expert support in tutoring, certification, analysis and project design. With MET, transform your ideas into concrete and efficient achievements.</p>
            <button className="projectButton"><Link to="contact">Contacts</Link></button>
        </div>
    </div>
  )
}
