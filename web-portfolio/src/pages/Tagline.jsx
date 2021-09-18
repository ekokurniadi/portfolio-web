import React from "react";
import './styles.css';
import sq from '../assets/squiggle.png';

export const Tagline = (props) => {
    return (
        <section className="tagline mt-2" id="tentang">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div>
                            <h4>{props.text}</h4>
                            <div className="lines"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center mt-4">
                            <p style={{textAlign:'center'}}>Hello, Nama saya Eko Kurniadi, dan saya tinggal di Jambi. <br /> Saya bekerja remote pada beberapa Project untuk banyak client di Indonesia</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-end mt-5 mb-3">
                        <img src={sq} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}