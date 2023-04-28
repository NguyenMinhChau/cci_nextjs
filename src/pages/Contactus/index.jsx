import React, { useEffect } from 'react';
import className from 'classnames/bind';
import { ButtonCP, InputCp, TextareaCP } from '../../components/';
import styles from './styles.module.css';

const cx = className.bind(styles);

function ContactUsPage() {
	useEffect(() => {
		document.title = `Contact us - ${process.env.REACT_APP_TITLE}`;
	}, []);
	return (
		<div className={`${cx('container')}`}>
			<div className={`${cx('contact_info_container')}`}>
				<div
					className={`${cx(
						'info_text_container',
						'contact_info_item',
					)}`}
				>
					<h3 className={`${cx('title')}`}>Contact Information</h3>
					<div style={{ margin: '15px 0', fontSize: '14px' }}>
						<b>AIKING INVESTMENT.</b>.
					</div>
					<p className={`${cx('sub_desc')}`}>
						Phone: <a href="tel:0345335422">0345 335 422</a>
					</p>
					<p className={`${cx('sub_desc')}`}>
						Email:{' '}
						<a href="mailto:aikinginvestment@gmail.com">
							aikinginvestment@gmail.com
						</a>
					</p>
					<p
						className={`${cx('sub_desc')}`}
						style={{ margin: '15px 0' }}
					>
						<b>Head Office:</b> Block A, Rivergate Building, 151-155
						Ben Van Don, Ward 6, District 4, Ho Chi Minh City, Viet
						Nam
					</p>
					<p
						className={`${cx('sub_desc')}`}
						style={{ margin: '15px 0' }}
					>
						<b>WebSite:</b>{' '}
						<a
							href="https://fiam.vn"
							target="_blank"
							rel="noreferrer"
						>
							https://fiam.vn
						</a>
					</p>
				</div>
				<div
					className={`${cx(
						'info_form_container',
						'contact_info_item',
					)}`}
				>
					<h3 className={`${cx('title')}`}>Contact Us</h3>
					<InputCp placeholder="Enter Your Name..." />
					<InputCp placeholder="Enter Your Email..." />
					<InputCp placeholder="Reference Number..." />
					<InputCp placeholder="Content..." />
					<TextareaCP placeholder="More information..." />
					<ButtonCP className={`${cx('btn')}`}>Send to us</ButtonCP>
				</div>
			</div>
		</div>
	);
}

export default ContactUsPage;
