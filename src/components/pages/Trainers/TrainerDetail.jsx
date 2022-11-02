import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { photoGym, trainerss } from '../../../data';
import Footer from '../../Features/Footer';
import Header from '../../Features/Header';
import './trainerDetail.css';

const TrainerDetail = () => {
    const { programs } = trainerss;
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const { photo } = photoGym;

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNum;
        if (direction === "l") {
            newSlideNum = slideNumber === 0 ? 5 : slideNumber - 1;
        }
        else {
            newSlideNum = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNum);
    }

    return (
        <div className='max-w-[1920px] mx-auto bg-page overflow-hidden relative'>
            <Header />
            <section className='bg-neutral-500 h-[100px]'>
                <div className='container mx-auto h-full'></div>
            </section>
            <section className='section'>
                {programs.map((program, idx) => {
                    const { name, subtitle, address, comment, price } = program;
                    return (
                        <div data-aos='fade-up' data-aos-delay='300' key={idx}>
                            <div className="trainer-container">
                                {open && <div className="slider">
                                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                                    <div className="slider-wrapper">
                                        <img src={photo[slideNumber].src} alt="" className="slider-img" />
                                    </div>

                                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                                </div>}
                                <div className="trainer-wrapper">
                                    <h1 className="trainer-title">Thông tin Huấn luyện viên </h1>
                                    <div className="trainer-address">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span>{address}</span>
                                    </div>
                                    <span className="trainer-price-highlight">
                                        Hãy đặt ngay để có thể tham gia cùng chúng tôi
                                    </span>
                                    <div className="trainer-images">
                                        {photo.map((photo, i) => (
                                            <div className="trainer-img-wrapper">
                                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="trainer-img" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="trainer-details">
                                        <div className="trainer-details-texts">
                                            <h1 className="trainer-title">{name}</h1>
                                            <p className="trainer-desc">
                                                Ở đây sẽ đặt các mô tả chi tiết về phòng trainer đó để khách hàng đọc và
                                                biết được các thông tin, ưu đãi, dịch vụ mình hưởng thụ.
                                            </p>
                                        </div>
                                        <div className="trainer-details-price">
                                            <h1>{comment}</h1>
                                            <span>{subtitle}</span>
                                            <h2><b>{price}</b></h2>
                                            <button>Đặt ngay!!!</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </section>
            <Footer />
        </div>

    )
}

export default TrainerDetail