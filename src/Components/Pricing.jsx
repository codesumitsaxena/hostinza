import React, { useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Basic Hosting",
    monthly: 5,
    yearly: 49,
    tagline: "Great for personal blogs & small projects",
    color: "primary",
    bgClass: "bg-white",
    textColor: "text-primary",
    priceTextColor: "text-muted",
    btnClass: "btn-outline-primary",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Free SSL Certificate",
      "Standard Support",
      "1 Email Account",
      "Monthly Backups",
    ],
  },
  {
    title: "Business Hosting",
    monthly: 15,
    yearly: 129,
    tagline: "Perfect for startups & small businesses",
    color: "primary",
    bgClass: "bg-primary text-white",
    textColor: "text-white",
    priceTextColor: "text-white-50",
    btnClass: "btn-light",
    features: [
      "5 Websites",
      "50 GB SSD Storage",
      "Free SSL + CDN",
      "Priority Support",
      "10 Email Accounts",
      "Weekly Backups",
    ],
  },
  {
    title: "Enterprise Hosting",
    monthly: 30,
    yearly: 299,
    tagline: "Optimized for large-scale applications",
    color: "secondary",
    bgClass: "bg-white",
    textColor: "text-secondary",
    priceTextColor: "text-muted",
    btnClass: "btn-outline-secondary",
    features: [
      "Unlimited Websites",
      "200 GB SSD Storage",
      "Advanced Security Suite",
      "24/7 Premium Support",
      "Unlimited Emails",
      "Daily Backups",
    ],
  },
];

function PricingCard({ plan, isYearly }) {
  const price = isYearly ? plan.yearly : plan.monthly;
  const duration = isYearly ? "year" : "month";

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div
        className={`card h-100 border-0 rounded-4 shadow-sm ${plan.bgClass}`}
      >
        <div className="card-body py-5 px-5 text-start">
          <h5 className={`card-title fw-bold mb-2 ${plan.textColor}`}>
            {plan.title}
          </h5>
          <p className="mb-3 small">{plan.tagline}</p>
          <h2 className="card-price mb-1">
            ${price}{" "}
            <small className={`${plan.priceTextColor}`}>/{duration}</small>
          </h2>
          <hr className="my-3" />
          <ul className="list-unstyled mb-4 ps-0">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="mb-2 ps-2">
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className={`btn ${plan.btnClass} w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 mt-3`}
          >
            <FaShoppingCart />
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef(null);

  const handleToggle = (value) => {
    setIsYearly(value);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-start mb-4 px-2 py-4 px-md-0">
          <h6 className="text-primary text-center fw-semibold mb-2">
            Best Service
          </h6>
          <h2 className="choose-heading text-center fw-bold">
            OUR <span className="textBlue">BEST PRICING</span>
          </h2>

          {/* Toggle Switch with Animated Background */}
          <div className=" p-3  mt-4 d-flex justify-content-center">
            <div
              className="position-relative d-inline-flex  toggle-switch rounded-pill overflow-hidden"
              style={{ width: "fit-content" }}
            >
              <div
                className="switch-slider position-absolute rounded-pill"
                style={{
                  width: "50%",
                  height: "100%",
                  backgroundColor: "#0d6efd",
                  top: 0,
                  left: isYearly ? "50%" : "0%",
                  transition: "left 0.3s ease",
                  zIndex: 0,
                }}
              ></div>

              {/* Buttons */}
              <button
                className={`btn px-4 py-2 rounded-pill border-0 position-relative ${
                  !isYearly ? "text-white" : "text-dark"
                }`}
                style={{ background: "transparent", zIndex: 1 }}
                onClick={() => handleToggle(false)}
              >
                Monthly
              </button>
              <button
                className={`btn px-4 py-2 rounded-pill border-0 position-relative ${
                  isYearly ? "text-white" : "text-dark"
                }`}
                style={{ background: "transparent", zIndex: 1 }}
                onClick={() => handleToggle(true)}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div ref={pricingRef} className="row justify-content-center mt-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
