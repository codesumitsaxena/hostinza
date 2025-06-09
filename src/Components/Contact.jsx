import React from 'react'
import ContactImg from  '../assets/contact-bg.png'
import Find from  '../assets/Location.png'
import sheild from "../assets/sheild.png";
import Cloud from "../assets/cloud-lock.png";
import Footer from '../Components/Footer'

import { Form } from 'react-bootstrap';


function Contact() {

    const cardData = [
        {
            img: Find,
            heading: "Find us",
            description: "1Hd- 50, 010 Avenue, NY 90001 United States",
        },
        {
            img: Find,
            heading: "Find us",
            description: "1Hd- 50, 010 Avenue, NY 90001 United States",
        },
        {
            img: Find,
            heading: "Find us",
            description: "1Hd- 50, 010 Avenue, NY 90001 United States",
        },
    ]

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
      <div className="container-fluid About-section Contact-section nav-area position-relative">
     <div className="container py-5">
    <div className="row justify-content-between align-items-center">
      <div className="col-lg-6 d-flex flex-column gap-2">
        <p className="heroHeading fs-3">Contact Us</p>
        <h2 className="mainHeading">We’re Here to Help</h2>
        <p className="heroPara">
          Whether you have questions about our services, need support, or want to explore hosting solutions — our team is ready to assist. Reach out and we’ll get back to you as soon as possible.
        </p>
        <div className="btn-area">
          <a href="mailto:support@yourdomain.com" className="px-4 py-2 text-decoration-none btn rounded-pill">
            Email Us
          </a>
          <a href="/support" className="px-4 ms-3 py-2 text-decoration-none btn2 rounded-pill">
            Visit Support
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <img src={ContactImg} alt="contact us" className="img-fluid" />
      </div>
    </div>
  </div>
      </div>
        
        {/* Card Section */}
        <div className="cotnainer my-5">
        <h6 className="text-primary text-center fw-semibold mb-2">
              Find us </h6>
            <h2 className="choose-heading text-center fw-bold">
              CONTACT <span className="textBlue">WITH US</span></h2>
        </div>
        <div className="container my-5 ">
        <div className="row gap-4">
{cardData.map((item,index)=>(
    <div className="col-lg-4 p-5 d-flex flex-column gap-2 shadow justify-content-center align-items-center" key={index} style={{width: "31%"}}>
        <img src={Find} alt=""  className='img-fluid'/>
        <h5>{item.heading}</h5>
        <p>{item.description}</p>  
    </div>
))}
            </div>
        </div>
        {/* Contact Form */} 
        <div className="container-fluid bg-light ContactForm">
            <div className="container py-5">
                <p className='text-center'>Have a Question?</p>
                <h2 className="choose-heading text-center fw-bold">
              SEND <span className="textBlue">MESSAGE</span></h2>

         
              <div className="container my-5">
  <form className="row g-4  p-4 rounded bg-light">
    <div className="col-md-12">
      <input
        type="text"
        className="form-control custom-input"
        name="fullName"
        placeholder="Full Name"
        required
      />
    </div>
    <div className="col-md-12">
      <input
        type="email"
        className="form-control custom-input"
        name="email"
        placeholder="Email Address"
        required
      />
    </div>
    <div className="col-12">
      <input
        type="text"
        className="form-control custom-input"
        name="subject"
        placeholder="Subject"
        required
      />
    </div>
    <div className="col-12">
      <textarea
        className="form-control custom-input"
        name="message"
        placeholder=" Question"
        rows="5"
        required
      ></textarea>
    </div>
    <div className="col-12 text-center">
      <button type="submit" className="btn btn-primary rounded-pill px-5 py-2">
        Submit
      </button>
    </div>
  </form>
</div>

 


            </div>

        </div>

        {/* Map */}
        <div className="container-fluid m-0 p-0 position-relative">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.562087095892!2d77.33659949331384!3d28.62016211518082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1749471891796!5m2!1sen!2sin"
  width="100%"
  height="550"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
 <div className="container">
        <div
          className="position-absolute start-50 translate-middle-x"
          style={{ top: "62%", width: "100%", zIndex: 10 }}
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


        </div>

        <Footer/>
        </div>

  )
}

export default Contact
