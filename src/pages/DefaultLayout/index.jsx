import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { Footer, Header } from '../../components';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	const [sticky, setSticky] = useState('');
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
		<div className={`${cx('container')}`}>
			<Header />
			<div className={`${cx('content', sticky)}`}>{children}</div>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
