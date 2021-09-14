import React, { Fragment } from "react";
import { Card } from "./Card";
import './styles.css';
import { Tagl } from "./Tag";
import pln from '../assets/card1.jpg'
import maw from '../assets/card2.jpg'
import moveon from '../assets/card3.jpg'
import survey from '../assets/card4.jpg'
import fiskal from '../assets/card5.jpg'
import quran from '../assets/quran.jpg'


export const Portfolio = () => {

    return (
        <Fragment>
            <Tagl text="Porfolio Saya" />
            <section className="portfolio" >
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card bahasa="Flutter" image={pln} text="Aplikasi Teknisi UP3 PLN Banten" desc="Aplikasi Berbasis Android untuk melakukan survey lapangan teknisi kepada customer yang meteran listrik nya mengalami kendala maupun yang akan dilakukan perawatan" />
                        </div>
                        <div className="col-md-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card bahasa="Flutter" image={maw} text="Aplikasi Sales Tools Multiandalan Wisesa" desc="Aplikasi Android Untuk memudahkan sales eksekutif dalam melakukan pekerjaan sehari-hari, mulai dari prospecting, transaction dan yang lain-lain" />
                        </div>
                        <div className="col-md-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card bahasa="Flutter" image={moveon} text="Aplikasi Move On" desc="Aplikasi Android sebagai mitra driver mobil pickup (Bak terbuka) untuk mendapatkan order dari customer yang membutuhkan jasa pengangkutan barang pindahan, maupun barang yang lainnya" />
                        </div>
                        <div className="col-md-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card bahasa="Vue JS" image={survey} text="Website Survey Sehat" desc="Website Survey Kesehatan online dimana user akan mendapatkan poin setiap kali mengikuti survey dan dapat menukarkan poin tersebut dengan hadiah-hadiah menarik" />
                        </div>
                        <div className="col-md-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card bahasa="Php Codeigniter" image={fiskal} text="Website Fiskal Samsat Jambi" desc="Website yang digunakan untuk melakukan pembuatan surat Fiskal pada Samsat Jambi" />
                        </div>
                        <div className="col-md-4" data-aos="fade-up"
                            data-aos-duration="1000">
                            <Card bahasa="React JS" image={quran} text="Website Al-qur'an Digital" desc="Website Al-qur'an Digital yang berisikan surah dan ayat dengan huruf arab dan terjemahan serta dilengkapi dengan audio" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex mt-5 mb-3 justify-content-center">
                            <button className="btn btn-outline-primary" type="button">Load More</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
