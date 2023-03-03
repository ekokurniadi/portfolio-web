import React, { Fragment, useEffect } from "react";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Tagline } from "./Tagline";
import { Line } from "./Line";
import { Portfolio } from "./Portfolio";
import { Tagl } from "./Tag";
import AOS from "aos";
import "aos/dist/aos.css";
import Kemampuan from "./Kemampuan";
import { Contact } from "./Contact";
import { MobileNavigation } from "./MobileNavigation";
import { RiwayatPekerjaan } from "./RiwayatPekerjaan";
export const Wrapper = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <section id="tentang">
        <Tagline text="Tentang Saya" />
      </section>
      <section id="portfolio">
        <Line />
        <Portfolio />
      </section>
      <section id="pengalaman">
        <Line />
        <div className="container">
          <Tagl text="Pengalaman Kerja" />
          <RiwayatPekerjaan />
        </div>
      </section>
      <section id="kemampuan">
        <Line />
        <div className="container">
          <Tagl text="Kemampuan" />
          <Kemampuan />
        </div>
      </section>
      <section id="kontak">
        <Line />
        <Tagl text="Kontak" />
        <Contact />
      </section>
      <Footer />
      <MobileNavigation />
    </>
  );
};
