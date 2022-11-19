<<<<<<< HEAD
import React from 'react'
import "./gymDetail.css"
import Footer from '../../Footer';
import Header from '../../Header';
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
=======
import React from "react";
import "./gymDetail.css";
import Footer from "../../Features/Footer";
import Header from "../../Features/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CurrencyFormatter from "currency-formatter";
import DetailIcn from "./fitness.svg";

const GymDetail = () => {
  // // image slider
  // const [currentImage, setCurrentImage] = React.useState(0);
  // const { photo } = photoGym;
  const [data, setData] = useState([]);
  const [dataCombo, setDataCombo] = useState([]);
  const [dataPT, setDataPT] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const getDetailGym = () => {
    axios
      .get(`http://localhost:8080/home/getGymById/${params.id}`)
      .then((response) => {
        setData(response.data);
      });
  };

  const getCombo = () => {
    axios
      .get(`http://localhost:8080/home/getComboByGym/${params.id}`)
      .then((response) => {
        setDataCombo(response.data);
      });
  };

  const getPT = () => {
    axios
      .get(`http://localhost:8080/home/getPTByGym/${params.id}`)
      .then((response) => {
        setDataPT(response.data);
      });
  };

  const getComment = () => {
    axios
      .get(`http://localhost:8080/home/getRateByGym/${params.id}`)
      .then((response) => {
        setDataComment(response.data);
      });
  };

  useEffect(() => {
    getDetailGym();
    getCombo();
    getPT();
    getComment();
  }, []);

  // photo slider when we get a lot of pictures
  // const refs = photo.reduce((acc, val, i) => {
  //   acc[i] = React.createRef();
  //   return acc;
  // }, {});

  // const scrollToImage = (i) => {
  //   setCurrentImage(i);
  //   refs[i].current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "start",
  //   });
  // };

  // const totalImages = photo.length;

  // const nextImage = () => {
  //   if (currentImage >= totalImages - 1) {
  //     scrollToImage(0);
  //   } else {
  //     scrollToImage(currentImage + 1);
  //   }
  // };

  // const previousImage = () => {
  //   if (currentImage === 0) {
  //     scrollToImage(totalImages - 1);
  //   } else {
  //     scrollToImage(currentImage - 1);
  //   }
  // };

  // const arrowStyle =
  //   "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  // const sliderControl = (isLeft) => (
  //   <button
  //     type="button"
  //     onClick={isLeft ? previousImage : nextImage}
  //     className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
  //     style={{ top: "40%" }}
  //   >
  //     <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
  //       {isLeft ? "◀" : "▶"}
  //     </span>
  //   </button>
  // );

  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <section className="bg-neutral-500 h-[100px]">
        <div className="container mx-auto h-full"></div>
      </section>
      <div
        className="section-title-group max-w-[900px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={DetailIcn} alt="" />
        <h2 className="h2 section-title">
          Thông tin chi tiết về phòng tập
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      <section className="section">
        {/* {dataCombo.map((program, idx) => {
          return (
            
          );
        })} */}

        <div data-aos="fade-up" data-aos-delay="300" key={data.id}>
          <div className="gym-container">
            <div className="gym-wrapper">
              <div className="gym-address">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="gym-price-highlight">
                Hãy đặt ngay để có thể tham gia cùng chúng tôi
              </span>
              <div className="p-12 flex justify-center w-screen md:w-[1024px] items-center">
                <div className="relative w-full">
                  <div className="carousel">
                    {/* {sliderControl(true)}
                        {photo.map((img, i) => (
                          <div
                            className="w-full flex-shrink-0"
                            key={i}
                            ref={refs[i]}
                          >
                            <img
                              src={img.src}
                              className="w-full object-contain"
                              alt=""
                            />
                          </div>
                        ))}
                        {sliderControl()} */}
                    <img
                      src={data.avatar}
                      className="w-full object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="gym-details">
                <div className="gym-details-texts">
                  <h1 className="gym-title">{data.name}</h1>
                  <p className="gym-desc">
                    Ở đây sẽ đặt các mô tả chi tiết về phòng gym đó để khách
                    hàng đọc và biết được các thông tin, ưu đãi, dịch vụ mình
                    hưởng thụ.
                  </p>
                </div>
              </div>
              <h1 className="gym-title mt-6">Danh sách Huấn luyện viên</h1>
              {dataPT.map((trainer) => {
                return (
                  <div className="mt-10">
                    <div className="max-w-[350px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                      <div className="px-4 py-2">
                        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                          {trainer.name}
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          Mô tả Huấn luyện viên
                        </p>
                      </div>
                      <img
                        className="object-cover w-full h-[90px] mt-2"
                        src={trainer.avatar}
                        alt="NIKE AIR"
                      />

                      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <h1 className="text-lg font-bold text-white">
                          {CurrencyFormatter.format(trainer.fee, {
                            code: "VND",
                          })}
                        </h1>
                        <button
                          onClick={() => navigate("/trainers/" + trainer.id)}
                          className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                        >
                          Xem Huấn luyện viên
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <h1 className="gym-title mt-6">Danh sách Gói tập</h1>
              {dataCombo.map((program) => {
                return (
                  <div className="mt-10">
                    <div className="max-w-[350px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                      <div className="px-4 py-2">
                        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                          {program.name}
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          Mô tả hlv
                        </p>
                      </div>

                      <img
                        className="object-cover w-full h-[90px] mt-2"
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                        alt="NIKE AIR"
                      />

                      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <h1 className="text-lg font-bold text-white">
                          {CurrencyFormatter.format(program.price, {
                            code: "VND",
                          })}
                        </h1>
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                          Đặt ngay
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* comment */}
              <form>
                <div className="w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label className="sr-only">Bình luận</label>
                    <textarea
                      id="comment"
                      rows="4"
                      className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Viết bình luận của bạn..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    >
                      Đăng lên
                    </button>
                  </div>
                </div>
              </form>
              <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                Mọi người bình luận văn minh và cư xử đúng mực.
              </p>
              {/* list comments */}
              <div className="w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  {dataComment.map((comment) => {
                    return (
                      <div className="w-full h-full bg-white dark:bg-gray-800">
                        <div className="w-full bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-4xl">
                          <img
                            className="rounded-full h-8 w-8 mr-2 mt-1 "
                            src={comment.avatar}
                            alt="avatar"
                          />
                          <div>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                              <div className="font-semibold text-sm leading-relaxed">
                                {comment.name}
                              </div>

                              <div class="flex items-center">
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>Rating star</title>
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                                  {comment.vote}
                                </p>
                                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                <div class="text-sm font-medium text-gray-900 dark:text-white">
                                  {comment.content}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GymDetail;
>>>>>>> df681403779b617858c4a6fae39bc1a11cf485a8
