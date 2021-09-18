import React from "react";
import './styles.css';


export const Tagl = (props) => {
    return (
        <section className="tagline mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div>
                            <h4>{props.text}</h4>
                            <div className="lines"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}