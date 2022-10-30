import React from 'react'
import "./gymDetail.css"
import Footer from '../../Features/Footer';
import Header from '../../Features/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { gymss, photoGym } from '../../../data';



const GymDetail = () => {

    const { programs } = gymss;
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
        <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
            <Header />
            <section className='bg-neutral-500 h-[100px]'>
                <div className='container mx-auto h-full'></div>
            </section>
            <section className='section'>
                {programs.map((program, idx) => {
                    const { name, subtitle, address, comment, price } = program;
                    return (
                        <div data-aos='fade-up' data-aos-delay='300' key={idx}>
                            <div className="gym-container">
                                {open && <div className="slider">
                                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                                    <div className="slider-wrapper">
                                        <img src={photo[slideNumber].src} alt="" className="slider-img" />
                                    </div>

                                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                                </div>}
                                <div className="gym-wrapper">
                                    <h1 className="gym-title">Thông tin phòng Gym</h1>
                                    <div className="gym-address">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span>{address}</span>
                                    </div>
                                    <span className="gym-price-highlight">
                                        Hãy đặt ngay để có thể tham gia cùng chúng tôi
                                    </span>
                                    <div className="gym-images">
                                        {photo.map((photo, i) => (
                                            <div className="gym-img-wrapper">
                                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="gym-img" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="gym-details">
                                        <div className="gym-details-texts">
                                            <h1 className="gym-title">{name}</h1>
                                            <p className="gym-desc">
                                                Ở đây sẽ đặt các mô tả chi tiết về phòng gym đó để khách hàng đọc và
                                                biết được các thông tin, ưu đãi, dịch vụ mình hưởng thụ.
                                            </p>
                                        </div>
                                        <div className="gym-details-price">
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

export default GymDetail