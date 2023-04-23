import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function InputCp(
	{
		placeholder,
		typeInput = 'text',
		value,
		pattern,
		label,
		onChange,
		classContainer,
		classInput,
	},
	ref,
) {
	const classedContainer = cx('container', classContainer);
	const classedInput = cx('input', classInput);
	return (
		<div className={classedContainer}>
			<div className={`${cx('input_container')}`}>
				{label && <label className={`${cx('label')}`}>{label}</label>}
				<input
					type={typeInput}
					placeholder={placeholder}
					className={classedInput}
					onChange={onChange}
					value={value}
					pattern={pattern}
					ref={ref}
				/>
			</div>
		</div>
	);
}

export default forwardRef(InputCp);
