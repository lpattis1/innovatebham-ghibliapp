import React, { useState, useEffect } from "react";
import Header from "./Header";

import Homepage from "./Homepage";
import Films from "./Films";
import People from "./People";

const App = () => {
  const [currentDisplay, setCurrentDisplay] = useState("homepage");
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        return response.json();
      })
      .then((peopleData) => {
        setPeople(peopleData);
      });
  }, [people]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        return response.json();
      })
      .then((filmData) => {
        console.log(filmData.image);
        setFilms(filmData);
      });
  }, [films]);

  const showHomepage = <Homepage />;

  const showFilms = films.map((film) => {
    return (
      <>
        <Films
          imgSrc={film.image}
          filmTitle={film.title}
          filmDescription={film.description}
          director={film.director}
          producer={film.producer}
          releaseDate={film.release_date}
          rtScore={film.rt_score}
        />
      </>
    );
  });

  console.log(showFilms);

  const showPeople = people.map((person) => {
    return (
      <>
        <People
          name={person.name}
          gender={person.gender}
          age={person.age}
          eyeColor={person.eye_color}
          hairColor={person.hair_color}
        />
      </>
    );
  });

  return (
    <div className="container">
      <Header />

      <div className="btn-container d-flex align-items-center justify-content-center mt-5">
        <button
          className="films-btn generate-btn"
          onClick={() => setCurrentDisplay("films")}
        >
          Load Films
        </button>
        <button
          className="people-btn generate-btn"
          onClick={() => setCurrentDisplay("people")}
        >
          Load People
        </button>
      </div>

      <div className="row">
        {currentDisplay === "homepage"
          ? showHomepage
          : currentDisplay === "films"
          ? showFilms
          : currentDisplay === "people"
          ? showPeople
          : null}
      </div>
    </div>
  );
};

export default App;
