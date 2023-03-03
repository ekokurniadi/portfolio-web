import React, { Fragment, useState, useEffect } from "react";
import { Card } from "./Card";
import "./styles.css";
import { Tagl } from "./Tag";
import { CardSkeleton } from "./CardSkeleton";

import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import golang from "../assets/golang.png";
import dart from "../assets/dart.jpg";
import gameStore from "../assets/game-store.png";

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setPortfolio({
        data: [
          {
            phil: "Flutter",
            image_cover: `${card1}`,
            title: "AMR PLN Teknisi",
            description: "PLN UPTD 3 Banten",
          },
          {
            phil: "Flutter",
            image_cover: `${card2}`,
            title: "Aplikasi Sales Tools",
            description: "PT Multi Andalan Wisesa",
          },
          {
            phil: "Flutter",
            image_cover: `${card3}`,
            title: "Aplikasi Move On",
            description: "Jasa Sewa Mobil Pick-up",
          },
          {
            phil: "PHP Codeigniter",
            image_cover: `${card4}`,
            title: "Survey Sehat",
            description: "Survey Poin Kesehatan",
          },
          {
            phil: "PHP Codeigniter",
            image_cover: `${card5}`,
            title: "Web Fiskal",
            description: "Samsat Jambi",
          },
          {
            phil: "Golang",
            image_cover: `${golang}`,
            title: "Micagen Dart",
            description: "Code Generator for Flutter",
            link:
              "https://pkg.go.dev/github.com/ekokurniadi/micagen-for-dart#section-readme",
            link_title: "Show Package",
          },
          {
            phil: "Golang",
            image_cover: `${golang}`,
            title: "Micagen Golang",
            description: "Rest Api Code Generator for Go",
            link: "https://pkg.go.dev/github.com/ekokurniadi/micagen",
            link_title: "Show Package",
          },
          {
            phil: "Dart",
            image_cover: `${dart}`,
            title: "Windows Local Notification",
            description: "Show Notification On Desktop Windows",
            link: "https://github.com/ekokurniadi/windows_local_notification",
            link_title: "Show Package",
          },
          {
            phil: "Next JS",
            image_cover: `${gameStore}`,
            title: "Game Store",
            description: "Website Top Up Game",
          },
        ],
      });
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <Tagl text="Portfolio Saya" />
      <section className="portfolio">
        {loading && (
          <div className="container">
            <div className="row">
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <CardSkeleton />
              </div>
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <CardSkeleton />
              </div>
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <CardSkeleton />
              </div>
            </div>
          </div>
        )}
        {!loading && (
          <div className="container">
            <div className="row">
              {portfolio.data.map((item) => (
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Card
                    bahasa={item.phil}
                    image={item.image_cover}
                    text={item.title}
                    desc={item.description}
                    link={item.link}
                    link_title={item.link_title}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex mt-5 mb-3 justify-content-center">
              <a
                className="btn btn-outline-primary"
                type="button"
                href="https://github.com/ekokurniadi"
                target="_blank"
                rel="noreferrer"
              >
                Show more on github
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
