import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { photoGym } from "../../../data";
import Footer from "../../Features/Footer";
import Header from "../../Features/Header";
import "./trainerDetail.css";

const TrainerDetail = () => {
  // image slider
  const { photo } = photoGym;
  const [currentImage, setCurrentImage] = React.useState(0);
  const [data, setData] = useState([]);
  const [dataPT, setDataPT] = useState([]);

  let { id } = useParams();
  console.log(id);

  const getData = () => {
    axios.get("http://localhost:8080/home/getPT").then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const arr = data.filter((item) => {
    return item.id.toString() === id;
  });

  //photo slider
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
      <section className="section">
        {arr.map((program, idx) => {
          return (
            <div data-aos="fade-up" data-aos-delay="300" key={idx}>
              <div className="trainer-container">
                <div className="trainer-wrapper">
                  <h1 className="trainer-title">
                    Thông tin chi tiết về Huấn luyện viên
                  </h1>
                  <div className="trainer-address">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span></span>
                  </div>
                  <span className="trainer-price-highlight">
                    Hãy để tôi giúp bạn thực hiện tốt các bài tập
                  </span>
                  <div className="flex justify-around flex-wrap">
                    <div className="">
                      <div className="p-12 flex justify-center w-screen md:w-[570px] items-center">
                        <div className="relative w-10/12">
                          <div className="carousel flex items-center">
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
                              src={program.avatar}
                              className="w-11/12 h-11/12 rounded-full object-contain"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="trainer-details">
                        <div className="trainer-details-texts">
                          <h1 className="trainer-title">{program.name}</h1>
                          <p className="trainer-desc">
                            Ở đây sẽ đặt các mô tả chi tiết về huấn luyện viên
                            đó để khách hàng đọc và biết được các thông tin.
                          </p>
                        </div>
                        <div className="trainer-details-price">
                          <h1>Bình luận</h1>
                          <span>Tiêu đề</span>
                          <h2>
                            <b>Đơn giá</b>
                          </h2>
                          <button>Đặt ngay!!!</button>
                        </div>
                      </div>
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
  );
};

export default TrainerDetail;
