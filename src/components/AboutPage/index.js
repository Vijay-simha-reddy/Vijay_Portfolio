import './index.css'

const AboutPage =()=>(
    <div className='about-page-container mobile-version-about-page-container' href="aboutLink">
        <div className='about-profile-about-section'>
            <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710970706/show_ucyvog.png" alt="profile" className='about-profileImage'/>
        </div>
        <div className='about-data'>
            <h1 className='about-options-heading'>About <span className='about-options-highlight'>Me</span></h1>
            <h3 className='about-sub-heading'>MERN Stack Developer!</h3>
            <p className='about-info'>As a MERN Stack Developer, I've honed my skills in HTML, CSS, Bootstrap, JavaScript, Node.js, Express, SQL, React, MongoDB, and Python, and have applied them to create stunning and user-friendly web applications. My passion for crafting captivating digital experiences drives me to continually seek improvement and innovation. I'm eager to contribute my expertise to building exceptional digital solutions and am open to entry-level opportunities that offer hands-on experience and 
            support my professional growth. Let's connect and discuss how we can collaborate to create remarkable web applications together.</p>
        </div>
    </div>
)

export default AboutPage