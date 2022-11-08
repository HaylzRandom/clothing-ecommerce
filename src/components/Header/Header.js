import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Styles
import './header.css';

// Images
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';

const nav__links = [
	{
		path: 'home',
		display: 'Home',
	},
	{
		path: 'shop',
		display: 'Shop',
	},
	{
		path: 'cart',
		display: 'Cart',
	},
];

const Header = () => {
	return (
		<header className='header'>
			<Container>
				<Row>
					<div className='nav__wrapper'>
						<div className='logo'>
							<img src={logo} alt='Store Logo' />
							<div>
								<h1>Clothing E-Commerce</h1>
								<p>Since 2020</p>
							</div>
						</div>

						<div className='navigation'>
							<ul className='menu'>
								{nav__links.map((link, idx) => (
									<li className='nav__item' key={idx}>
										<NavLink
											to={link.path}
											className={(navClass) =>
												navClass.isActive ? 'nav__active' : ''
											}
										>
											{link.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						<div className='nav__icons'>
							<span className='fav__icon'>
								<i className='ri-heart-line'></i>
								<span className='badge'>1</span>
							</span>
							<span className='cart__icon'>
								<i className='ri-shopping-bag-line'></i>
								<span className='badge'>1</span>
							</span>

							<span>
								<motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt='' />
							</span>
						</div>

						<div className='mobile__menu'>
							<span>
								<i className='ri-menu-line'></i>
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};
export default Header;
