import React, { createRef, useEffect } from "react";
import { gsap } from "gsap";

const Films = (props) => {
  const filmRef = createRef();
  useEffect(() => {
    gsap.to(filmRef.current, { opacity: "0.5", height: "100%", width: "100%" });
    gsap.to(filmRef.current, { opacity: "1" });
  });
  return (
    <div className="col col-lg-4 col-12">
      <div className="card-container d-flex justify-content-center align-items-center">
        <div ref={filmRef} className="card film-card shadow mb-3">
          <img src={props.imgSrc} alt="" className="card-img-top film-img" />
          <div className="card-body">
            <h3 className="card-title film-title mt-3 mb-3">
              {props.filmTitle}
            </h3>
            <p className="card-text film-description mb-4">
              {props.filmDescription}
            </p>
            <hr />
            <div className="film-credits">
              <h5 className="stats-title mb-3 mt-4">Stats</h5>
              <p className="film-director">
                <span className="stat-highlight">Director:</span>{" "}
                <span className="director-highlight">{props.director} </span>
              </p>
              <p className="producer-director">
                <span className="stat-highlight">Producer: </span>{" "}
                <span className="producer-highlight">{props.producer}</span>
              </p>
              <p className="film-release">
                <span className="stat-highlight">Release: </span>
                <span className="release-highlight">{props.releaseDate}</span>
              </p>

              <p className="film-score">
                <span className="stat-highlight">RT Score: </span>{" "}
                <span
                  className={props.rtScore > 80 ? "green-score" : "red-score"}
                >
                  {props.rtScore}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films;
