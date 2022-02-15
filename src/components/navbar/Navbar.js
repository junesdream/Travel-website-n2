import React, { useState } from 'react'
import './Navbar.css';
import { FaBars, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa';
import { GiMountains } from "react-icons/gi";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [ nav, setNav ] = useState(false);
	const [slide, setSlide] = useState(false);

    const handleNav = () => {
		setNav(!nav)
		setSlide(!slide)
	};

	const handleClose = () => {
		setNav(!nav)
	}
	

  return (
		<div className="navbar">
			<div className="container">
				<div className={slide ? 'logo slide-right' : 'logo'}>
				<a href="/"> <Link onClick={handleClose} activeClass="active" to="wood" spy={true} smooth={true} offset={50} duration={500}><h1>Rainbow</h1></Link>  </a>	
				</div>

				<ul className={nav ? "nav-menu active" : "nav-menu"}>
					<li><a href="/"><Link onClick={handleClose} activeClass="active" to="wood" spy={true} smooth={true} offset={50} duration={500}>Wood Mountain</Link></a></li>
					<li><a href="/"> <Link onClick={handleClose} activeClass="active" to="water" spy={true} smooth={true} offset={50} duration={500}>Water Mountain</Link></a></li>
					<li><a href="/"><Link onClick={handleClose} activeClass="active" to="soil" spy={true} smooth={true} offset={50} duration={500}>Soil Mountain</Link></a></li>
					<li><a href="/"><Link onClick={handleClose} activeClass="active" to="snow" spy={true} smooth={true} offset={50} duration={500}>Snow Mountain</Link></a></li>
					<li><a href="/"><Link onClick={handleClose} activeClass="active" to="jungle" spy={true} smooth={true} offset={50} duration={500}>Jungle Mountain</Link></a></li>
					<li><a href="/"><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link></a></li>


					<div className="mobile-menu">
						<button>Reservation</button>
						<button>Account</button>
						<div className="social-icons">
							<FaFacebook />
							<FaInstagram />
							<GiMountains />
						</div>
					</div>
				</ul>

				<ul className="nav-menu hide">
					<li>
						<a href="/">Ticket</a>
					</li>
					<li><a href="/"><Link onClick={handleClose} activeClass="active" to="account" spy={true} smooth={true} offset={50} duration={500}>Account</Link></a></li>
				</ul>

				<div className="hamburger" onClick={handleNav} >
					{nav ? <FaTimes size={20} /> : <FaBars size={20} />}
				</div>

			</div>
		</div>
  );
}

export default Navbar