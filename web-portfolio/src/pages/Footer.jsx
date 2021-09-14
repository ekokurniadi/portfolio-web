import React from "react";
import './styles.css';
import { useEffect, useState } from "react";
import up from '../assets/up.png';

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