import React from 'react'
import Choose1 from '../assets/choose-us-1.png'
import Choose2 from '../assets/choose-us-2.png'
import Choose3 from '../assets/choose-us-3.png'


function Choose() {
  const UserData = [{
      img: Choose1 ,
      heading: "99.9% Uptime Guarantee",
      description: "Share processes and data secure lona need to know basis",
    },
    {
        img:  Choose2,
        heading: "Safe and Secured",
        description: "Our team assured your web site is always safe and secure",
      },
      {
        img: Choose3,
        heading: "Our Dedicated Support",
        description: "We finally found a host that truly understood the unique",
      },
]
  return (
    <>
    {/* Choose_area container */}
    <div className='container choose-area py-5'>
    <div className="row mt-5  text-center">
      <p className='fs-5 textGray'>Best Hosting</p>
      <h2 className='choose-heading fw-bold'>Why <span className='textBlue'>Choose Us</span></h2>
  
      {UserData.map((item, index) => (
        <div className="col-lg-4 py-5 d-flex gap-2 flex-column align-items-center" key={index}>
          <img className='px-3' src={item.img} alt="" />
          <h3 className='px-3'>{item.heading}</h3>
          <p className='px-3'>{item.description}</p>
        </div>
      ))}
    </div>
    </div>
    {/* Pricing_area Container */}
  </>
  )
}

export default Choose
