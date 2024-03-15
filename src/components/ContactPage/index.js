import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { useForm} from '@formspree/react';

import './index.css'

const ContactPage=()=>{
    const [state, handleSubmit] = useForm("xeqyzdpq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return(
        <div className='contact-container'>
            <h1 className='contact-heading'>Contact <span className='hightlight-heading'>Me</span></h1>
            <div className="section-two">
                <div className='work-info'>
                    <h2>Let’s Work Together</h2>
                    <p className='work'>I'm passionate about leveraging my skills and experience to help companies create engaging digital experiences that drive results. Let's collaborate to bring your vision to life!</p>
                    <p className='contact-email'><MdOutlineEmail className="icon-sub"/>contact@gmail.com</p>
                    <p className='contact-number'><FiPhoneCall className="icon-sub"/>0123456789</p>
                    <form className='contact-info mobile-device-contact-info' onSubmit={handleSubmit}>
                        <input type="text" className='input-section-1' placeholder='Name' name="name" />
                        <input type="email" className='input-section-1' placeholder='Email' name="email" />
                        <input type="text" className='input-section-1' placeholder='Subject' name="subject" />
                        <textarea placeholder='Message' rows="4" cols="33" name="message"></textarea>
                        <button type="submit" className="submit-btn" disabled={state.submitting}>Submit</button>
                    </form>
                    <div className='images-conatct-section'>
                        <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710138862/Linkedin_dkz0sm.png" alt="conatct" className='reachoutImg'/>
                        <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710138930/Whatsapp_ditr5z.png" alt="conatct" className='reachoutImg'/>
                        <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710138946/Instagram_xpo3wx.png" alt="conatct" className='reachoutImg'/>
                    </div>
                </div>
                <form className='contact-info mobile-device' onSubmit={handleSubmit}>
                    <input type="text" className='input-section-1' placeholder='Name' name="name" />
                    <input type="email" className='input-section-1' placeholder='Email' name="email" />
                    <input type="text" className='input-section-1' placeholder='Subject' name="subject" />
                    <textarea placeholder='Message' rows="4" cols="50" name="message"></textarea>
                    <button type="submit" className="submit-btn" disabled={state.submitting}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage