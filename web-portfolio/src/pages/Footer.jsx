import React from "react";
import './styles.css';
import { useEffect, useState } from "react";
import up from '../assets/up.png';
import avatar from '../assets/avatars.png'
import ScrollspyNav from 'react-scrollspy-nav'
export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 1800) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    const toChat = () => {
        window.open("https://wa.me/+62895604730750?text=Hallo, saya tertarik dengan profil anda", "_blank");
    }
    return (
        <section>
            <footer className="footers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 justify-content-center py-2 first">
                            <a href="/" className="footer-brand align-items-center" style={{ display: 'flex', flexGrow: '10' }}>
                                <img src={avatar} alt="" width="50px" />
                                eko<span className="kurniadi">kurniadi</span></a>

                            <ScrollspyNav scrollTargetIds={['tentang', 'portfolio', 'kemampuan', 'kontak']} currentClassName="is-current">
                                <ul style={{ listStyleType: 'none', color: 'white', marginLeft: '10px' }}>
                                    <li>
                                        <a href="/">Beranda</a>
                                    </li>
                                    <li>
                                        <a href="/">Tentang Saya</a>
                                    </li>
                                    <li>
                                        <a href="/">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="/">Kemampuan</a>
                                    </li>
                                    <li>
                                        <a href="/">Kontak</a>
                                    </li>
                                </ul>
                            </ScrollspyNav>
                        </div>
                        <div className="col-md-4 justify-content-center py-2 first">
                            <h4>Tentang</h4>
                            <div className="set2"></div>
                            <div>
                                <p>
                                    <span>
                                        Nama saya Eko Kurniadi, dan saya tinggal di Jambi.
                                        Saya bekerja remote pada beberapa Project untuk banyak client di Indonesia
                                    </span>
                                </p>
                            </div>
                            <div>
                                <i className="fa fa-map"></i>
                                &nbsp;Alamat
                                <p>Perumahan Aura Residence, Tangkit Lama, RT. 011/004. Kel. Tangkit, Kec. Sungai Gelam, Kabupaten Muaro Jambi</p>
                            </div>
                            <div>
                                <i className="fa fa-phone"></i>
                                &nbsp;Telp
                                <p>0895604730750 </p>

                            </div>
                            <div>
                                <i className="fab fa-whatsapp"></i>
                                &nbsp;WhatsApp
                                <p>0895604730750 </p>
                            </div>
                            <div>
                                <i className="fa fa-envelope"></i>
                                &nbsp;Email
                                <p>ekokurniadi.02@gmail.com </p>
                            </div>
                        </div>
                        <div className="col-md-4 justify-content-center py-2 mt-4">
                            <h4>Media Social</h4>
                            <div className="set2"></div>
                            <p>
                                <a href="https://facebook.com/eko.exl/" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                                    <i className="fab fa-facebook"></i>  Facebook <br /><p>Eko Kurniadi</p> </a>
                            </p>
                            <p>
                                <a href="https://www.instagram.com/ekokurniadi1/" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                                    <i className="fab fa-instagram"></i> Instagram <p>@ekokurniadi1</p> </a>
                            </p>
                            <p>
                                <a href="github.com/ekokurniadi/" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                                    <i className="fab fa-github"></i> github <p>ekokurniadi</p> </a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center mt-3">
                            <p style={{color:'white'}}>Copyright &copy; 2021 All right reserved. Made with <i className="fa fa-heart" style={{color:'red'}}></i> by Eko Kurniadi</p> 
                        </div>
                    </div>
                </div>
                <button className="btn-floating" onClick={toChat}>
                    <span>
                        <div className="chatImgWrapper mr-2">
                            <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/57d0f05a.svg" alt="" />
                        </div>
                        Chat
                    </span>
                </button>
                <div className="scroll-to-top">
                    {isVisible &&
                        <div onClick={scrollToTop}>
                            <img src={up} alt='Go to top' className="img-fluid" width="50px" />
                        </div>}
                </div>
            </footer>
        </section>
    );
}