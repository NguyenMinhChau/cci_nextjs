import React, { useEffect } from 'react';
import className from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider01 from '../../assets/images/home/slider_01.gif';
import Slider02 from '../../assets/images/home/slider_02.gif';
import Slider03 from '../../assets/images/home/slider_03.gif';
import Slider04 from '../../assets/images/home/slider_04.png';
import BannerImage from '../../assets/images/home/banner_home.png';
import styles from './styles.module.css';

const cx = className.bind(styles);
const URL_IMAGES = [Slider01, Slider02, Slider03, Slider04];

function HomePage() {
	useEffect(() => {
		document.title = `Home page - ${process.env.REACT_APP_TITLE}`;
	}, []);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className={`${cx('container')}`}>
			<div className={`${cx('slider_container')}`}>
				<Slider {...settings}>
					{URL_IMAGES.map((item, index) => {
						return (
							<div
								className={`${cx('slider_image_item')}`}
								key={index}
							>
								<img
									src={item}
									alt=""
									className={`${cx('slider_image')}`}
								/>
							</div>
						);
					})}
				</Slider>
			</div>
			<div className={`${cx('content_home')}`}>
				<h3 className={`${cx('title')}`}>
					We are neither financial nor investment nor trade advisor.
				</h3>
				<p className={`${cx('sub_title')}`}>
					Any information and tools we put or you can find in this
					website are only for our own and private use but should not
					and cannot be construed as or relied on and (for all intents
					and purposes) does not constitute financial, investment, or
					any other form of professional advice to buy, sell or
					otherwise transact in any investment product or an
					invitation, offer or solicitation to engage in any
					investment activity.
				</p>
				<p className={`${cx('sub_title')}`}>
					We are neither financial nor investment nor trading advisors
					and any of our tools are not fully accurate.
				</p>
				<p className={`${cx('sub_title')}`}>
					There are no warranties, express or implied, as to the
					accuracy, completeness, or results obtained from any data or
					using any tools herein. In no event shall we be responsible
					to any party for any investment or trading losses or any
					other kind of damages (of whatsoever nature) arising from
					the use of any of our materials and platform.
				</p>
				<p className={`${cx('sub_title')}`}>
					Please consult with a licensed professional before making
					any investment decisions.
				</p>
			</div>
			<div className={`${cx('baner_home_container')}`}>
				<h2 className={`${cx('banner_title')}`}>OUR MISSIONS</h2>
				<div className={`${cx('banner_image_container')}`}>
					<img
						src={BannerImage}
						alt="banner_image"
						title=""
						className={`${cx('image_banner')}`}
					/>
					<div className={`${cx('banner_desc_container')}`}>
						<div className={`${cx('banner_desc_item')}`}>
							To use independent AI Trading platform
						</div>
						<div
							className={`${cx('banner_desc_item')}`}
							style={{ alignSelf: 'center' }}
						>
							To trade FOREX through Liquidity Provider(s)
						</div>
						<div
							className={`${cx('banner_desc_item')}`}
							style={{ alignSelf: 'flex-end' }}
						>
							With the Funds provided only by our shareholders
						</div>
					</div>
				</div>
			</div>
			<div className={`${cx('content_home')}`}>
				<h3 className={`${cx('title')}`}>
					We only trade with our company’s Funds
				</h3>
			</div>
		</div>
	);
}

export default HomePage;
