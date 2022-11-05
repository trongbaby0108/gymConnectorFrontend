import React, { useState } from 'react'
import { trainerss } from '../../../data';
import Footer from '../../Features/Footer';
import SearchIcn from '../Gyms/search.svg'
import Header from '../../Features/Header';
import './trainers.css';
import { Link } from 'react-router-dom';

const Trainers = () => {
    const [keySearch, setKeySearch] = useState("");
    const [data, setData] = useState(trainerss);
    return (
        <div className='max-w-[1920px] mx-auto bg-page overflow-hidden relative'>
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
                    <img src={data.icon} alt='' />
                    <h2 className='h2 section-title'>
                        {data.title} <span className='text-primary-200'>.</span>
                    </h2>
                </div>
                {/* search tool */}
                <div className='trainer-section-search'
                    data-aos='fade-right'>
                    <input type="text" placeholder='Nhập nội dung tìm kiếm'
                        className='trainer-search'
                        onChange={e => setKeySearch(e.target.value)} />
                    <button className='trainer-search-button'>
                        <img src={SearchIcn} alt='Hình kính lúp tìm kiếm' />
                    </button>
                </div>
                {/* slider */}
                <div data-aos='fade-up' data-aos-delay='300'>
                    {data.programs.filter(item => item.name.toLowerCase().includes(keySearch)).map((program) =>
                        <div className="list-trainers" key={program.id}>
                            <img src={program.image}
                                alt=""
                                className="lgs-img" />
                            <div className="lgs-desc">
                                <h1 className="lgs-title">{program.name}</h1>
                                <span className="lgs-subtitle">{program.subtitle}</span>
                                <span className="lgs-feature">{program.feature}</span>
                                <span className="lgs-address">{program.address}</span>
                                <span className="lgs-cancel-opt">{program.cancelOpt}</span>
                                <span className="lgs-cancel-opt-subt">{program.cancelOptSubt}</span>
                            </div>
                            <div className="lgs-detail">
                                <div className="lgs-rating">
                                    <span>{program.comment}</span>
                                    <button>{program.ratingStar}</button>
                                </div>
                                <div className="lgs-detail-text">
                                    <div className="lgs-price">{program.price}</div>
                                    <Link to={"/trainers/" + program.id} className="lgs-check-button" >
                                        Xem ngay</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Trainers