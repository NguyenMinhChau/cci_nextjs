import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import LogoCompany from '../../assets/images/logo/logo_cci.png';
import {
	AMLPolicy,
	Financial,
	KYCPolicy,
	PersonalDetail,
} from '../../components';

const cx = classNames.bind(styles);

function ApplicationPage() {
	useEffect(() => {
		document.title = `Application - ${process.env.REACT_APP_TITLE}`;
	}, []);
	return (
		<div className={`${cx('container')}`}>
			<div className={`${cx('application_header')}`}>
				<h2>Company’s Member Application</h2>
				<h2 style={{ margin: '12px 0' }}>
					<b>(to be determined)</b>
				</h2>
				<p className={`${cx('header_sub')}`}>
					In future when we are ready to accept company’s member for
					trading, we will announce in this website, then you need to
					apply by filling in the following application forms. Our
					company reserves the right to reject any application for
					trading by any individual or organization without providing
					a reason.
				</p>
			</div>
			<div className={`${cx('application_KYC_container')}`}>
				<div
					className={`${cx(
						'application_KYC_left_container',
						'KYC_item',
					)}`}
				>
					<img
						src={LogoCompany}
						alt=""
						title=""
						className={`${cx('logo_company')}`}
					/>
					<div className={`${cx('KYC_left_title')}`}>
						FILL IN YOUR PERSONAL DETAILS
					</div>
					<div className={`${cx('divider')}`}></div>
					<div className={`${cx('step_KYC_container')}`}>
						<ol>
							<li>Your Personal Details</li>
							<li>Financial Information</li>
							<li>Our KYC POLICY</li>
							<li>Our AML Policy</li>
						</ol>
					</div>
				</div>
				<div
					className={`${cx(
						'application_KYC_right_container',
						'KYC_item',
					)}`}
				>
					<PersonalDetail />
					<Financial classConainer={`${cx('KYC_container')}`} />
					<KYCPolicy classConainer={`${cx('KYC_container')}`} />
					<AMLPolicy classConainer={`${cx('KYC_container')}`} />
					<div className={`${cx('KYC_end_text')}`}>
						We will not accept any customer without ALL information
						above
					</div>
				</div>
			</div>
		</div>
	);
}

export default ApplicationPage;
