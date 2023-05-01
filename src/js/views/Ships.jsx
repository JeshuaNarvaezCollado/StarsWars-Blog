import React, { useState, useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

const ShipCards = () => {
	const [aux, setaux] = useState("")
	const { store, actions } = useContext(Context)
			
	const Checker = () => {
		if  (!localStorage.getItem("ships")) {
				setTimeout(function(){Checker()}, 100)
		}
		else {
			setaux(JSON.parse(localStorage.getItem("ships")))
		}
	}

	if (aux == "") {
		Checker()
	}
	
	let prev = store.Favorites

	let inside = ""
	if (Array.isArray(aux)) {
		 inside = aux.map((e, i) => <div className="card m-1 bg-black" key={"S"+i}>
		<img src={"https://starwars-visualguide.com/assets/img/starships/"+actions.getUID(e, "starships")+".jpg"} onError={actions.getLoad} className="card-img-top" alt="..."/>
		<div className="card-body  d-flex flex-column">
	  	<h5 className="card-title">{e.name}</h5>
	  	<div className="mt-auto d-inline-flex justify-content-between">
			<Link to={"/ships/"+i} className="btn btn-primary">Details</Link>
			<button className={"btn btn-outline-warning shadow-none" + (actions.checkFav("S"+i, prev) ? " active" : "")} data-bs-toggle="button" aria-pressed={actions.checkFav("S"+i, prev) ? "True" : "False"} onClick={() => {actions.setFav("S"+i, prev, e.name, "ships", i)}}><i className="far fa-heart fa-lg"></i></button>
			</div>
		</div>
  	</div>)}


return (
	<div className="bod overflow-x-scroll">
		<div className="overflow-x-scroll d-inline-flex">
		{aux == "" ? store.Loader : inside}
		</div>
	</div>
)}

export { ShipCards }