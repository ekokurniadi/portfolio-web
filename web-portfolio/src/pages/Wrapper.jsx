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
        <>
            <Navbar />
            <Hero />
            <section id="tentang">
                <Tagline text="Tentang Saya" />
            </section>
            <Line />
            <section id="portfolio">
                <Portfolio />
            </section>
            <Line />
            <section id="kemampuan" className="container">
                <Tagl text="Kemampuan"/>
                <Kemampuan />
            </section>
            <section id="kontak">
                <Line />
                <Tagl text="Kontak" />
                <Contact />
            </section>
            <Footer />
        </>
    )
}