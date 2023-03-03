import React from "react";
import "./styles.css";
import ridikc from "../assets/ridikc.jpg";
import upwork from "../assets/upwork.jpg";
import sinsen from "../assets/sinsen.jpg";
import fastwork from "../assets/fastwork.png";
import majoo from "../assets/majoo.png";
import { Tagl } from "./Tag";
export const RiwayatPekerjaan = (props) => {
  return (
    <div className="container riwayat-pekerjaan py-3">
     
      <div className="row mt-5">
        <div className="col-md-12" data-aos="fade-down" data-aos-duration="1000">
          <div className="card">
            <div className="card-body">
              <div className="pekerjaan-image">
                <img src={majoo} alt="" width={80} />
                <div className="pekerjaan-content">
                  <h5>Mobile Engineer</h5>
                  <h6>Majoo Indonesia</h6>
                  <h6 className="date">Maret 2022</h6>
                  <p>
                    {/* Jobdesc : <br />
                    1. Mendevelop website dan memaintain untuk keperluan
                    internal Back Office
                    <br />
                    2 Mendevelop dan memaintain website untuk operasional dealer
                    cabang dan bengkel cabang (Penjualan motor dan AHASS)
                    <br />
                    3. IT Helpdesk
                    <br />
                    4. Mendevelop dan memaintain aplikasi mobile untuk keperluan
                    dealer dan bengkel cabang
                    <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12" data-aos="fade-down" data-aos-duration="1000">
          <div className="card">
            <div className="card-body">
              <div className="pekerjaan-image">
                <img src={sinsen} alt="" width={80} />
                <div className="pekerjaan-content">
                  <h5>Software Engineer</h5>
                  <h6>PT Sinar Sentosa Primatama · Wiraswasta</h6>
                  <h6 className="date">Jul 2019 - Februari 2022</h6>
                  <p>
                    Jobdesc : <br />
                    1. Mendevelop website dan memaintain untuk keperluan
                    internal Back Office
                    <br />
                    2 Mendevelop dan memaintain website untuk operasional dealer
                    cabang dan bengkel cabang (Penjualan motor dan AHASS)
                    <br />
                    3. IT Helpdesk
                    <br />
                    4. Mendevelop dan memaintain aplikasi mobile untuk keperluan
                    dealer dan bengkel cabang
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12" data-aos="fade-down" data-aos-duration="1000">
          <div className="card">
            <div className="card-body">
              <div className="pekerjaan-image">
                <img src={upwork} alt="" width={80} />
                <div className="pekerjaan-content">
                  <h5>Freelancer</h5>
                  <h6>Upwork</h6>
                  <h6 className="date">Feb 2021 - Saat ini</h6>
                  <p>
                    Jobdesc : <br />
                    1. Mengerjakan beberapa project dari Client dari beberapa
                    negara menggunakan Flutter, Go, ReactJS dan NuxtJS
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12" data-aos="fade-down" data-aos-duration="1000">
          <div className="card">
            <div className="card-body">
              <div className="pekerjaan-image">
                <img src={fastwork} alt="" width={80} />
                <div className="pekerjaan-content">
                  <h5>Freelancer</h5>
                  <h6>FastWork</h6>
                  <h6 className="date">Sept 2019 - Saat ini</h6>
                  <p>
                    Jobdesc : <br />
                    1. Mengerjakan beberapa project dari Client menggunakan Php
                    Codeigniter
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12" data-aos="fade-down" data-aos-duration="1000">
          <div className="card">
            <div className="card-body">
              <div className="pekerjaan-image">
                <img src={ridikc} alt="" width={80} />
                <div className="pekerjaan-content">
                  <h5>Robotics Instructor</h5>
                  <h6>Ridikc Industries Indonesia</h6>
                  <h6 className="date">Mar 2018 - Jan 2019</h6>
                  <p>
                    Jobdesc : <br />
                    1. Mengajarkan materi robotic kepada siswa kursus
                    <br />
                    2. Membuat beberapa project IOT <br />
                    3. Membuat video tutorial untuk konten youtube
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
