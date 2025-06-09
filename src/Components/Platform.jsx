import React from 'react';
import infoImg2 from '../assets/info-img-2.png';
import ClockIcon from '../assets/clock-icon.png';
import CloudIcon from '../assets/cloud-icon.png';
import gaurd from '../assets/gaurd-icon.png';

function Platform() {
  const server = [
    {
      icon: ClockIcon,
      heading: "Better Security and Faster Server",
      description: "Our best-in-class WordPress solution, with additional optimization to make running a WooCommerce store smooth and fast."
    },
    {
      icon: CloudIcon,
      heading: "Scalable Cloud Infrastructure",
      description: "Experience unmatched performance with our cloud infrastructure tailored for business growth."
    },
    {
      icon: gaurd,
      heading: "Reliable Guard Protection",
      description: "Stay protected with top-tier firewalls and constant monitoring for peace of mind."
    },
  ];

  return (
    <div className='container  py-5'>
      <div className="row align-items-center">
        <div className="col-lg-6 d-flex flex-column gap-3">
          <h3 className="fw-bold mb-4">Powerful Server and Platform</h3>
          {server.map((item, index) => (
            <div className="d-flex align-item-center gap-3 mb-4" key={index}>
              <div style={{ flexShrink: 0 }}>
                <img src={item.icon} alt="icon" style={{ width: '50px', height: '50px' }} />
              </div>
              <div>
                <h5 className="mb-1">{item.heading}</h5>
                <p className="mb-0 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Column */}
        <div className="col-lg-6">
          <img src={infoImg2} alt="Server Illustration" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Platform;
