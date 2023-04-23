import React from 'react';
import classNames from 'classnames/bind';
import { InputCp } from '../../';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function AMLPolicy({ classConainer, classContent }) {
	const classedContainer = cx('container', classConainer);
	const classedContent = cx('content', classContent);
	return (
		<div className={classedContainer}>
			<h3 className={`${cx('header')}`}>4 – Our AML POLICY</h3>
			<div className={`${cx('divider')}`}></div>
			<div className={classedContent}>
				<p className={`${cx('aml_desc')}`}>
					Bank details of your company, which will be used for
					settlements (if you are going to pay/withdraw in fiat). If
					you plan to use more than one account for settlements,
					please specify all accounts which will be used. You are
					solely responsible for providing timely changes regarding
					bank details of your company which will be used for
					settlements:
				</p>
				<InputCp label="Beneficiary name:" />
				<InputCp label="Beneficiary’s address:" />
				<InputCp label="Beneficiary account No:" />
				<InputCp label="Beneficiary’s bank:" />
				<InputCp label="Bank address:" />
				<InputCp label="SWIFT:" />
				<InputCp label="Bank relation manager name:" />
			</div>
		</div>
	);
}

export default AMLPolicy;
