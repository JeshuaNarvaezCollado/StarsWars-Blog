import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const Navbar = () => {
  const { store, actions } = useContext(Context)

  let lista = store.Favorites
  let inside = lista.map((e, i) => 
    <li key={i}><Link to={e.Type+"/"+e.To} className="dropdown-item" href="#">
      {e.Name}
    </Link></li>
  )

  return (
    <nav className="navbar navbar-expand-lg bg-black fixed-top">
      <div className="container-fluid row justify-content-between p-0 ps-2">
		<Link id="banner" to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
              width="auto"
              height="100"
            />
          </span>
        </Link>
        <div className="collapse navbar-collapse col-4 justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">
                People
			  </Link>
            </li>
            <li className="nav-item">
			<Link className="nav-link" to="/planets">
                Planets
			  </Link>
            </li>
			<li className="nav-item">
			<Link className="nav-link" to="/ships">
                Ships
			  </Link>
            </li>
            <li className="nav-item dropdown dropstart">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>
              <ul className="dropdown-menu">
                {inside}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
