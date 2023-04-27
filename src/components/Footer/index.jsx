import React from 'react';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import LogoImage from '../../assets/images/logo/logo_cci_trans.png';

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
					<p className={`${cx('desc_title')}`}>AIKING INVESTMENT.</p>
					<p className={`${cx('desc_child')}`}>
						{' '}
						Block A, Tòa nhà Rivergate, 151-155 Bến Vân Đồn, Phường
						6, Quận 4, TP.HCM
					</p>
					{/* <p className={`${cx('desc_child')}`}>CR Number : 3223863</p> */}
					<p className={`${cx('desc_child')}`}>
						Phone: <a href="tel:0345335422">0345 335 422</a>
					</p>
					<p className={`${cx('desc_child')}`}>
						Email:{' '}
						<a href="mailto:aikinginvestment@gmail.com">
							aikinginvestment@gmail.com
						</a>
					</p>
					<p className={`${cx('desc_child')}`}>
						Website:{' '}
						<a
							href="https://fiam.vn"
							target="_blank"
							rel="noreferrer"
						>
							https://fiam.vn
						</a>
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
