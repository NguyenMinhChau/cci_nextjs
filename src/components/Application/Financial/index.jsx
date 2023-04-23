import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { InputCp, SelectOptionCP } from '../..';

const cx = classNames.bind(styles);
const SELECT_LIST_EMPLOYMENT = [
	{ id: 1, name: 'Employed' },
	{ id: 2, name: 'Seft-Employed' },
	{ id: 3, name: 'Retired' },
	{ id: 4, name: 'Student' },
	{ id: 5, name: 'Unemployed' },
];
const SELECT_LIST_AMOUNT_USD = [
	{ id: 1, name: '0 - 20,000' },
	{ id: 2, name: '20,001 - 50,000' },
	{ id: 3, name: '50,001 - 100,000' },
	{ id: 4, name: 'More than 100,000' },
];
const SELECT_LIST_PURPOSE_TRANSACTION = [
	{ id: 1, name: 'Specultative' },
	{ id: 2, name: 'Hedging' },
	{ id: 3, name: 'Investment' },
	{ id: 4, name: 'Risk management' },
	{ id: 5, name: 'Diversification' },
];
const SELECT_LIST_ANNUAL_INCOME = [
	{ id: 1, name: '0 - 50,000' },
	{ id: 2, name: '50,001 - 100,000' },
	{ id: 3, name: '100,001 - 250,000' },
	{ id: 4, name: 'More than 250,000' },
];
const SELECT_LIST_ESTIMATED = [
	{ id: 1, name: '0 - 50,000' },
	{ id: 2, name: '50,001 - 100,000' },
	{ id: 3, name: '100,001 - 250,000' },
	{ id: 4, name: 'More than 250,000' },
];
const SELECT_LIST_CFDs = [
	{ id: 1, name: 'Yes' },
	{ id: 2, name: 'No' },
];
const SELECT_LIST_TRADING_EXPERIENCE = [
	{ id: 1, name: 'Beginner' },
	{ id: 2, name: 'Intermediate' },
	{ id: 3, name: 'Advanced' },
];
const SELECT_LIST_DERIVATIVE = [
	{ id: 1, name: 'Yes' },
	{ id: 2, name: 'No' },
];
const SELECT_LIST_FINANCIAL_SERVICES = [
	{ id: 1, name: 'Yes' },
	{ id: 2, name: 'No' },
];
function Financial({ classConainer }) {
	const [openSelectList, setOpenSelectList] = useState(false);
	const [openAmountUSD, setOpenAmountUSD] = useState(false);
	const [openPurposeTransaction, setOpenPurposeTransaction] = useState(false);
	const [openAnnualIncome, setOpenAnnualIncome] = useState(false);
	const [openEstimated, setOpenEstimated] = useState(false);
	const [openCFDs, setOpenCFDs] = useState(false);
	const [openTradingExperience, setOpenTradingExperience] = useState(false);
	const [openDerivative, setOpenDerivative] = useState(false);
	const [openFinancialServices, setOpenFinancialServices] = useState(false);
	const [employed, setEmployed] = useState('');
	const [amountUsd, setamountUsd] = useState('');
	const [purposeTransaction, setpurposeTransaction] = useState('');
	const [annualIncome, setannualIncome] = useState('');
	const [estimated, setestimated] = useState('');
	const [cfds, setcfds] = useState('');
	const [tradingExperience, settradingExperience] = useState('');
	const [derivative, setderivative] = useState('');
	const [financialServices, setfinancialServices] = useState('');
	const handleSetOpenSelectList = () => {
		setOpenSelectList(!openSelectList);
	};
	const handleSetOpenAmountUSD = () => {
		setOpenAmountUSD(!openAmountUSD);
	};
	const handleSetOpenPurposeTransaction = () => {
		setOpenPurposeTransaction(!openPurposeTransaction);
	};
	const handleSetOpenAnnualIncome = () => {
		setOpenAnnualIncome(!openAnnualIncome);
	};
	const handleSetOpenEstimated = () => {
		setOpenEstimated(!openEstimated);
	};
	const handleSetOpenCFDs = () => {
		setOpenCFDs(!openCFDs);
	};
	const handleSetOpenTradingExperience = () => {
		setOpenTradingExperience(!openTradingExperience);
	};
	const handleSetOpenDerivative = () => {
		setOpenDerivative(!openDerivative);
	};
	const handleSetOpenFinancialServices = () => {
		setOpenFinancialServices(!openFinancialServices);
	};
	const handleSetEmployed = (item) => {
		setEmployed(item?.name);
	};
	const handleSetAmoutUSD = (item) => {
		setamountUsd(item?.name);
	};
	const handleSetPurposeTransaction = (item) => {
		setpurposeTransaction(item?.name);
	};
	const handleSetAnnualIncome = (item) => {
		setannualIncome(item?.name);
	};
	const handleSetEstimated = (item) => {
		setestimated(item?.name);
	};
	const handleSetCFDs = (item) => {
		setcfds(item?.name);
	};
	const handleSetTradingExperience = (item) => {
		settradingExperience(item?.name);
	};
	const handleSetDerivative = (item) => {
		setderivative(item?.name);
	};
	const handleSetFinancialServices = (item) => {
		setfinancialServices(item?.name);
	};
	const classedContainer = cx('container', classConainer);
	return (
		<div className={classedContainer}>
			<h3 className={`${cx('header')}`}>2 – FINANCIAL INFORMATION</h3>
			<div className={`${cx('divider')}`}></div>
			<div style={{ marginTop: '70px' }}>
				<SelectOptionCP
					dataList={SELECT_LIST_EMPLOYMENT}
					label="Employment-Status"
					openSelectList={openSelectList}
					setOpenSelectList={handleSetOpenSelectList}
					onClick={handleSetEmployed}
					value={employed}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_AMOUNT_USD}
					label="Investment Amount (USD)"
					openSelectList={openAmountUSD}
					setOpenSelectList={handleSetOpenAmountUSD}
					onClick={handleSetAmoutUSD}
					value={amountUsd}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_PURPOSE_TRANSACTION}
					label="Intended purpose and nature of transactions:"
					openSelectList={openPurposeTransaction}
					setOpenSelectList={handleSetOpenPurposeTransaction}
					onClick={handleSetPurposeTransaction}
					value={purposeTransaction}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_ANNUAL_INCOME}
					label="What is your annual income?"
					openSelectList={openAnnualIncome}
					setOpenSelectList={handleSetOpenAnnualIncome}
					onClick={handleSetAnnualIncome}
					value={annualIncome}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_ESTIMATED}
					label="What is your estimated net worth? ( Total Assets - Total Liabilities):"
					openSelectList={openEstimated}
					setOpenSelectList={handleSetOpenEstimated}
					onClick={handleSetEstimated}
					value={estimated}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_CFDs}
					label="I have experience trading Forex, Contracts for Difference (CFDs) or other Derivative Products"
					openSelectList={openCFDs}
					setOpenSelectList={handleSetOpenCFDs}
					onClick={handleSetCFDs}
					value={cfds}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_TRADING_EXPERIENCE}
					label="What is your forex trading experience?"
					openSelectList={openTradingExperience}
					setOpenSelectList={handleSetOpenTradingExperience}
					onClick={handleSetTradingExperience}
					value={tradingExperience}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_DERIVATIVE}
					label="Derivative products are suitable as part of my investment objectives and risk appetite therefore, I am able to assess the risk involved in trading them, including the possibility of losing all of my invested capital"
					openSelectList={openDerivative}
					setOpenSelectList={handleSetOpenDerivative}
					onClick={handleSetDerivative}
					value={derivative}
				/>
				<SelectOptionCP
					dataList={SELECT_LIST_FINANCIAL_SERVICES}
					label="I have experience and/or qualifications relevant to financial services that help me understand the risks associated with using your services and trading derivative products"
					openSelectList={openFinancialServices}
					setOpenSelectList={handleSetOpenFinancialServices}
					onClick={handleSetFinancialServices}
					value={financialServices}
				/>
				<InputCp
					placeholder="0"
					label="What is the amount in USD are you ready to invest?"
				/>
				<InputCp label="What is the source of this fund ?" />
			</div>
		</div>
	);
}

export default Financial;
