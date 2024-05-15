import { useState } from 'react';
//import sgMail from '@sendgrid/mail';



import mail from '/images/icon_mail.png'
import phone from '/images/yellowPhone.png'
import location from '/images/yellowLocalisation.png'



export const Contact=()=> {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [theme, setTheme] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const formData = {
            name,
            email,
            theme,
            message
        };    

        fetch('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json)
        .then(data => {
            if (data.success) {
                alert('Email sent successfully!');
            } else {
                alert('Email sent successfully!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
   

    };

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
                <form method="post" onSubmit={handleSubmit}>
                    <div className="input">
                        <div className="nameEmail">
                            <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text"  id="name" value={name}  onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="" id="email" value={email}  onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            
                        </div><br/>
                        <div className="themeMessage">
                            <label htmlFor="theme">Theme</label>
                            <input type="text" id="theme" value={theme}  onChange={(event) => setTheme(event.target.value)} /><br/>
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
                        </div>
                    </div>
                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

