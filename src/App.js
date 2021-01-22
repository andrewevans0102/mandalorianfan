import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./styles/styles.scss";
import {
	SeasonPage,
	HomePage,
	QuotesPage,
	CharactersPage,
	CreditsPage,
	VehiclesPage,
} from "./pages";
import { Header } from "./components";
import ReactGA from "react-ga";
import InitializeReactGA from "./helper/googleAnalytics";

function usePageViews() {
	let location = useLocation();
	useEffect(() => {
		InitializeReactGA(ReactGA);
		ReactGA.set({ page: location.pathname });
		ReactGA.pageview(location.pathname);
	}, [location]);
}

export default function App() {
	usePageViews();
	return (
		<main>
			<Header />
			<Switch>
				<Route path="/season1">
					<SeasonPage showSeason={"season1"} />
				</Route>
				<Route path="/season2">
					<SeasonPage showSeason={"season2"} />
				</Route>
				<Route path="/quotes">
					<QuotesPage />
				</Route>
				<Route path="/characters">
					<CharactersPage />
				</Route>
				<Route path="/vehicles">
					<VehiclesPage />
				</Route>
				<Route path="/credits">
					<CreditsPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</main>
	);
}
