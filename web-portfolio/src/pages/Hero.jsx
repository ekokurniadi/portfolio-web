import React from "react";
import "./styles.css";
import Typewriter from "typewriter-effect";
import ilustration from "../assets/log-in-girl.svg";
import dots from "../assets/dots.png";

export const Hero = () => {
  return (
    <section className="hero py-4" style={{ marginTop: "-10px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 align-self-center information mt-3">
            <Typewriter
              options={{
                strings: [
                  "WEB DEVELOPER",
                  "MOBILE APPS DEVELOPER",
                  "FRONT END DEVELOPER",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <h5>Make it work, make it right, make it fast</h5>
            <p>
              Hai, Perkenalkan nama ku Eko Kurniadi <br />
              <span>Ayo Kenali aku lebih lanjut.</span>
            </p>
            <div>
              <a
                href="https://wa.me/+62895604730750?text=Hallo, saya tertarik dengan profil anda"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{
                  fontFamily: "Poppins",
                  backgroundColor: "#01e675",
                  border: "none",
                }}
              >
                <i className="fab fa-whatsapp" aria-hidden="true"></i> Contact
                Me
              </a>
            </div>
            <p className="py-3">
              <img src={dots} alt="" width="150px" />
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 mt-5">
            <img src={ilustration} alt="" className="img-fluid "/>
          </div>
        </div>
      </div>
    </section>
  );
};
