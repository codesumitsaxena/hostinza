import React from 'react';
import location from '../assets/address-pin.png';
import phone from '../assets/phone-pin.png';
import email from '../assets/email-icon.png';
import security1 from '../assets/security-company-images-1.png';
import security2 from '../assets/security-company-images-2.png';
import security3 from '../assets/security-company-images-3.png';
import security4 from '../assets/security-company-images-4.png';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='container-fluid footer-area bg-dark text-white'>
      {/* Top Sections */}
      <div className="container py-5">
        <div className="row py-5 mx-auto">
          {/* Services */}
          <div className="col-lg-3">
            <h4 className='text-white'>Services</h4>
            <hr className="bg-white underline my-3" />
            <ul className="list-unstyled mt-3 footer-link">
              <li><a href="#" className='text-white text-decoration-none'>Shared Hosting</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Reseller Hosting</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Cloud Hosting</a></li>
              <li><a href="#" className='text-white text-decoration-none'>VPS Hosting</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Dedicated Hosting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-3">
            <h4 className='text-white'>Company</h4>
            <hr className="bg-white underline my-3" />
            <ul className="list-unstyled mt-3 footer-link">
              <li><a href="#" className='text-white text-decoration-none'>About Us</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Contact</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Support</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Pricing</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Affiliate</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-lg-3">
            <h4 className='text-white'>Solutions</h4>
            <hr className="bg-white underline my-3" />
            <ul className="list-unstyled mt-3 footer-link">
              <li><a href="#" className='text-white text-decoration-none'>Whois</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Terms of Services</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Privacy Policy</a></li>
              <li><a href="#" className='text-white text-decoration-none'>FAQ</a></li>
              <li><a href="#" className='text-white text-decoration-none'>Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3">
            <h4 className='text-white'>Contact Info</h4>
            <hr className="bg-white underline my-3" />
            <ul className="list-unstyled mt-3 footer-link">
              <li className='d-flex align-items-center mb-2'>
                <img src={location} alt="location" className="me-3" style={{ width: '20px' }} />
                <span>9/4c, 1010 Avenue, NY, USA</span>
              </li>
              <li className='d-flex align-items-center mb-2'>
                <img src={phone} alt="phone" className="me-2" style={{ width: '20px' }} />
                <span>009-215-5596 (toll free)</span>
              </li>
              <li className='d-flex align-items-center mb-2'>
                <img src={email} alt="email" className="me-2" style={{ width: '20px' }} />
                <span>support@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Offer and Security Images */}
        <div className="row py-4">
          <div className="col-lg-6">
            <p>Offers valid for a limited time only and reflect multi-annual discounts. Other terms and conditions may apply. Click Here</p>
          </div>
          <div className="col-lg-6 px-4 d-flex justify-content-between align-items-center">
            <img src={security1} alt="security1" className='img-fluid' />
            <img src={security2} alt="security2" className='img-fluid' />
            <img src={security3} alt="security3" className='img-fluid' />
            <img src={security4} alt="security4" className='img-fluid' />
          </div>
        </div>

        <hr />

        {/* Bottom Row */}
        <div className="row py-3 align-items-center">
          <div className="col-lg-4 text-center text-lg-start mb-2 mb-lg-0">
            <small>© 2018 Hostinza Theme by Xpeed Studio</small>
          </div>
          <div className="col-lg-4 text-center mb-2 mb-lg-0">
            <img src={logo} alt="logo" className="img-fluid" style={{ maxHeight: '40px' }} />
          </div>
          <div className="col-lg-4 text-center text-lg-end d-flex justify-content-center justify-content-lg-end gap-2">
  <a href="#" className="social-icon"><FaFacebookF /></a>
  <a href="#" className="social-icon"><FaTwitter /></a>
  <a href="#" className="social-icon"><FaLinkedinIn /></a>
  <a href="#" className="social-icon"><FaGithub /></a>
  <a href="#" className="social-icon"><FaInstagram /></a>
</div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
