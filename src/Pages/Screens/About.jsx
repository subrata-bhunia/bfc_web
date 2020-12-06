import React from 'react';
import Aboutimg from '../../Bfc/aboutpage.png'
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
      <section id="header" className="d-flex align-items-center  header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
              <div className=" mt-5 col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column">
                <h2>
                  Grow your business with <p className="mb-0 h1">Debpur B.F.C Club</p>
                </h2>
                <p className="my-3">
                  We are the team of talented developer making websites and app.
                </p>
                <div className="mt-3">
                  <NavLink to="/contact" className="btn btn-outline-primary"  type="button"> Contact Us</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img"  >
                <img src={Aboutimg} className="img-fluid animated header-img" alt="Aboutimg"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
