import logoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import "../Layout/index.scss";
import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect } from "react";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["L", "e", "a"];
  const jobArray = [
    "C",
    "r",
    "e",
    "a",
    "t",
    "i",
    "v",
    "e",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _15`}> </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={16}
          />{" "}
          <img src={logoTitle} alt="dev" />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript / React </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
