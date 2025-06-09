import React from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap";
import HeroSection2 from "../assets/dream_img.png";
import Com from "../assets/com.png";
import Co from "../assets/co.png";
import Net from "../assets/net.png";
import Store from "../assets/store.png";
import Info from "../assets/info.png";


function HeroSection() {
    const domData = [
        { icon: Com, rating: "$9.95" },
        { icon: Co, rating: "$7.95" },
        { icon: Net, rating: "$2.95" },
        { icon: Store, rating: "$5.95" },
        { icon: Info, rating: "$5.95" },
      ];
  return (
    <div>
        <div className="container-fluid hero-section nav-area position-relative">
          <div className="container py-5">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 d-flex flex-column gap-2">
                <p className="heroHeading fs-3">We Provide</p>
                <h2 className="mainHeading">Premium Hosting</h2>
                <p className="heroPara">
                  Share process and data securely on a need-to-know basis without the need for reconciliation. It combines a permission...
                </p>
                <div className="btn-area">
                  <a href="#" className="px-4 py-2 text-decoration-none btn rounded-pill">
                    Get Started
                  </a>
                  <a href="#" className="px-4 ms-3 py-2 text-decoration-none btn2 rounded-pill">
                    Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={HeroSection2} alt="heroImg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Domain Area */}
        <div className="container domain-area shadow p-4 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 d-flex py-3 justify-content-center">
            <InputGroup style={{ width: "50vw" }} className="shadow rounded-pill">
              <FormControl
                placeholder="Domain.com"
                className="border-0 rounded-pill my-2 ps-4"
                style={{ height: "55px", borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              />
              <Button
                variant="primary"
                className="rounded-pill px-5 me-3 my-2"
                style={{ marginLeft: "-50px", zIndex: 1 }}
              >
                Search
              </Button>
            </InputGroup>
          </div>
          <div className="dom-box w-100 mt-4">
            <div className="row justify-content-center">
              {domData.map((item, index) => (
                <div
                  className="col-6 col-md-2 d-flex gap-3 justify-content-center align-items-center text-center mb-3"
                  key={index}
                >
                  <img src={item.icon} alt={`domain-${index}`} className="img-fluid mb-2" />
                  <h6>{item.rating}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
