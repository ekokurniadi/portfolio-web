import React, { Fragment } from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import avatar from "../assets/avatars.png";
import { setTheme } from "./theme";
export const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [mode, setMode] = useState("light");
  let theme = localStorage.getItem("theme");
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(()=>{
    setTheme("theme-light");
    setMode("theme-light");
  },[])

  window.addEventListener("scroll", changeBackground);
  const setThema = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setMode("light");
    } else {
      setTheme("theme-dark");
      setMode("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setMode("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setMode("light");
    }else{
      setMode("dark");
    }
   
  }, [theme]);

  return (
    <Fragment>
      <section
        className={navBackground === true ? "navigation active" : "navigation"}
      >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a
              href="/"
              className="navbar-brand align-items-center"
              style={{ display: "flex", flexGrow: "10" }}
            >
              <img src={avatar} alt="" width="50px" />
              eko<span className="kurniadi">kurniadi</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="fa fa-bars"
                style={
                  navBackground === true
                    ? { color: "white" }
                    : { color: "#2880ce" }
                }
              ></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ScrollspyNav
                scrollTargetIds={[
                  "tentang",
                  "portfolio",
                  "kemampuan",
                  "kontak",
                ]}
                currentClassName="is-current"
                style={{ marginLeft: "auto !important" }}
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item li">
                    <a href="/" className="nav-link">
                      Beranda
                    </a>
                  </li>
                  <li className="nav-item li">
                    <a href="#tentang" className="nav-link">
                      Tentang Saya
                    </a>
                  </li>
                  <li className="nav-item li">
                    <a href="#portfolio" className="nav-link">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item li">
                    <a href="#pengalaman" className="nav-link">
                      Pengalaman Kerja
                    </a>
                  </li>
                  <li className="nav-item li">
                    <a href="#kemampuan" className="nav-link">
                      Kemampuan
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#kontak" className="nav-link button">
                      Kontak
                    </a>
                  </li>
                </ul>
              </ScrollspyNav>
            </div>

            <div className="mt-2 mr-2">
              {mode === "light" ? (
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  checked
                  
                  onChange={setThema}
                />
              ) : (
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onChange={setThema}
                />
              )}

              <label htmlFor="checkbox" className="label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball bounce-7"></div>
              </label>
            </div>
            
            {/* <label id="switch" class="switch">
              <input type="checkbox" onClick={setThema} id="slider" />
              <span class="slider round"></span>
            </label> */}
          </div>
        </nav>
      </section>
    </Fragment>
  );
};
