import React from "react";
import Choose from "./Choose";
import sharedImg from "../assets/shared-hosting.png";
import Hosting from "./hosting";
import fastWebsite from "../assets/fast-website.png";
import support from "../assets/support.png";
import security from "../assets/security.png";
import stress from "../assets/stress-free.png";
import Live from "../assets/live.png";
import PhoneSupport from "../assets/phone-support.png";
import features1 from "../assets/included-feature-1.png";
import features2 from "../assets/included-feature-2.png";
import features3 from "../assets/included-feature-3.png";
import features4 from "../assets/included-feature-4.png";
import features5 from "../assets/included-feature-5.png";
import features6 from "../assets/included-feature-6.png";
import Brand from "./Brand";
import sheild from "../assets/sheild.png";
import Cloud from "../assets/cloud-lock.png";
import Footer from "./Footer";

function Shared() {
  const cardData = [
    {
      img: fastWebsite,
      heading: "Fastest website loading speed",
      description:
        "Outperform the competition, boost your site’s page speed and core web vital metrics with Litespeed web servers. Enjoy the best performance at the right price.",
    },
    {
      img: support,
      heading: "Award-winning support",
      description:
        "Focus more on your business, while we’ve got your back. A highly-trained service team is available 24/7 via phone, live chat and email to solve your technical issues.",
    },
    {
      img: security,
      heading: "Bulletproof hosting security",
      description:
        "Keep your website safe and secure against cyber threats with our multi-layered security solutions and Tier-4 data centers for your complete peace of mind.",
    },
  ];

  const firstCol = [
    {
      img: features1,
      heading: "No Multi Tenancy",
      description:
        "Share processes and data secure lon a need to know basis with out the need for reconciliation it combines.        ",
    },
    {
      img: features2,
      heading: "LiteSpeed Web Server ",
      description:
        "Share processes and data secure lon a need to know basis with out the need for reconciliation it combines.        ",
    },
    {
      img: features3,
      heading: "cPanel Hosting Control",
      description:
        "Share processes and data secure lon a need to know basis with out the need for reconciliation it combines.        ",
    },
  ];

  const secondCol = [
    {
      img: features4,
      heading: "PHP Selector",
      description:
        "Share processes and data secure lon a need to know basis with out the need for reconciliation it combines.        ",
    },
    {
      img: features5,
      heading: "LiteSpeed Web Server        ",
      description:
        "Share processes and data secure lon a need to know basis with out the need for reconciliation it combines.        ",
    },
    {
      img: features6,
      heading: "Patchman Kiler        ",
      description:
        "Share processes and data secure lon a need to know basis with out the need for reconciliation it combines.        ",
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

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid hero-section About-section nav-area position-relative">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6  d-flex flex-column gap-2">
              <p className="heroHeading fs-3">Shared Hosting</p>
              <h2 className="mainHeading">Affordable & Reliable Hosting</h2>
              <p className="heroPara">
                Experience the perfect balance of performance and cost with our
                shared hosting plans — ideal for startups, blogs, and small
                businesses looking to get online fast.
              </p>
              <div className="btn-area">
                <a
                  href="/pricing"
                  className="px-4 py-2 text-decoration-none btn rounded-pill"
                >
                  Explore Plans
                </a>
                <a
                  href="/features"
                  className="px-4 ms-3 py-2 text-decoration-none btn2 rounded-pill"
                >
                  See Features
                </a>
              </div>
            </div>
            <div className="col-lg-6 px-5">
              <img src={sharedImg} alt="shared hosting" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* Choose Section */}
      <div className="container">
        <Choose />
      </div>
      {/* Hosting Section */}
      <div className="contianer">
        <Hosting />
      </div>
      {/* Shared Hosting */}
      <div className="container my-5">
        <h2 className="text-center">
          The class-leaders in premium shared hosting
        </h2>
        <p className="text-center">
          We empower businesses to grow faster than ever with performance,
          support and security superior to leading hosting providers!
        </p>
        <div className="row my-5">
          <div className="row g-4">
            {cardData.map((item, index) => {
              const columnClass =
                index === 0
                  ? "col-lg-3"
                  : index === 1
                  ? "col-lg-6"
                  : "col-lg-3";

              return (
                <div className={`${columnClass}`} key={index}>
                  <div className="p-4  bg-light rounded-4 h-100 d-flex flex-column align-items-start">
                    <img src={item.img} alt="" className="img-fluid my-3" />
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Customer Support */}
      <div className="container my-">
        <h2 className="text-center">
          Stress-free hosting and proactive customer support
        </h2>
        <p className="text-center">
          We have an expert team of technical specialists to tackle all your
          queries with prompt assistance.
        </p>
        <div className="row my-5 align-items-center">
          <div className="col-lg-6">
            <img src={stress} alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6">
            <div className="cardBox d-flex align-items-center my-3 gap-3">
              <div className="boxImg">
                <img src={PhoneSupport} alt="" className="img-fluid" />
              </div>
              <div className="boxText">
                <h5>24/7 Support in English & Hindi</h5>
                <p>Live chat, email and phone support</p>
              </div>
            </div>

            <div className="cardBox d-flex align-items-center my-3 gap-3">
              <div className="boxImg">
                <img src={Live} alt="" className="img-fluid" />
              </div>
              <div className="boxText">
                <h5>Prompt and Friendly Response</h5>
                <p>Get all technical queries solved</p>
              </div>
            </div>

            <div className="cardBox my-3">
              <div className="boxImg d-flex align-items-baseline gap-2">
                <span className="fs-1 fw-bold">94%</span>
                <span className="fw-semibold">Happiness Score</span>
              </div>
              <div className="boxText mt-2">
                <p className="mb-0">
                  Based on 18,966 ratings from our customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="container-fluid features mt-5 py-5">
        <div className="container">
          <p className="fs-5 text-white text-center">Best Hosting</p>
          <h2 className="choose-heading fw-bold text-center">
            Why <span className="textBlue">Choose Us</span>
          </h2>

          <div className="row my-5">
            <div className="col-lg-6 d-flex flex-column gap-4">
              {firstCol.map((item, index) => (
                <div
                  key={index}
                  className="d-flex gap-5 justify-content-center "
                >
                  <div className="colImg">
                    <img src={item.img} alt="" className="img-fluid" />
                  </div>
                  <div className="colText">
                    <h5>{item.heading}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex flex-column gap-4">
              {secondCol.map((item, index) => (
                <div
                  key={index}
                  className="d-flex gap-5 justify-content-center "
                >
                  <div className="colImg">
                    <img src={item.img} alt="" className="img-fluid" />
                  </div>
                  <div className="colText">
                    <h5>{item.heading}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Brand Section */}
      <div className="container">
        <Brand />
      </div>
      {/* Attached Footer */}
      <div className="container position-relative" style={{ height: "30vh" }}>
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
      <Footer />
    </div>
  );
}

export default Shared;
