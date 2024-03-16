import {Component} from 'react'
import './index.css'

class HomePage extends Component {
    state = {
      text: '',
      isAdding: true,
      developerType: 'Mern Stack Developer',
        activeLink: 'home'
    }
  
    handleClick = (link) => {
      this.setState({ activeLink: link });
    };
  
    componentDidMount() {
      this.interval = setInterval(() => {
        const { text, isAdding, developerType } = this.state;
        if (isAdding) {
          if (text.length < developerType.length) {
            this.setState(prevState => ({
              text: prevState.text + developerType[text.length]
            }));
          } else {
            this.setState({ isAdding: false });
          }
        } else if (text.length > 0) {
          this.setState(prevState => ({
            text: prevState.text.slice(0, -1)
          }));
        } else {
          this.setState(prevState => {
            let nextDeveloperType;
            if (prevState.developerType === 'Mern Stack Developer') {
              nextDeveloperType = 'Frontend Developer';
            } else if (prevState.developerType === 'Frontend Developer') {
              nextDeveloperType = 'Backend Developer';
            } else {
              nextDeveloperType = 'Mern Stack Developer';
            }
            return {
              isAdding: true,
              developerType: nextDeveloperType
            };
          });
        }
      }, 100);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  

    render(){
        const { text } = this.state;
        return(
            <div className='home-page-container'>
                <div className='home-information-section'>
                    <div className='introduction-section'>
                        <h3 className='third-heading-info'>Hello, It's Me</h3>
                        <h1 className='first-heading-info'>Vijay Simha Reddy Dacharam</h1>
                        <h3 className='third-heading-info'>And I'm a<span className='highlight-domain'>{text}</span></h3>
                        <p className='summary-info'>I'm a web Designer with extensive experience for over 1 years. expertise is to create and 
                        website design, Frontend design, and many more....</p>
                        <div className='image-section mobile-image-section profile-pic-section'>
                              <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710133452/images-removebg-preview_bgsp61.png" alt="profile" className="home-profile-img"/>
                        </div>
                        <div className='more-about-info'>
                            <button type="button" className='more-btn'>More</button>
                            <button type="button" className='icon-btn'><img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710138862/Linkedin_dkz0sm.png" alt="linkedin" className='icon'/></button>
                            <button type="button" className='icon-btn'><img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710138946/Instagram_xpo3wx.png" alt="instagram" className='icon'/></button>
                            <button type="button" className='icon-btn'><img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710138930/Whatsapp_ditr5z.png" alt="github" className='icon'/></button>
                        </div>
                    </div>
                    <div className='image-section device-version profile-pic-section'>
                    
                            <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710133452/images-removebg-preview_bgsp61.png" alt="profile" className="home-profile-img"/>
  
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage