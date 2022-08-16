import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		<Link to="/">Home</Link>
		</li>
		<li>
		<Link to="/about">About</Link>
		</li>
		<li>
		<Link to="/contactus">Contact Us</Link>
		</li>
		<li>
		<Link to="/page1">Page 1</Link>
		</li>
		<li>
		<Link to="/page2">Page 2</Link>
		</li>
	</ul>
	</div>
);
};

export default Home;
