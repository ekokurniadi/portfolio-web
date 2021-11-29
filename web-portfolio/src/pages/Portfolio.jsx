import React, { Fragment, useState, useEffect } from "react";
import { Card } from "./Card";
import "./styles.css";
import { Tagl } from "./Tag";
import axios from "axios";
import { CardSkeleton } from "./CardSkeleton";
export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(true);
  const URI = "https://golang-postgres.herokuapp.com/api/v1";
  const URI_IMAGE = "https://golang-postgres.herokuapp.com/images/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(URI + "/portofolios");
        setPortfolio(response);
      } catch (error) {
        console.log(error);
      }
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
                    image={`${URI_IMAGE}${item.image_cover}`}
                    text={item.title}
                    desc={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

 
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex mt-5 mb-3 justify-content-center">
              <button className="btn btn-outline-primary" type="button">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
