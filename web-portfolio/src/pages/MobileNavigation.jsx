import React, { useEffect, useState } from "react";

import './styles.css';
import home from '../assets/home.png';
import about from '../assets/about.png';
import code from '../assets/code.png';
import contact from '../assets/contact.png';
import ScrollspyNav from 'react-scrollspy-nav'


export const MobileNavigation = () => {
    var index = 0;
    const [activeDiv, setActiveDiv] = useState(index);
    useEffect(() => {
        setActiveDiv(0)
    }, []);

    const setIndex = (index) => {
        setActiveDiv(index)
    }

    return (
        <section className="mobile-navigation">
            <div className="container">
                    <ScrollspyNav scrollTargetIds={['tentang', 'portfolio', 'kemampuan', 'kontak']}>
                <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-2">
                            <a href="/" >
                                <img src={home} alt="" width="25px" className={activeDiv == 0 ? "active fade-a bounce bounce-7" : ""} />
                            </a>
                            <div className={activeDiv == 0 ? "active fade-a" : ""}>

                            </div>
                        </div>
                        <div className="col-2 justify-content-center">
                            <a href="#tentang" onClick={() => setIndex(1)}>
                                <img src={about} alt="" width="25px" className={activeDiv == 1 ? "active fade-a bounce bounce-7" : ""} />
                            </a>
                            <div className={activeDiv == 1 ? "active fade-a" : ""}>

                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center  align-items-center center-button" style={{cursor:'pointer'}}>
                            <a href="#portfolio" className="icon-home" onClick={() => setIndex(4)}>
                                <i style={{fontSize:'20px'}} className={activeDiv == 4 ? "fa fa-briefcase text-white bounce bounce-7" : "fa fa-briefcase text-white"}></i>
                            </a>
                        </div>
                        <div className="col-2 justify-content-center">
                            <a href="#kemampuan" onClick={() => setIndex(2)}>
                                <img src={code} alt="" width="25px" className={activeDiv == 2 ? "active fade-a bounce bounce-7" : ""} />
                            </a>
                            <div className={activeDiv == 2 ? "active fade-a" : ""}>

                            </div>
                        </div>
                        <div className="col-2 justify-content-center">
                            <a href="#kontak" onClick={() => setIndex(3)}>
                                <img src={contact} alt="" width="30px" className={activeDiv == 3 ? "active fade-a bounce bounce-7" : ""} />
                            </a>
                            <div className={activeDiv == 3 ? "active fade-a" : ""} >

                            </div>
                        </div>
                </div>
                    </ScrollspyNav>


            </div>
        </section>
    );
}