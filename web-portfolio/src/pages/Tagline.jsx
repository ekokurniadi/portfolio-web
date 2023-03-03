import React from "react";
import "./styles.css";
import sq from "../assets/squiggle.png";
import { Tagl } from "./Tag";

export const Tagline = (props) => {
  return (
    <section className="tagline">
      <div className="col-md-12 d-flex justify-content-end mb-3 tagli">
        <img src={sq} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ height: "20px" }}></div>
            <Tagl text="Tentang Saya" />
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center mt-4">
            <p style={{ textAlign: "center" }}>
              Hi, Nama saya Eko Kurniadi. <br/>Saya seorang Flutter Developer &
              FullStack Developer yang memiliki pengalaman lebih dari 3 tahun.
              Saat ini saya bekerja sebagai Senior Mobile Engineer di Majoo.
              Saya menyukai tantangan dan senang belajar hal baru. <br />{" "}
            </p>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
            <svg
              viewBox="0 0 160 160"
              width="160"
              height="160"
              id="circles"
              fill="orange"
            >
              <circle cx="80" cy="80" r="50" />
              <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                <path
                  d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                  fill="yellow"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 0 0"
                    to="0 0 0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              <path
                d="M 50,0 A 50,50 0 0,0 -50,0Z"
                transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
