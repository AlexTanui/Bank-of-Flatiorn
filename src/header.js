import { useRef } from "react";
import image from "../src/img/bankicon.png";
import './index.css';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h2>FLATIORN </h2>
            <img id="logo" src={image} alt="" />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">charges</a>
				<a href="/#">Blog</a>
				<a href="/#">About US</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export default Navbar;