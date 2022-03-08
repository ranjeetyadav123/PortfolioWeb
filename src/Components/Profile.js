import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import Typical from 'react-typical'
import "../Style/Profile.css"


export default function () {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                       <div className='colz-icon' >
                        <a href='https://www.linkedin.com/in/ranjeet-yadav-ab083a1bb/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/ranjeetyadav123'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UC71sepdpjzm1Vrqog_-dbvg'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='https://www.instagram.com/r.j.__44_/'>
                            <i className='fa fa-instagram fa-stack-3x'></i>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100012499441391'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                       </div>
                    </div>
                    
                    <div className='profile-details-name'>
                        <span className='pramary-text'>
                            {""}
                            Hello, I'm <span className='highlighted'>Ranjeet</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                            "Pursuing IT Engineering 💻",
                                            1000,
                                            "Ethusiactic Web Dev 🤗",
                                            1000,
                                            "Front-End Developer 🌐",
                                            1000,
                                            "Fast Learner 🙎‍♂️",
                                            1000,
                                        ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Always ready to learn new things, Currently broadening my skills-HTML,CSS,Javascript,ReactJs.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>
                        <a href='../Data/Home/Resume-Ranjeet-Yadav' download='Ranjeet Yadav.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                        </a>                        
                   </div>
                </div>
                <div className='profile-picture'>
                  <div className='profile-picture-background'></div>     
                </div>
            </div>

        </div>
    )
}
