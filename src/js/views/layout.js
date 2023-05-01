import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CharCards } from "./views/characters";
import { CharDetails } from "./views/CharDetails.jsx";
import { PlanCards } from "./views/Planets.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/Home.jsx";
import { ShipCards } from "./views/Ships.jsx";
import { PlanDetails } from "./views/PlanDetails.jsx";
import { ShipDetails } from "./views/ShipDetails.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/characters" element={<CharCards/>} />
						<Route path="/characters/:theid" element={<CharDetails />} />
						<Route path="/planets" element={<PlanCards />} />
						<Route path="/planets/:theid"  element={<PlanDetails />} />
						<Route path="/ships" element={<ShipCards/>} />
						<Route path="/ships/:theid" element={<ShipDetails />} />
						<Route path="*" element={<h1 className="bod">Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
