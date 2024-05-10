import brain from '../../public/images/icon_brain_circuit.png';
import key from '../../public/images/icon_key.png';
import dataArea from '../../public/images/icon_data_area.png';
import trending from '../../public/images/icon_arrow_trending_lines.png';



export const Services=()=> {
  return (
    <div className="services" id="services">
        <div className="servicesText">
          <p className="title3">The benefits of MET</p>
          <p className="description3">Discover the advantages of MET: expertise in electromechanical engineering, advanced training and recognized certifications. Our project analysis and design services rely on cutting-edge software to ensure the success of your projects.</p>
        </div>
        <div className="servicesValue">
          <div className="leftImg">
              <div>
                <img src={brain} alt="" />
                <p className='serviceTitle'>Tutorat</p>
                <p className='serviceDescription'>MET offers tutoring sessions to help you master electromechanical software and technologies. You will receive personalized coaching to improve your skills and knowledge of tools such as AUTOCAD, SOLIDWORKS and MPLAB.</p>
              </div>
              <div>
              <img src={key} alt="" />
                <p className='serviceTitle'>CERTIFICATIONS</p>
                <p className='serviceDescription'>Obtain recognized certifications in the field of electromechanics. MET offers training programs that prepare you for certification exams, proving your expertise and building your professional credibility.</p>
              </div>
          </div>
          <div className="rightImg">
              <div>
              <img src={trending} alt="" />
                <p className='serviceTitle'>Project analytics</p>
                <p className='serviceDescription'>MET excels in the design of electromechanical projects, combining creativity and technical expertise. Through the use of advanced software such as AUTOMATION STUDIO, TIA PORTAL and PROTEUS, MET creates efficient, functional designs tailored to your specific requirements.</p>
              </div>
              <div>
              <img src={dataArea} alt="" />
                <p className='serviceTitle'>Projects designs</p>
                <p className='serviceDescription'>MET supports you in the detailed analysis of your electromechanical projects. This includes the study of needs, feasibility, energy efficiency, as well as the identification of the most suitable resources and solutions.</p>
              </div>
          </div>
        </div>
    </div>
  )
}
