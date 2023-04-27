/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { InputCp } from '../';
import LogoCompany from '../../assets/images/logo/logo_cci.png';
import routers from '../../routers/router';

const cx = className.bind(styles);

function Header() {
	const [sticky, setSticky] = useState('');
	const [openMenuMobile, setOpenMenuMobile] = useState(false);
	const navigate = useNavigate();
	const handleToggleMenu = () => {
		setOpenMenuMobile(!openMenuMobile);
	};
	const handleSearch = () => {
		navigate(routers.search);
		setOpenMenuMobile(false);
	};
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setSticky('sticky');
			} else {
				setSticky('');
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className={`${cx('container', sticky)}`}>
			<div className={`${cx('logo_container')}`}>
				<Link to={routers.home}>
					<img
						src={LogoCompany}
						alt="image"
						className={`${cx('image')}`}
					/>
				</Link>
				<div
					className={`${cx('menu_icon')}`}
					onClick={handleToggleMenu}
				>
					{!openMenuMobile ? (
						<i class="fa-solid fa-bars"></i>
					) : (
						<i class="fa-solid fa-xmark"></i>
					)}
				</div>
			</div>
			<div
				className={`${cx(
					'nav_container',
					!openMenuMobile ? 'hide' : 'open',
				)}`}
			>
				<ul>
					<NavLink
						to={routers.home}
						className={(nav) =>
							cx('nav_item', {
								active: nav.isActive,
							})
						}
						onClick={handleToggleMenu}
					>
						CCI
					</NavLink>
					<NavLink
						to={routers.application}
						className={(nav) =>
							cx('nav_item', {
								active: nav.isActive,
							})
						}
						onClick={handleToggleMenu}
					>
						Application
					</NavLink>
					<NavLink
						to={routers.contactus}
						className={(nav) =>
							cx('nav_item', {
								active: nav.isActive,
							})
						}
						onClick={handleToggleMenu}
					>
						Contact us
					</NavLink>
					<div className={`${cx('search_container')}`}>
						<InputCp
							placeholder="Search"
							classInput={`${cx('input_border')}`}
						/>
						<div
							className={`${cx('search_icon')}`}
							onClick={handleSearch}
						>
							<i class="fa-solid fa-magnifying-glass"></i>
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default Header;
