import React from 'react'
import { useNavigate } from 'react-router-dom';
import { gymss } from '../../../data';
import Footer from '../../Footer';

import Header from '../../Header';
import './gyms.css';

const Gyms = () => {
    const navigate = useNavigate();

    const { title, icon, programs } = gymss;
    return (
        <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
            <Header />
            <section className='bg-neutral-500 h-[100px]'>
                <div className='container mx-auto h-full'></div>
            </section>
            <section className='section'>
                {/* section title */}
                <div
                    className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    <img src={icon} alt='' />
                    <h2 className='h2 section-title'>
                        {title} <span className='text-primary-200'>.</span>
                    </h2>
                </div>
                {/* slider */}
                <div data-aos='fade-up' data-aos-delay='300'>
                    {programs.map((program, idx) => {
                        // destructure program
                        const { id, image, name, subtitle,
                            feature, cancelOpt, cancelOptSubt, address
                            , comment, ratingStar, price } = program;
                        const seeDetail = () => {
                            const getId = id;
                            var strId = getId.toString();
                            navigate("/gyms/" + strId);
                        };

                        return (
                            <div className="list-gyms" key={idx}>
                                <img src={image}
                                    alt=""
                                    className="lgs-img" />
                                <div className="lgs-desc">
                                    <h1 className="lgs-title">{name}</h1>
                                    <span className="lgs-subtitle">{subtitle}</span>
                                    <span className="lgs-feature">{feature}</span>
                                    <span className="lgs-address">{address}</span>
                                    <span className="lgs-cancel-opt">{cancelOpt}</span>
                                    <span className="lgs-cancel-opt-subt">{cancelOptSubt}</span>
                                </div>
                                <div className="lgs-detail">
                                    <div className="lgs-rating">
                                        <span>{comment}</span>
                                        <button>{ratingStar}</button>
                                    </div>
                                    <div className="lgs-detail-text">
                                        <div className="lgs-price">{price}</div>
                                        <button className="lgs-check-button" onClick={seeDetail} >Xem ngay</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Gyms