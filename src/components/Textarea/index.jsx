import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function TextareaCP({
	placeholder,
	rows,
	cols,
	value,
	onChange,
	classContainer,
	classTextarea,
}) {
	const classedConatiner = cx('container', classContainer);
	const classedTextarea = cx('textarea', classTextarea);
	return (
		<div className={classedConatiner}>
			<textarea
				placeholder={placeholder}
				rows={rows}
				cols={cols}
				value={value}
				onChange={onChange}
				className={classedTextarea}
			></textarea>
		</div>
	);
}

export default TextareaCP;
