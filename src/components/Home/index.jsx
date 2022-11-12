import logoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import "../Layout/index.scss";
import "./index.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Lea <img src={logoTitle} alt="dev" />
          <br />
          Creative Web Developer
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
