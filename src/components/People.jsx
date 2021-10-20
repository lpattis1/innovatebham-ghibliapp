import React, { createRef, useEffect } from "react";
import { gsap } from "gsap";

const People = (props) => {
  const peopleRef = createRef();
  useEffect(() => {
    gsap.to(peopleRef.current, {
      opacity: "0.5",
      height: "100%",
      width: "100%",
    });
    gsap.to(peopleRef.current, { opacity: "1" });
  });
  return (
    <div className="col col-lg-4 col-12">
      <div className="card-container d-flex justify-content-center align-items-center">
        <div ref={peopleRef} className="card people-card shadow mb-3">
          <div className="card-body">
            <h3 className="card-title person-title mt-4 mb-4">{props.name}</h3>
            <hr />
            <h5 className="stats-title mt-3">Stats</h5>
            <p className="card-text person-gender mt-4">
              <span className="stat-highlight">Gender:</span> {props.gender}
            </p>
            <p className="card-text person-age">
              <span className="stat-highlight">Age:</span> {props.age}
            </p>
            <p className="card-text person-eye-color">
              <span className="stat-highlight">Eye color:</span>{" "}
              {props.eyeColor}
            </p>
            <p className="card-text person-hair-color mb-3">
              <span className="stat-highlight">Hair color:</span>{" "}
              {props.hairColor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
