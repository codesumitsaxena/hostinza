import React, { useState } from 'react';
import AboutImg from "../assets/About Hosting.png";
import AboutVideo from  '../assets/video-popup-bg.jpg about.jpg'
import { Modal } from 'react-bootstrap';
import Choose from '../Components/Choose'
import OfficeImg1 from '../assets/office-img-1.jpg'
import OfficeImg2 from '../assets/office-img-2.jpg'
import OfficeImg3 from '../assets/office-img-3.jpg'
import Team1 from '../assets/team-1.jpg'
import Team2 from '../assets/team-2.jpg'
import Team3 from '../assets/team-3.jpg'
import Team4 from '../assets/team-4.jpg'
import sheild from "../assets/sheild.png";
import Cloud from "../assets/cloud-lock.png";

import Footer from './Footer';




function About() {
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    
  const hostingSolution = [
    {
      heading: "Days money back guarantee",
      description:
        "Share processes an data secure lona need to know basis without the need.",
      img: sheild,
    },
    {
      heading: "Build and protect your brand",
      description:
        "Share processes an data secure lona need to know basis without the need.",
      img: Cloud,
    },
  ];
  
    return (
      <div>
        {/* Hero Section */}
        <div className="container-fluid hero-section About-section nav-area position-relative">
          <div className="container py-5">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 d-flex flex-column gap-2">
                <p className="heroHeading fs-3">About Us</p>
                <h2 className="mainHeading">Your Hosting, Simplified</h2>
                <p className="heroPara">
                  We offer fast, secure, and reliable web hosting solutions for individuals and businesses. 
                  Our goal is to make your online journey easy and worry-free.
                </p>
                <div className="btn-area">
                  <a href="/pricing" className="px-4 py-2 text-decoration-none btn rounded-pill">
                    View Plans
                  </a>
                  <a href="/team" className="px-4 ms-3 py-2 text-decoration-none btn2 rounded-pill">
                    Our Team
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={AboutImg} alt="about us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Video Section */}
        <div className="container my-5">
          <div className="text-start d-flex justify-content-center align-items-center flex-column gap-2 mb-4 px-2 py-4 px-md-0">
            <h6 className="text-primary text-center fw-semibold mb-2">
              Who We Are
            </h6>
            <h2 className="choose-heading text-center fw-bold">
              MEET <span className="textBlue">HOSTINZA</span>
            </h2>
            <div className="position-relative">
              <img src={AboutVideo} alt="video-thumbnail" className='img-fluid my-5 AboutVideo mx-auto d-block' />
              <i className="bi bi-play-circle text-white position-absolute top-50 start-50 translate-middle fs-1 cursor-pointer"
                onClick={handleShow}></i>
            </div>
          </div>
        </div>
  
        {/* Modal for Video */}
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Body className="p-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Pe09B2vdHrU?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
        <div className="container p-0">
        <Choose className="m-0 p-0 aboutChoose"/>
        </div>


        {/* Team Section */}

        <div className="container">
        <div className="text-start d-flex justify-content-center align-items-center flex-column gap-2 mb-4 px-2 py-4 px-md-0">
            <h6 className="text-primary text-center fw-semibold mb-2">
            Our Office
            </h6>
            <h2 className="choose-heading text-center fw-bold">
              LIFE AT <span className="textBlue">HOSTINZA</span>
            </h2>
            <div className="row py-5 position-relative">
                <div className="col-lg-6 my-2 d-flex justify-content-end ">
                    <img src={OfficeImg1} alt="" className='img-fluid aboutTeam' />
                </div>
                <div className="col-lg-6 my-1 gap-4 aboutText d-flex justify-content-center align-items-center flex-column aboutTeam position-absolute " style={{right: "30px",  top: "110px" }}>
                    <h4 className='fs-2 fw-bold text-center'>Do you want to join <br/>our Team?</h4>
                    <a href="" className='px-5 py-2 rounded-pill text-decoration-none text-blue bg-white'>Apply Now</a>
                </div>
                <div className="col-lg-8 my-3">
                    <img src={OfficeImg2} alt=""  className='img-fluid'/>
                </div>
                <div className="col-lg-4 my-5">
                    <img src={OfficeImg3} alt="" className='img-fluid my-3' />
                </div>
            </div>
        </div>
        </div>
        <div className="container-fluid">
        <div className="text-start d-flex justify-content-center align-items-center flex-column gap-2 mb-4 px-2 py-4 px-md-0">
            <h6 className="text-primary text-center fw-semibold mb-2">
              Our Expert
            </h6>
            <h2 className="choose-heading text-center fw-bold">
              MEET <span className="textBlue">OUR TEAM</span>
            </h2>
          </div>
          <div className="container">

          <div className="row position-relative my-5">
            <div className="col-lg-3 ">
            <div className="team-box position-relative overflow-hidden">
        <img src={Team1} alt="Team" className="img-fluid w-100 team-img" />
        <div className="team-overlay position-absolute text-white p-3 d-flex flex-column justify-content-end">
          <div className="name-title mb-2 p-4">
            <h5 className="mb-1">Dimon Lake</h5>
            <i>CEO</i>
          </div>
          <div className="team-para px-2">
            <p>Share processes an data secure lona need</p>
          </div>
          <div className="social-icons mt-2">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>
            </div>
            <div className="col-lg-3 ">
            <div className="team-box position-relative overflow-hidden">
        <img src={Team2} alt="Team" className="img-fluid w-100 team-img" />
        <div className="team-overlay position-absolute text-white p-3 d-flex flex-column justify-content-end">
          <div className="name-title mb-2 p-4">
            <h5 className="mb-1">Lara Kein</h5>
            <i>HR Lead</i>
          </div>
          <div className="team-para px-2">
            <p>Share processes an data secure lona need</p>
          </div>
          <div className="social-icons mt-2">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>
            </div>
            <div className="col-lg-3 ">
            <div className="team-box position-relative overflow-hidden">
        <img src={Team3} alt="Team" className="img-fluid w-100 team-img" />
        <div className="team-overlay position-absolute text-white p-3 d-flex flex-column justify-content-end">
          <div className="name-title mb-2 p-4">
            <h5 className="mb-1">James Carter</h5>
            <i>Marketing manager</i>
          </div>
          <div className="team-para px-2">
            <p>Share processes an data secure lona need</p>
          </div>
          <div className="social-icons mt-2">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>
            </div>
            <div className="col-lg-3 ">
            <div className="team-box position-relative overflow-hidden">
        <img src={Team4} alt="Team" className="img-fluid w-100 team-img" />
        <div className="team-overlay position-absolute text-white p-3 d-flex flex-column justify-content-end">
          <div className="name-title mb-2 p-4">
            <h5 className="mb-1">Lina Ketty</h5>
            <i>Head of design</i>
          </div>
          <div className="team-para px-2">
            <p>Share processes an data secure lona need</p>
          </div>
          <div className="social-icons mt-2">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
        </div>

        <div className="container position-relative" style={{height:"30vh"}}>
        <div
          className="position-absolute start-50 translate-middle-x"
          style={{ top: "5%", width: "100%", zIndex: 10 }}
        >
          <div className="container">
            <div className="row py-4">
              {hostingSolution.map((item, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="p-5 d-flex align-items-center gap-4 border rounded shadow h-100 bg-white">
                    <div
                      className="sol-img d-flex align-items-center justify-content-center"
                      style={{ flexShrink: 0 }}
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="img-fluid"
                        style={{ maxWidth: "90px", height: "auto" }}
                      />
                    </div>
                    <div className="col-text d-flex flex-column justify-content-between">
                      <h4>{item.heading}</h4>
                      <p>{item.description}</p>
                      <div className="mt-auto text-end">
                        <a
                          href="#"
                          className="btn btn-primary rounded-pill text-white px-4"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        <Footer/>

      </div>
    );
  }
  
  export default About;
  

