import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import styles from './styles.module.css';
import { ButtonCP, SelectOptionCP } from '../../components';
import ImageProductSeller from '../../assets/images/logo/logo_cci.png';
const cx = className.bind(styles);
const FILTER_LIST = [
	{ id: 1, name: 'Sort by popularity' },
	{ id: 2, name: 'Sort by latest' },
	{ id: 3, name: 'Sort by price: low to high' },
	{ id: 4, name: 'Sort by price: high to low' },
];
function SearchPage() {
	const [modal, setModal] = useState(false);
	const [openFilter, setopenFilter] = useState(false);
	const [filter, setFilter] = useState('');
	const handleModal = () => {
		setModal(!modal);
	};
	const handleOpenFilter = () => {
		setopenFilter(!openFilter);
	};
	const handleFilter = (item) => {
		setFilter(item?.name);
	};
	useEffect(() => {
		document.title = `Search - ${process.env.REACT_APP_TITLE}`;
	}, []);
	return (
		<div className={`${cx('container')}`}>
			<div className={`${cx('search_header')}`}>
				<div className={`${cx('menu')}`} onClick={handleModal}>
					<div className={`${cx('menu_icon')}`}>
						<i class="fa-solid fa-bars"></i>
					</div>
					<div className={`${cx('menu_text')}`}>Menu</div>
				</div>
				<div className={`{${cx('filter_container')}}`}>
					<SelectOptionCP
						placeholder="Sort by latest"
						dataList={FILTER_LIST}
						openSelectList={openFilter}
						setOpenSelectList={handleOpenFilter}
						onClick={handleFilter}
						value={filter}
					/>
				</div>
			</div>
			<div className={`${cx('products_container')}`}>
				<div className={`${cx('products_item')}`}>
					<img
						src={ImageProductSeller}
						alt=""
						title=""
						className={`${cx('image_product_item')}`}
					/>
					<div>
						<p className={`${cx('product_item_sub')}`}>
							Điện mặt trời dân dụng SolarRootstop
						</p>
						<p className={`${cx('product_item_desc')}`}>
							On sait depuis longtemps que travailler avec du
							texte lisible 5
						</p>
					</div>
					<div className={`${cx('like_product_container')}`}>
						<i class="fa-solid fa-heart"></i>
					</div>
				</div>
			</div>
			<div className={`${cx('divider')}`}></div>
			<div className={`${cx('search_footer')}`}>
				<h3 className={`${cx('footer_search_title')}`}>
					Chia sẻ nhu cầu của bạn
				</h3>
				<p className={`${cx('footer_sub')}`}>
					Hãy liên hệ với chúng tôi, mọi mong muốn của bạn đều được
					lắng nghe.
				</p>
				<ButtonCP
					to="tel:0345335422"
					className={`${cx('btn', 'btn_phone')}`}
				>
					0345 335 422
				</ButtonCP>
				<ButtonCP
					to="tel:0345335422"
					className={`${cx('btn', 'btn_customer')}`}
				>
					Yêu cầu tư vấn
				</ButtonCP>
			</div>
			{modal && (
				<div className={`${cx('modal_container')}`}>
					<div
						className={`${cx('modal_icon')}`}
						onClick={handleModal}
					>
						<i class="fa-solid fa-xmark"></i>
					</div>
					<div className={`${cx('modal_content')}`}>
						<div className={`${cx('products_list_container')}`}>
							<h3 className={`${cx('products_list_title')}`}>
								Danh mục sản phẩm
							</h3>
							<ul className={`${cx('products_list')}`}>
								<div className={`${cx('products_list_item')}`}>
									<p className={`${cx('products_name')}`}>
										Điện mặt trời dân dụng SolarRootstop
									</p>
									<p className={`${cx('products_quantity')}`}>
										(7)
									</p>
								</div>
								<div className={`${cx('products_list_item')}`}>
									<p className={`${cx('products_name')}`}>
										Điện mặt trời nối lưới SolarFarm
									</p>
									<p className={`${cx('products_quantity')}`}>
										(8)
									</p>
								</div>
							</ul>
						</div>
						<div className={`${cx('divider')}`}></div>
						<div className={`${cx('products_best_seller')}`}>
							<h3
								className={`${cx(
									'products_best_seller_title',
								)}`}
							>
								Sản phẩm bán chạy
							</h3>
							<ul
								className={`${cx('products_best_seller_list')}`}
							>
								<div
									className={`${cx(
										'products_best_seller_item',
									)}`}
								>
									<img
										src={ImageProductSeller}
										alt=""
										title=""
										className={`${cx('image_best_seller')}`}
									/>
									<p className={`${cx('product_desc')}`}>
										On sait depuis longtemps que travailler
										avec du texte lisible 9
									</p>
								</div>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default SearchPage;
