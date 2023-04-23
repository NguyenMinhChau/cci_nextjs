import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';

const cx = className.bind(styles);

function ScrollToTop() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setOpen(true);
			} else {
				setOpen(false);
			}
		});
		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);
	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<>
			{open && (
				<div
					className={`${cx('container')}`}
					onClick={handleScrollToTop}
				>
					<i class="fa-solid fa-chevron-up"></i>
				</div>
			)}
		</>
	);
}

export default ScrollToTop;
