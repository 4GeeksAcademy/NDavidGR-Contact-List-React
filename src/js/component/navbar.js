import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3 navColor">
				<Link to="/">
					<span className="navbar-brand ps-5 mb-0 h1" style={{ color: 'white'}} >Contact List App | React and Context</span>
				</Link>
				<div className="ml-auto"></div>
			</nav>
		);
	}
}