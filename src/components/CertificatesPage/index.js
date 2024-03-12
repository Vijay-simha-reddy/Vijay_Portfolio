import React from 'react';
import HackerRank from '../../Images/Software Engineer Intern.png';
import Frontend from '../../Images/Frontend.png';
import Python from '../../Images/Python.png';
import MernStack from '../../Images/React.png';
import { Chrono } from 'react-chrono';

import './index.css';

const certificates = [
  { id: 1, certificateCompany: "HackerRank", certificateImg: HackerRank, certificateName: "Software Engineer Intern" },
  { id: 2, certificateCompany: "HackerRank", certificateImg: Frontend, certificateName: "Frontend Developer (React)" },
  { id: 3, certificateCompany: "HackerRank", certificateImg: Python, certificateName: "Python" },
  { id: 14, certificateCompany: "NxtWave", certificateImg: MernStack, certificateName: "Mern Stack Developer" }
];

const CertificatesPage = () => {
  return (
    <div className='home-page-container'>
      <h1 className='certificate-main-heading'>My <span className='heading-highlight'>Certifications</span></h1>
      <div className="chrono-container">
        <Chrono
          theme={{
            primary:'#ef1111',
            secondary: '#ffffff',
            titleColorActive: '#262626',
            titleColor:'#ffffff',
            titleBgColor:'#ffffff'
          }}

          fontSizes={{
            title:'18px'
          }
          }
          showControlPanel={true}
          slideShow={false}
          allowDynamicUpdate={false}
          mode="VERTICAL_ALTERNATING"
          items={certificates.map(certificate => ({ title: certificate.certificateCompany }))}
        >
          {certificates.map(certificate => (
            <div className="chrono-container-card" key={certificate.id}>
                <div className='certificate-name-container'>
                    <p className='certificateName'>{certificate.certificateName}</p>
                </div>
                <div className='certificate-Img-container'>
                    <img src={certificate.certificateImg} alt="vijay" className='chrono-img'/>
                </div>
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  );
};

export default CertificatesPage;
