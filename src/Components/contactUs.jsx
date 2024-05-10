/* eslint-disable react/prop-types */
import mail from '../../public/images/icon_mail.png'
import phone from '../../public/images/yellowPhone.png'
import location from '../../public/images/yellowLocalisation.png'



export const Contact=()=> {
    return (
        <div className='Block7' id="contact">
            <div className="block7Text">
                <div className="GroupeTitre">
                    <p className="titre">
                    Contact information
                    </p>
                    <div style={{width:'120px',backgroundColor:"#FDAD15",height:"5px",position:"relative",bottom:"10px"}}></div>
                    <p className="sousTitre">
                    Fill up the form and our Team will get back <br/>to you with 25 hours.
                    </p>
                </div><br/>
                 <p><img src={mail} alt="" /> &nbsp;<a className='metDomain'>met@ajel-osi.com</a></p>
                 <p><img src={phone} alt="" /> &nbsp; +237 6 81 20 69 24</p>
                 <p><img src={location} alt="" /> &nbsp; MAKEPE LOGPOM ANCIEN ENEO VENANT </p>
            </div>
            <div className="block7Form">
                <form method="post">
                    <div className="input">
                        <div className="nameEmail">
                            <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text"  id="name"/>
                            </div>
                            <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" />
                            </div>
                            
                        </div><br/>
                        <div className="themeMessage">
                            <label htmlFor="theme">Theme</label>
                            <input type="text" id="theme" /><br/>
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message"/>
                        </div>
                    </div>
                    <button>
                        Send
                    </button>
                </form>
            </div>


        </div>
    )
}

