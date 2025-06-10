import React, { useState, useRef } from "react";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Starter Plan",
    monthly: 59,
    yearly: 599,
    tagline: "Perfect for hobbyists or personal portfolios",
    highlight: false,
    bgClass: "bg-white",
    textColor: "text-dark",
    btnClass: "btn-outline-primary",
    features: [
      "1 Website Hosting",
      "30 GB NVMe SSD Storage",
      "100 GB Monthly Bandwidth",
      "Free SSL Certificate (Auto-Renew)",
      "1 Email Account",
      "1 MySQL Database",
      "Free Website Builder",
      "Weekly Cloud Backups",
      "1-Click WordPress Installer",
      "cPanel Access",
      "Basic Malware Scan",
      "PHP Version Selector",
      "Standard Ticket Support",
      "99.9% Uptime Guarantee"
    ],
  },
  {
    title: "Growth Plan",
    monthly: 129,
    yearly: 1299,
    tagline: "Best for freelancers, bloggers & growing businesses",
    highlight: true,
    bgClass: "bg-primary text-white",
    textColor: "text-white",
    btnClass: "btn-light",
    features: [
      "10 Websites Hosting",
      "100 GB NVMe SSD Storage",
      "Unlimited Bandwidth",
      "Free Domain (1 Year)",
      "10 Business Email Accounts",
      "Unlimited MySQL Databases",
      "Daily Cloud Backups",
      "Free SSL + Global CDN",
      "LiteSpeed Cache + HTTP/3",
      "GIT Integration & SSH Access",
      "cPanel + File Manager Access",
      "AI-Powered Site Builder",
      "Malware Removal + Security Patch Updates",
      "24/7 Priority Email & Chat Support",
      "Advanced DDoS & Firewall Protection",
      "Unlimited FTP Accounts",
    ],
  },
  {
    title: "Pro Plan",
    monthly: 249,
    yearly: 2499,
    tagline: "For agencies & high-performance business apps",
    highlight: false,
    bgClass: "bg-white",
    textColor: "text-dark",
    btnClass: "btn-outline-secondary",
    features: [
      "Unlimited Websites Hosting",
      "250 GB NVMe SSD + Auto-Scaling",
      "Unlimited Bandwidth + Global CDN",
      "Free Domain + Private DNS",
      "Unlimited Professional Emails",
      "Unlimited Databases + Redis & Memcached Support",
      "Real-Time Backup with Version Restore",
      "Imunify360 Security Suite (AI Protection)",
      "Dedicated IP + Advanced WAF",
      "WHM Access + Reseller Features",
      "Free Site Migration by Experts",
      "Developer Tools: Node.js, Python, Ruby Support",
      "Staging + Cloning Environment",
      "GIT, Cron Jobs, SSH, Composer Support",
      "24/7 Dedicated Tech Engineers",
      "Uptime SLA: 99.99% with Credit Guarantee",
    ],
  },
];

function PricingCard({ plan, isYearly }) {
  const price = isYearly ? plan.yearly : plan.monthly;
  const duration = isYearly ? "year" : "month";
  const isDark = plan.bgClass.includes("bg-primary");

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div
        className={`card h-100 border-0 shadow-lg rounded-4 position-relative overflow-hidden pricing-card ${plan.bgClass} ${
          plan.highlight ? "border py-3 border-4 border-warning" : ""
        }`}
      >
        {plan.highlight && (
          <span className="position-absolute mt-4 top-0 start-50 translate-middle badge rounded-pill bg-warning mt-4 shadow-sm">
            Most Popular
          </span>
        )}

        <div className="card-body p-5 text-start d-flex flex-column">
          <div className="flex-grow-1">
            <h5 className={`card-title fw-bold ${plan.textColor}`}>{plan.title}</h5>
            <p className="small mb-3">{plan.tagline}</p>

            <h2 className="card-price display-5 fw-semibold">
              ₹{price} <small className="fs-6 text-muted">/ {duration}</small>
            </h2>

            <hr className="my-4" />

            <ul className="list-unstyled">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-2 d-flex align-items-start">
                  <FaCheckCircle
                    className={`me-2 flex-shrink-0 ${isDark ? "text-white" : "text-success"}`}
                    style={{ fontSize: "1rem", marginTop: "0.2rem" }}
                  />
                  <span className="small">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className={`btn mt-4 w-100 ${plan.btnClass}`}>
            <FaShoppingCart className="me-2" />
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}

function Hosting() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef(null);

  return (
    <section className="pricing-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-semibold mb-2 fs-6">Shared Hosting Plans</h6>
          <h2 className="fw-bold display-6">
            Our <span className="text-primary">Best Pricing</span> Options
          </h2>

          <div className="d-inline-flex mt-4 position-relative bg-secondary-subtle rounded-pill px-1 py-1 shadow-sm toggle-group">
            <button
              className={`btn rounded-pill px-4 py-2 fw-medium ${
                !isYearly ? "btn-primary text-white" : "btn-light"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`btn rounded-pill px-4 py-2 fw-medium ${
                isYearly ? "btn-primary text-white" : "btn-light"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div ref={pricingRef} className="row justify-content-center gy-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hosting;
