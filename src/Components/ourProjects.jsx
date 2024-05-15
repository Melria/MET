import data from '../data/projects.json'
import { Link } from "react-router-dom"


export const Projects=()=> {
  return (
    <div className="projects" id="projects">
      <h1>Ours Projects</h1>
      <div className='cards_P'>
          {data.map((data) => (
            <div className="cardBox_P" key={data.index}>
             
                <div className='testimonialImg pro' style={{position:'relative',left:'25px'}}>
                    <img
                  src={data.image}
                  alt={data.name}
                  className="card-image_P"
                   />
                    
                  <p style={{position:'relative', top:'10px',color:'#9497A1'}}>{data.date}</p>
                  <p style={{fontWeight: 500, fontSize:'24px'}}>{data.title}</p>
                  <p style={{color:'#9497A1'}} className='descProject'>{data.description}</p>
                  <p style={{cursor:'pointer', color:'#FDAD15'}}><Link  to='/details' className="b">Read more –›</Link></p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
