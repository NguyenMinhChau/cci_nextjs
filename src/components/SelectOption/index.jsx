import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import ArrowSelect from '../../assets/images/application/arrow_select.png';

const cx = classNames.bind(styles);
function SelectOptionCP({
	dataList,
	label,
	placeholder = 'Select',
	value,
	onClick,
	openSelectList,
	setOpenSelectList,
	classContainer,
}) {
	const classedContainer = cx('container', classContainer);
	return (
		<div className={classedContainer}>
			{label && <label className={`${cx('label')}`}>{label}</label>}
			<div className={`${cx('select')}`} onClick={setOpenSelectList}>
				<div className={`${cx('select_value')}`}>
					{value || placeholder}
				</div>
				<div className={`${cx('select_icon')}`}>
					<img
						src={ArrowSelect}
						alt=""
						title=""
						className={`${cx('arrow')}`}
					/>
				</div>
				{openSelectList && (
					<div className={`${cx('select_list_container')}`}>
						{dataList.map((item) => {
							return (
								<div
									key={item.id}
									className={`${cx('select_item')}`}
									onClick={() => {
										setOpenSelectList();
										onClick(item);
									}}
								>
									{item?.name}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default SelectOptionCP;
