import logo1 from '/images/logo_1.png'
import logo3 from '/images/logo_3.png'
import logo4 from '/images/logo_4.png'
import logo5 from '/images/logo_5.png'
import logo6 from '/images/logo_6.png'
import logo7 from '/images/logo_7.png'



export const Stat=()=> {
  return (
    <div className="statistics">
       <p className="title2">We provide services that guarantee your success</p>
        <div className='statDiv'>
            <div className="stats">
                    <div className="statValue">
                        <p>10+</p>
                        <p>Project executed</p>
                    </div>
                    <div className="statValue">
                        <p style={{marginRight: '60px'}}>03</p>
                        <p>Satisfied customers</p>
                    </div>
                    <div className="statValue">
                        <p style={{marginRight: '60px'}}>03</p>
                        <p>Project management</p>
                    </div>   
            </div>
            <div className="description2">
                <p>We offer services that guarantee your success. With our expertise in tutoring, certification, analysis and project design, you benefit from personalized support to realize your electromechanical ambitions.</p>
            </div>
        </div>
        <div className="partnerLogo">
            <img src={logo1} alt="logo" />
            <img src={logo7} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
            <img src={logo5} alt="logo" />
            <img src={logo6} alt="logo" />
            
        </div>
    </div>
  )
}
