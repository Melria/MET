import data from '../data/services.json'

export const Testimonials=()=> {
  return (
    <div className="testimonials">
      <h1>TESTIMONIALS</h1>
      <div className='cards'>
          {data.map((data) => (
            <div className="cardBox" key={data.index}>
              <div className="id"> 
                <div className='testimonialImg' style={{position:'relative',left:'25px'}}>
                    <img
                  src={data.image}
                  alt={data.name}
                  className="card-image"
                /></div>
                <div className='testimonialId'>
                    <p style={{fontWeight: 500, marginTop:'15px'}}>{data.name}</p>
                    <p style={{fontSize:'14px',position:'relative',bottom:'12px',color:'#9497A1'}}>{data.post}</p>
                </div>
              </div>
              <div className='description'>
                  {data.description}
                </div>
            </div>
          ))}
      </div>
    </div>
  )
}
