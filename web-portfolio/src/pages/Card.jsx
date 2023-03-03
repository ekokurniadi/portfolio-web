import React from "react";
import "./styles.css";

export const Card = (props) => {
  return (
    <section className="card-component">
      <div id="cards_landscape_wrap-2">
        <a href="/">
          <div className="card-flyer">
            <div className="text-box">
              <div className="image-box">
                <div className="tag">{props.bahasa}</div>
                <img src={props.image} alt="" />
              </div>
              <div className="text-container">
                <h6>{props.text}</h6>
                <p>{props.desc}</p>
                <a href={props.link} target="_blank" rel="noreferrer">
                  {props.link_title}
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
