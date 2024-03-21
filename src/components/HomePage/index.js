import {Component} from 'react'
import { FiDownload } from "react-icons/fi";
import './index.css'

class HomePage extends Component {
    state = {
      text: '',
      isAdding: true,
      developerType: 'Mern Stack Developer',
        activeLink: 'home',
        file:null,
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
                        <div className='image-section mobile-image-section profile-pic-section'>
                              <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710969550/Seriously___-removebg-preview_keylsn.png" alt="profile" className="home-profile-img"/>
                        </div>
                        <p className='summary-info'>I'm a Mern Stack developer specialised in frontend and backend development for scalable web apps.I have made a variety of Mern Stack Applications and many more....</p>
                       
                        <div className='download-block'>
                        <a className="download-link" href="VijaySimhaReddyDacharam.pdf" download="VijaySimhaReddyDacharam.pdf">My Resume<FiDownload className='download-icon'/></a>
                        </div>
                    </div>
                    <div className='image-section device-version profile-pic-section'>
                      <img src="https://res.cloudinary.com/dx10xo1p6/image/upload/v1710969550/Seriously___-removebg-preview_keylsn.png" alt="profile" className="home-profile-img"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage