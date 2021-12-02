import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.scss";

const Header = () => {
	return (
		<header className="header">
			{/* using breakpoints to show navbar specific for mobile view
			https://getbootstrap.com/docs/4.0/utilities/display/ */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-none d-lg-flex">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/season1">Season 1</Link>
						</li>
						<li className="nav-item">
							<Link to="/season2">Season 2</Link>
						</li>
						<li className="nav-item">
							<Link to="/quotes">Quotes</Link>
						</li>
						<li className="nav-item">
							<Link to="/characters">Characters</Link>
						</li>
						<li className="nav-item">
							<Link to="/vehicles">Vehicles</Link>
						</li>
						<li className="nav-item">
							<Link to="/credits">Credits</Link>
						</li>
					</ul>
				</div>
			</nav>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-lg-none">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#mandalorianToggler"
					aria-controls="mandalorianToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="mandalorianToggler">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li
							className="nav-item active"
							data-toggle="collapse"
							data-target="#mandalorianToggler"
						>
							<Link to="/">Home</Link>
						</li>
						<li
							className="nav-item"
							data-toggle="collapse"
							data-target="#mandalorianToggler"
						>
							<Link to="/season1">Season1</Link>
						</li>
						<li
							className="nav-item"
							data-toggle="collapse"
							data-target="#mandalorianToggler"
						>
							<Link to="/season2">Season2</Link>
						</li>
						<li
							className="nav-item"
							data-toggle="collapse"
							data-target="#mandalorianToggler"
						>
							<Link to="/quotes">Quotes</Link>
						</li>
						<li
							className="nav-item"
							data-toggle="collapse"
							data-target="#mandalorianToggler"
						>
							<Link to="/characters">Characters</Link>
						</li>
						<li
							className="nav-item"
							data-toggle="collapse"
							data-target="#mandalorianToggler"
						>
							<Link to="/vehicles">Vehicles</Link>
						</li>
						<li
							className="nav-item"
							data-toggle="collapse"
							data-target="#mandalorianToggler"
						>
							<Link to="/credits">Credits</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
