import React, { useState, useEffect } from 'react';
import '../src/Css/Navbar.css';

const CustomNavbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={visible ? 'navbar-visible' : 'navbar-hidden'}>
            <div className="navbar-container">
                <div className="nav-brand">
                    <img
                        src="https://hidoc-files.sgp1.digitaloceanspaces.com/hidoc-client-files/1703756420122.jpg"
                        className="nav-logo-img"
                        alt="logo"
                        title="Homepage"
                    />
                </div>
                <div className="nav-links">
                    <a href="#journal">Journal</a>
                    <a href="#articles">Articles</a>
                    <a href="#news">News</a>
                    <a href="#quizzes">Quizzes</a>
                    <a href="#webinars">Webinars</a>
                    <a href="#conferences">Conferences</a>
                    <a href="#about">About Us</a>
                </div>
                <div className="nav-actions">
                    <button className="join-button" onClick={() => window.location.href = 'https://kolfactory.hidocdr.com/'}>
                        Join as KOL
                    </button>
                    <img
                            className="nav-dropdown-img-globe"
                            src="https://sgp1.digitaloceanspaces.com/hidoc-files/hidoc-client-files/1649416025041.png"
                            alt="hidoc-global"
                            title="hidoc-global"
                        />
                    <div className="dropdown-container">
                        <button className="dropdown-toggle">Hidoc Dr. (Global)</button>
                
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomNavbar;
