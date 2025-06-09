import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeroSection from "../assets/dream_img.png";
import logo from '../assets/logo.png';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaGlobe, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import Com from "../assets/com.png";
import Co from "../assets/co.png";
import Net from "../assets/net.png";
import Store from "../assets/store.png";
import Info from "../assets/info.png";
import { Link } from "react-router-dom"; // For routing

function NavbarApp() {



  return (
    <>
      {/* Mini Navbar */}
      <div
        className="container-fluid miniNav text-white py-3"
        style={{ backgroundColor: "#10094A" }}
      >
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex gap-4">
            <div>
              <i className="bi bi-telephone me-2"></i>
              009-215-5599
            </div>
            <div>
              <i className="bi bi-envelope me-2"></i>
              info@example.com
            </div>
          </div>

          <div className="d-flex gap-4">
            <div>
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </div>
            <div>
              <i className="bi bi-life-preserver me-2"></i>
              Support
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-fluid nav-area" style={{ position: "relative" }}>
        <Navbar expand="lg" className="p-0 border-bottom-secondary" variant="dark">
          <Container>
            <Navbar.Brand href="#" className="fs-3">
              <img src={logo} alt="logo" className="img-fluid" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto gap-3 text-white align-items-center" navbarScroll>

                <NavDropdown title="Home" className="text-white">
                  <NavDropdown.Item as={Link} to="/">Home 1</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/home2">Home 2</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/home3">Home 3</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Page" className="text-white">
                  <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/pricing">Pricing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Hosting" className="text-white">
                  <NavDropdown.Item as={Link} to="/shared-hosting">Shared Hosting</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/vps-hosting">VPS Hosting</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/reseller-hosting">Reseller Hosting</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/cloud-hosting">Cloud Hosting</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="News" className="text-white">
                  <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/latest-news">Latest News</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/announcements">Announcements</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/contact" className="text-white">
                  Contact
                </Nav.Link>

                <div className="d-flex align-items-center gap-4 ms-4">
                  <Nav.Link href="#world" className="p-0">
                    <FaGlobe color="white" size={18} />
                  </Nav.Link>
                  <Nav.Link href="#search" className="p-0">
                    <FaSearch color="white" size={18} />
                  </Nav.Link>
                  <Nav.Link href="#cart" className="p-0">
                    <FaShoppingCart color="white" size={18} />
                  </Nav.Link>
                  <Nav.Link href="#menu" className="p-0">
                    <FaBars color="white" size={18} />
                  </Nav.Link>
                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero Section */}
      
      </div>
    </>
  );
}

export default NavbarApp;
