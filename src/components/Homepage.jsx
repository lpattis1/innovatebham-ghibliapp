import React from "react";

const Homepage = () => {
  return (
    <div className="col-12">
      <div className="card-container d-flex justify-content-center align-items-center">
        <div className="card homepage-card shadow mb-5">
          <div className="card-body">
            <h3 className="card-title homepage-title mb-3">
              Studio Ghibli API Lab
            </h3>
            <p className="card-text homepage-text mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ipsam quos iusto totam exercitationem eos in debitis assumenda
              doloremque, voluptatum, officiis odit ipsa nihil quae, quam eum.
              Iusto, placeat minima.
            </p>
            <small className="contact-info">
              If you like what you see then hit me up at{" "}
              <span className="highlight">randomperson@gmail.com</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
