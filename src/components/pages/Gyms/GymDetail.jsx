import React from 'react'
import "./gymDetail.css"
import Footer from '../../Features/Footer';
import Header from '../../Features/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { photoGym } from '../../../data';



const GymDetail = () => {
    const { photo } = photoGym;
    // image slider
    const [currentImage, setCurrentImage] = React.useState(0);

    const refs = photo.reduce((acc, val, i) => {
        acc[i] = React.createRef();
        return acc;
    }, {});

    const scrollToImage = i => {
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    };

    const totalImages = photo.length;

    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

    const arrowStyle = 'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

    const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{ top: '40%' }}
        >
            <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
                {isLeft ? '◀' : '▶'}
            </span>
        </button>
    );

    return (
        <div className='max-w-[1920px] mx-auto bg-page overflow-hidden relative'>
            <Header />
            <section className='bg-neutral-500 h-[100px]'>
                <div className='container mx-auto h-full'></div>
            </section>
            <section className='section'>
                <div data-aos='fade-up' data-aos-delay='300'>
                    <div className="gym-container">
                        <div className="gym-wrapper">
                            <h1 className="gym-title">Thông tin phòng Gym</h1>
                            <div className="gym-address">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>Địa chỉ</span>
                            </div>
                            <span className="gym-price-highlight">
                                Hãy đặt ngay để có thể tham gia cùng chúng tôi
                            </span>
                            <div className="p-12 flex justify-center w-screen md:w-[1024px] items-center">
                                <div className="relative w-full">
                                    <div className="carousel">
                                        {sliderControl(true)}
                                        {photo.map((img, i) => (
                                            <div className="w-full flex-shrink-0" key={i} ref={refs[i]}>
                                                <img src={img.src} className="w-full object-contain" />
                                            </div>
                                        ))}
                                        {sliderControl()}
                                    </div>
                                </div>
                            </div>
                            <div className="gym-details">
                                <div className="gym-details-texts">
                                    <h1 className="gym-title">Tên</h1>
                                    <p className="gym-desc">
                                        Ở đây sẽ đặt các mô tả chi tiết về phòng gym đó để khách hàng đọc và
                                        biết được các thông tin, ưu đãi, dịch vụ mình hưởng thụ.
                                    </p>
                                    <div className='mt-10'>
                                        <div className="max-w-[350px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                            <div className="px-4 py-2">
                                                <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">Tên combo</h1>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Mô tả combo</p>
                                            </div>

                                            <img className="object-cover w-full h-[90px] mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                                            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                                                <h1 className="text-lg font-bold text-white">Đơn giá</h1>
                                                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Đặt combo</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gym-details-price">
                                    <h1>Bình luận</h1>
                                    <span>Tiêu đề</span>
                                    <h2><b>Đơn giá</b></h2>
                                    <button>Đặt ngay!!!</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default GymDetail