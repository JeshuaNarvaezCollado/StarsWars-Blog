import React, { useState, useContext, useEffect } from "react";
import "../../styles/index.css";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext.js"
import "../../styles/index.css";

function CharDetails() {
  let [aux, setaux] = useState("")	
	const { store, actions } = useContext(Context)

    let location = useLocation();
      location = location.pathname.split('/characters/')
      location = parseInt(location[1])

    const Checker = () => {
      if  (!localStorage.getItem("characters")) {
          setTimeout(function(){Checker()}, 100)
      }
      else {
        setaux(JSON.parse(localStorage.getItem("characters"))[location])
      }
    }

    let imgUID = ""
    if (aux == "") {
      Checker()
    }
    else {
      imgUID = actions.getUID(aux, "people")
    }

    useEffect(()=>{
      setaux(JSON.parse(localStorage.getItem("characters"))[location])
    }, [location])

  return (
    <div className="container-fluid bod d-inline-flex justify-content-center">
      <div className="card mcard bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+imgUID+".jpg"} onError={actions.getLoad} className="img-fluid rounded-start" alt="..." />
          </div>
            <div className="card-body col-md-8 d-flex flex-column">
                <h5 className="card-title">{aux.name}</h5>
                <p className="card-text">
               This information was blown up by the Death Star, Oh no!
              </p>
                 <ul className="list-group list-group-flush">
                  <li className="lis">Height: {aux.height}</li>
                  <li className="lis">Mass: {aux.mass}</li>
                  <li className="lis">Hair color: {aux.hair_color}</li>
                  <li className="lis">Birth Year: {aux.birth_year}</li>
                  <li className="lis">Gender: {aux.gender}</li>
                </ul>
              <p className="card-footer text-end mt-auto">
                <small className="text-muted">May the Force be with you</small>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CharDetails };
