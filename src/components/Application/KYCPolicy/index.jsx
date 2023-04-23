import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function KYCPolicy({ classConainer, classContent }) {
	const classedContainer = cx('container', classConainer);
	const classedContent = cx('content', classContent);
	return (
		<div className={classedContainer}>
			<h3 className={`${cx('header')}`}>3 – Our KYC POLICY</h3>
			<div className={`${cx('divider')}`}></div>
			<div className={classedContent}>
				<h3>
					To finalise your application, we are required to verify your
					identity and address
				</h3>
				<h4 style={{ margin: '30px 0' }}>
					Please email to us at Cciworldwide2023@gmail.com:
				</h4>
				<ul className={`${cx('KYC_require_list')}`}>
					<li>The color photo of your passport</li>
					<li>The notarized copy of your passport</li>
					<li>The selfie of you and your passport</li>
					<li>
						Your address proof, such as the utility bills (water,
						electricity, phone, etc…) with clearly mentionned your
						full name and address.
					</li>
				</ul>
			</div>
		</div>
	);
}

export default KYCPolicy;
