import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import emailjs from '@emailjs/browser'

import './index.css'

const ContactPage=()=>{
    
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sentMsg, setSentMsg] = useState(false);
    const [errorStatus, setErrorStatus]= useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleSendAgain=()=>{
        setSentMsg(false)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const serviceId = "service_tl9nda9";
        const templateId = "template_hgac9zs";
        const publicKey ="IlWrnwV--MtSoAABs";

        const templateParams={
            from_name:name,
            from_subject:subject,
            from_email:email,
            message:message,
            to_name:'vijay simha reddy'
        }

        emailjs.send(serviceId,templateId,templateParams,publicKey)
        .then((response)=>{
            if (name !== "" && subject !== "" && email !== "" && message !== "") {
                console.log("successfully sent");
                setName('');
                setSubject('');
                setEmail('');
                setMessage("");
                setSentMsg(false);
                setErrorStatus(false)
            } else {
                setErrorMsg("Some input fields are empty");
                setErrorStatus(true)
            }
        })
        .catch((error)=>{
            setErrorMsg(error)
            setErrorStatus(true)
        })
    }

    return(
        <div className='contact-container'>
            <h1 className='contact-heading'>Contact <span className='hightlight-heading'>Me</span></h1>
            <div className="section-two">
                <div className='work-info'>
                    <h2>Let’s Work Together</h2>
                    <p className='work'>I'm passionate about leveraging my skills and experience to help companies create engaging digital experiences that drive results. Let's collaborate to bring your vision to life!</p>
                    <p className='contact-email'><MdOutlineEmail className="icon-sub"/>vijaysimha1007@gmail.com</p>
                    <p className='contact-number'><FiPhoneCall className="icon-sub"/>8184970731</p>
                    <div className='images-conatct-section'>
                        <a href="https://www.linkedin.com/in/vijay-simha-reddy007/" target="_blank"  className="btn-contact-link" ><img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710138862/Linkedin_dkz0sm.png" alt="conatct" className='reachoutImg'/></a>
                        <a href="https://github.com/Vijay-simha-reddy/" target="_blank" className="btn-contact-link" ><img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710963046/Jobspresso_elx1lr.jpg"  alt="conatct" className='reachoutImg github-icon'/></a>
                    </div>
                    {sentMsg?
                <div className="success-msg-container  mobile-device-contact-info">
                    <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710974868/success-removebg-preview_kdbrkh.png" alt="success" className="success-img"/>
                    <p className="success-para">Successfully Sent!</p>
                    <button type="button" className="btn-send-again" onClick={handleSendAgain}>Send Again</button>
                </div> :
                    <form className='contact-info mobile-device-contact-info' onSubmit={handleSubmit}>
                        <input type="text" className='input-section-1' placeholder='Name' name="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" className='input-section-1' placeholder='Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="text" className='input-section-1' placeholder='Subject' name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                        <textarea placeholder='Message' rows="4" cols="33" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button type="submit" className="submit-btn">Submit</button>
                        {errorStatus && <p className="error-msg">{`*${errorMsg}`}</p>}
                    </form>
}
                </div>
                {sentMsg?
                <div className="success-msg-container mobile-device">
                    <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710974868/success-removebg-preview_kdbrkh.png" alt="success" className="success-img"/>
                    <p className="success-para">Successfully Sent!</p>
                    <button type="button" className="btn-send-again" onClick={handleSendAgain}>Send Again</button>
                </div> :
                <form className='contact-info mobile-device' onSubmit={handleSubmit}>
                    <input type="text" className='input-section-1' placeholder='Name' name="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" className='input-section-1' placeholder='Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" className='input-section-1' placeholder='Subject' name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                    <textarea placeholder='Message' rows="4" cols="50" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button type="submit" className="submit-btn">Submit</button>
                    {errorStatus && <p className="error-msg">{`*${errorMsg}`}</p>}
                </form>
}
            </div>
        </div>
    )
}

export default ContactPage