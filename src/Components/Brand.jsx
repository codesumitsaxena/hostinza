import React from 'react'
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";

function Brand() {
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
    <div>
      <div className="container my-5" style={{ marginTop: "5%" }}>
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
    </div>
  )
}

export default Brand
