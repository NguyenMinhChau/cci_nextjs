import React from 'react';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import LogoImage from '../../assets/images/logo/logo_cci.png';

const cx = className.bind(styles);

function Footer() {
	return (
		<div className={`${cx('container')}`}>
			<div className={`${cx('left_container')}`}>
				<div className={`${cx('logo_container')}`}>
					<img
						src={LogoImage}
						alt=""
						title=""
						className={`${cx('logo')}`}
					/>
					<p>© {new Date().getFullYear()}</p>
				</div>
				<div className={`${cx('nav_container')}`}>
					<ul>
						<Link to="/" className={`${cx('nav_item')}`}>
							Privacy Policy
						</Link>
						<Link to="/" className={`${cx('nav_item')}`}>
							Terms of Business
						</Link>
						<Link to="/" className={`${cx('nav_item')}`}>
							Website Disclaimer
						</Link>
						<Link to="/" className={`${cx('nav_item')}`}>
							Risk Warning
						</Link>
					</ul>
				</div>
			</div>
			<div className={`${cx('right_container')}`}>
				<div className={`${cx('title')}`}>Contact Us</div>
				<div className={`${cx('divider')}`}></div>
				<div style={{ marginBottom: '20px' }}>
					<p className={`${cx('desc_title')}`}>
						CCI WORLDWIDE LIMITED.
					</p>
					<p className={`${cx('desc_child')}`}>
						Unit 2403, Tung Wai Commercial Building, 109-111
						Gloucester Rd, Wan Chai, HONG KONG
					</p>
					<p className={`${cx('desc_child')}`}>CR Number : 3223863</p>
					<p className={`${cx('desc_child')}`}>Phone: +85234669588</p>
					<p className={`${cx('desc_child')}`}>
						Email: Cciworldwide2023@gmail.com
					</p>
					<p className={`${cx('desc_child')}`}>
						Website: https://crystal-investment.com
					</p>
				</div>
				<div>
					<p className={`${cx('desc_child')}`}>
						<b>Risk Warning: </b>
						Trading Derivatives carries a high level of risk to your
						capital and you should only trade with money you can
						afford to lose. Trading Derivatives may not be suitable
						for all investors, so please ensure that you fully
						understand the risks involved and seek independent
						advice if necessary.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
