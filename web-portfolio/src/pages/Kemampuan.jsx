import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'
import rnl from '../assets/react-no-logo.png';
import angular from '../assets/angular.png';
import vue from '../assets/vue.png';
import next from '../assets/next.png';
import flutter from '../assets/flutter.png';
import golang from '../assets/golang.png';
import android from '../assets/android.png';
import ci from '../assets/ci.png';

const Kemampuan = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="kemampuan " id="kemampuan">
                <Slider {...settings}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={rnl} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>React JS</h4>
                                    <span className="badge badge-danger">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={angular} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>Angular</h4>
                                    <span className="badge badge-danger">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={vue} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>Vue JS</h4>
                                    <span className="badge badge-danger">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={next} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>NextJS</h4>
                                    <span className="badge badge-danger">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                   
            </div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={ci} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>Codeigniter</h4>
                                    <span className="badge badge-danger">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={flutter} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>Flutter</h4>
                                    <span className="badge badge-danger">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={golang} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>Golang</h4>
                                    <span className="badge badge-danger">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="card">
                            <div className="image d-flex">
                                <img src={android} alt=""/>
                                <div className="text-wrap align-self-center">
                                    <h4>Android</h4>
                                    <span className="badge badge-danger">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                   
            </div>
                </Slider>
        </section>
    )
}

export default Kemampuan
