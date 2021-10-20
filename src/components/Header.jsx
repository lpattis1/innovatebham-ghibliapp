import React from "react";
import Typerwriter from "typewriter-effect";

const Header = () => {
  return (
    <header className="container">
      <div className="logo-container d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://www.nicepng.com/png/full/133-1339285_a-very-happy-new-year-2015-from-lisa.png"
          alt=""
          className="header-logo img-fluid"
        />
        <div className="header-text mt-5">
          <h5 className="type-title">
            <Typerwriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Studio Ghibli Movies")
                  .pauseFor(300)
                  .deleteChars(20)
                  .pauseFor(300)
                  .typeString("Find all the movie titles and movie characters")
                  .start();
              }}
            />
          </h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
