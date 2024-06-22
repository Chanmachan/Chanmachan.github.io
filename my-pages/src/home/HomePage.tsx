import React from 'react';
import icon from '../static/icon.png'
import './HomePage.css'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="home-container">
            <div className="profile-section">
                <img src={icon} alt="togepi" className="profile-icon" />
                <div className="profile-info">
                    <h1>Chanmachan</h1>
                    <a href="https://github.com/Chanmachan" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <div className="button-container">
                        <button onClick={() => window.location.href='/works'}>My Works</button>
                        <button onClick={() => window.location.href='/about'}>About Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;