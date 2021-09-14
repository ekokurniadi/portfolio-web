import React from "react";
import './styles.css'
import contact from '../assets/contact-us.jpg';
export const Contact = () => {
    return (
        <section className="contact">
            <div className="container mt-4">
                <div className="row ">
                    <div className="col-md-5 d-flex align-items-center">
                        <img src={contact} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 d-flex align-items-center align-content-start">

                        <table style={{verticalAlign:'top'}} width="100%">
                            <form method="post" enctype="multipart/form-data" id="form_"></form>
                            <tbody><tr>
                                <td><input type="text" required="" className="tanya" name="namakamu" id="namakamu" placeholder="Nama" /></td>
                            </tr>
                                <tr>
                                    <td><input type="text" required="" className="tanya" name="ema" id="ema" placeholder="Email" /></td>
                                </tr>
                                <tr>
                                    <td><input type="text" required="" className="tanya" name="sbj" id="sbj" placeholder="Subject" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <textarea name="tanyaan" id="tanyaan" required="" className="form-control tanya" cols="30" rows="5" placeholder="Pesan"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" id="submitContact" className="btn btn-flat btn-block btn-primary mt-2"><span className="fa fa-send"></span> Kirim</button>
                                    </td>
                                </tr>
                            </tbody></table>

                    </div>
                </div>
            </div>
        
        </section>
    );
}