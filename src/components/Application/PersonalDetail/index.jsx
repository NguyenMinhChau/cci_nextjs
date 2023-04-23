import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { InputCp } from '../..';

const cx = classNames.bind(styles);

function PersonalDetail({ classConainer }) {
	const classedContainer = cx('container', classConainer);
	return (
		<div className={classedContainer}>
			<h3 className={`${cx('header')}`}>1 – YOUR PERSONAL DETAILS</h3>
			<div className={`${cx('divider')}`}></div>
			<div style={{ marginTop: '70px' }}>
				<InputCp label="Frist name" />
				<InputCp label="Last name" />
				<InputCp label="Date of birth" typeInput="date" />
				<InputCp label="Email" />
				<InputCp label="Address" />
				<InputCp label="City" />
				<InputCp label="State/Province" />
				<InputCp label="Postal/Zip Code" />
				<InputCp label="Country" />
				<InputCp label="Phone" placeholder="+" />
			</div>
		</div>
	);
}

export default PersonalDetail;
