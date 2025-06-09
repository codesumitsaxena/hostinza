import React from "react";
import ServicesImg1 from "../assets/service-7.png";
import ServicesImg2 from "../assets/service-8.png";
import ServicesImg3 from "../assets/service-9.png";
import ServicesImg4 from "../assets/service-10.png";
import ServicesImg5 from "../assets/service-11.png";
import ServicesImg6 from "../assets/service-12.png";
import { ArrowRight } from "lucide-react";
import sheild from "../assets/sheild.png";
import Cloud from "../assets/cloud-lock.png";
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import wave from '../assets/electric-wave.png'
import infoImg from '../assets/info-img-1.png'

const ServiceCard = ({ icon, heading, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="p-4 border rounded text-center h-100">
        <img
          src={icon}
          alt={heading}
          className="mb-3"
          style={{ width: 60, height: 60 }}
        />
        <h5 className="mb-2">{heading}</h5>
        <p className="mb-3">{description}</p>
        <a
          href="#"
          className="text-primary d-inline-flex align-items-center fw-medium"
        >
          Learn More <ArrowRight size={16} className="ms-2" />
        </a>
      </div>
    </div>
  );
};

function Services() {
  const userData = [
    {
      icon: ServicesImg1,
      heading: "Shared Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      icon: ServicesImg2,
      heading: "Reseller Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      icon: ServicesImg3,
      heading: "VPS Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      icon: ServicesImg4,
      heading: "Cloud Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      icon: ServicesImg5,
      heading: "Dedicated Hosting",
      description: "Share processes and data secure lona need to know basis",
    },
    {
      icon: ServicesImg6,
      heading: "Domain Name",
      description: "Share processes and data secure lona need to know basis",
    },
  ];

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

  const Brand = [
    {
      logo: client1,
    },
    {
      logo: client2,
    },
    {
      logo: client3,
    },
    {
      logo: client4,
    },
    {
      logo: client5,
    },
  ];

  return (
    <>
      {/* Services Container */}
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <p className="text-center text-muted mb-1">Best Service</p>
          <h2 className="choose-heading fw-bold text-center">
            Why <span className="textBlue">OUR BEST SERVICES</span>
          </h2>
        </div>
        <div className="row my-2 ">
          {userData.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/* Hosting Solution Section */}
      <div
        className="container-fluid solutionArea position-relative d-flex justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        <div className="container">
          <h2 className="text-center text-white fw-bold">
            We don’t compromise with the
            <br /> best Hosting Solution
          </h2>
        </div>

        {/* Overlapping Solution Cards */}
        <div
          className="position-absolute start-50 translate-middle-x"
          style={{ top: "70%", width: "100%", zIndex: 10 }}
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
      {/* Brand Area */}
      <div className="container  py-5" style={{ marginTop: "17%" }}>
        <div className="row justify-content-center align-items-center">
          {Brand.map((item, index) => (
            <div
              className="col-lg-2 d-flex justify-content-center align-items-center"
              key={index}
            >
              <img src={item.logo} alt="" className="img-fluid brand-logo" />
            </div>
          ))}
        </div>
      </div>
      <hr />
      {/* Power Plan */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <img src={infoImg} alt="" className="img-fliud" />
          </div>
          <div className="col-lg-6 p-5 d-flex flex-column gap-4">
            <img src={wave} alt="" className="img-fluid wave-icon" />
            <h3 className="fw-bold">Get best plans for more Power</h3>
            <p className="plan-para">Our best-in-class WordPress solution, with additional optimization to make running a WooCommerce online store easy. Our prices are clear and straight forward so you can</p>
            <div className="features-area">
              <h6 className="features-heading mb-3"><i class="bi bi-check-lg featureIcon me-3"/>We've been supporting WordPress since the beginning.</h6>
              <h6 className="features-heading my-3"><i class="bi bi-check-lg featureIcon me-3"/>Perfect for large sites or agencies managing multiple clients.</h6>
              <h6 className="features-heading my-3"><i class="bi bi-check-lg featureIcon me-3"/>Our easy-to-use control panel and API let you spend
</h6>
            </div>
            <div className="feature-btn my-4">
              <a href="#" className="px-5 py-3 bgBlue rounded-pill text-white text-decoration-none">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
