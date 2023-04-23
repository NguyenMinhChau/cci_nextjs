import React, { useEffect } from 'react';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
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
						<b>CCI WORLDWIDE LIMITED</b>.
					</div>
					<p className={`${cx('sub_desc')}`}>Phone: +85234669588</p>
					<p className={`${cx('sub_desc')}`}>
						Email: Cciworldwide2023@gmail.com
					</p>
					<p
						className={`${cx('sub_desc')}`}
						style={{ margin: '15px 0' }}
					>
						<b>Head Office:</b> Unit 2403, Tung Wai Commercial
						Building, 109-111 Gloucester Rd, Wan Chai, HONG KONG
					</p>
					<p
						className={`${cx('sub_desc')}`}
						style={{ margin: '15px 0' }}
					>
						<b>WebSite:</b>{' '}
						<Link
							to="https://crystal-investment.com"
							target="_blank"
						>
							https://crystal-investment.com
						</Link>
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
