import React, { Fragment } from "react";
import './styles.css';
import { useEffect, useState } from "react";
import ScrollspyNav from 'react-scrollspy-nav'
import avatar from '../assets/avatars.png'
export const Navbar = () => {
    const [navBackground, setNavBackground] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
   
    return (
        <Fragment>
            <section className={navBackground == true ? 'navigation active' : 'navigation'}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a href="/" className="navbar-brand align-items-center" style={{display:'flex',flexGrow:'10'}}>
                            <img src={avatar} alt="" width="50px"/>
                            eko<span className="kurniadi">kurniadi</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars" style={navBackground == true ? { color: 'white' } : { color: '#2880ce' }}></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                            <ScrollspyNav scrollTargetIds={['tentang', 'portfolio', 'kemampuan', 'kontak']} currentClassName="is-current" style={{marginLeft:'auto !important'}}>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item li" >
                                        <a href="/" className="nav-link">Beranda</a>
                                    </li>
                                    <li className="nav-item li">
                                        <a href="#tentang" className="nav-link">Tentang Saya</a>
                                    </li>
                                    <li className="nav-item li">
                                        <a href="#portfolio" className="nav-link">Portfolio</a>
                                    </li>
                                    <li className="nav-item li">
                                        <a href="#kemampuan" className="nav-link">Kemampuan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#kontak" className="nav-link button">Kontak</a>
                                    </li>
                                </ul>
                            </ScrollspyNav>
                        </div>
                    </div>
                </nav>
            </section>

           

        </Fragment>
    );
}