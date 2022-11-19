<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { gymss } from "../../../data";
import Footer from "../../Features/Footer";
import SearchIcn from "../Gyms/search-icon.svg";
import Header from "../../Features/Header";
import "./gyms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Gyms = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [addressSearch, setAddressSearch] = useState("");
  //const [priceSearch, setPriceSearch] = useState("");
  const [data, setData] = useState([]);
  const [openOptions, setOpenOptions] = useState(false);

  const arr = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(nameSearch) &&
      item.address.toLowerCase().includes(addressSearch)
      //&&item.price.toString().includes(priceSearch)
    );
  });

  const getData = () => {
    axios.get("http://localhost:8080/home/getGym").then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <section className="bg-neutral-500 h-[100px]">
        <div className="container mx-auto h-full"></div>
      </section>
      <section className="section w-11/12 m-auto">
        {/* section title */}
        <div
          className="section-title-group max-w-[600px] mx-auto px-4 lg:px-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={gymss.icon} alt="" />
          <h2 className="h2 section-title">
            {gymss.title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* search tool */}
        <div className="flex justify-center items-center mb-28">
          <div className="gym-section-search" data-aos="fade-right">
            <input
              type="text"
              placeholder="Nhập tên phòng tập"
              className="gym-search-input"
              onChange={(e) => setNameSearch(e.target.value.toLowerCase())}
            />
            <div className="gym-search">
              <FontAwesomeIcon icon={faCircleInfo} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="search-text"
              >
                Thêm{" "}
                <FontAwesomeIcon icon={faArrowDown} className="headerIcon" />
              </span>
              {openOptions && (
                <div className="options">
                  <div className="option-item">
                    <span className="option-text">Địa chỉ</span>
                    <div className="option-counter">
                      <input
                        type="text"
                        placeholder="Nhập địa chỉ"
                        className="option-input"
                        onChange={(e) =>
                          setAddressSearch(e.target.value.toLowerCase())
                        }
                      />
                    </div>
                  </div>
                  {/* <div className="option-item">
                    <span className="option-text">Giá cả</span>
                    <div className="option-counter">
                      <input
                        type="text"
                        placeholder="Nhập giá"
                        className="option-input"
                        onChange={(e) => setPriceSearch(e.target.value)}
                      />
                    </div>
                  </div> */}
                </div>
              )}
            </div>
            <button className="gym-search-button">
              <img src={SearchIcn} alt="Hình kính lúp tìm kiếm" />
            </button>
          </div>
        </div>
        {/* list */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {arr.map((program) => {
            return (
              <div
                className="w-11/12 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                key={program.id}
              >
                <a href={"/gyms/" + program.id}>
                  <img
                    className="p-8 rounded-t-lg w-full h-64"
                    src={program.avatar}
                    alt="product"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href={"/gyms/" + program.id}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {program.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {program.rate === "NaN" ? 0 : program.rate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {/* {CurrencyFormatter.format(program.price, {
                        code: "VND",
                      })} */}
                      {program.address}
                    </span>
                    <a
                      href={"/gyms/" + program.id}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Xem ngay
                    </a>
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
};

export default Gyms;
>>>>>>> df681403779b617858c4a6fae39bc1a11cf485a8
