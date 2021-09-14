import React, { Fragment, useEffect } from "react";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Tagline } from "./Tagline";
import { Line } from "./Line";
import { Portfolio } from "./Portfolio";
import { Tagl } from "./Tag";
import AOS from 'aos';
import "aos/dist/aos.css";
import Kemampuan from "./Kemampuan";
import { Contact } from "./Contact";
export const Wrapper = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Tagline text="Tentang Saya" />
            <Line />
            <section id="portfolio">
                <Portfolio />
            </section>
            <Line />
            <Tagl text="Kemampuan" />
            <section className="container" >
                <Kemampuan />
            </section>
            <Line />
            <Tagl text="Kontak" />
            <section id="kontak">
                <Contact />
            </section>
            <Footer />
        </Fragment>
    )
}