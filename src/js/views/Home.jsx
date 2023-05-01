import React from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid bod d-inline-flex justify-content-center">
      <Link className="card mcard text-bg-dark mx-3 align-items-center" to="characters">
        <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay row align-items-center">
            <h4 className="text-center">People</h4>
        </div>
      </Link>


      <Link className="card mcard text-bg-dark mx-3" to="/planets">
        <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay row align-items-center">
          <h4 className="text-center">Planets</h4>
        </div>
      </Link>

      <Link className="card mcard text-bg-dark mx-3" to="/ships">
        <img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay row align-items-center">
          <h4 className="text-center">Ships</h4>
        </div>
      </Link>
    </div>
  );
};

export { Home };
