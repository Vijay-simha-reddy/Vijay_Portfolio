import './index.css'

const AboutPage =()=>(
    <div className='about-page-container' href="aboutLink">
        <div className='about-profile-about-section'>
            <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710147686/images_tjkfgz.png" alt="profile" className='about-profileImage'/>
        </div>
        <div className='about-data'>
            <h1 className='about-options-heading'>About <span className='about-options-highlight'>Me</span></h1>
            <h3 className='about-sub-heading'>MERN Stack Developer!</h3>
            <p className='about-info'>I am a skilled web designer with over 1 years of experience in the industry. My passion litram creating captivating website designs and implementing them through frontend development take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience (UX) and user interface (UI) principles. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver
             a unique online presence that aligns with their brand identity.</p>
        </div>
    </div>
)

export default AboutPage