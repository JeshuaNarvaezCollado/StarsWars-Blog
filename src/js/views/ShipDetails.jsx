import React, { useState, useContext, useEffect } from "react";
import "../../styles/index.css";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext.js"
import "../../styles/index.css";


function ShipDetails() {
  let [aux, setaux] = useState("")	
	const { store, actions } = useContext(Context)

    let location = useLocation();
      location = location.pathname.split('/ships/')
      location = parseInt(location[1])

    const Checker = () => {
      if  (!localStorage.getItem("ships")) {
          setTimeout(function(){Checker()}, 100)
      }
      else {
        setaux(JSON.parse(localStorage.getItem("ships"))[location])
      }
    }

    let imgUID = ""
    if (aux == "") {
      Checker()
    }
    else {
      imgUID = actions.getUID(aux, "starships")
    }

    useEffect(()=>{
      setaux(JSON.parse(localStorage.getItem("ships"))[location])
    }, [location])

  return (
    <div className="container-fluid bod d-inline-flex justify-content-center">
      <div className="card mcard bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/starships/"+imgUID+".jpg"} onError={actions.getLoad} className="img-fluid rounded-start" alt="..." />
          </div>
            <div className="card-body col-md-8 d-flex flex-column">
                <h5 className="card-title">{aux.name}</h5>
                <p className="card-text">
               Luke Skywalker blew up the information, the Jedi are inputting the information ait may take some time
              </p>
                 <ul className="list-group list-group-flush">
                  <li className="lis">Model: {aux.model}</li>
                  <li className="lis">Manufacturer: {aux.manufacturer}</li>
                  <li className="lis">Length: {aux.length}</li>
                  <li className="lis">Class: {aux.starship_class}</li>
                  <li className="lis">Crew: {aux.crew}</li>
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

export { ShipDetails };
