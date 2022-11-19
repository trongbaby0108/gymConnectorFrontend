import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Features/Footer";
import Header from "../../Features/Header";
import "./trainerDetail.css";
import DetailIcn from "./detail.svg";
import Currency from "currency-formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDongSign,
  faDumbbell,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const TrainerDetail = () => {
  const [data, setData] = useState([]);

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

  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <section className="bg-neutral-500 h-[100px]">
        <div className="container mx-auto h-full"></div>
      </section>
      <div
        className="section-title-group max-w-[600px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={DetailIcn} alt="" />
        <h2 className="h2 section-title">
          Thông tin chi tiết về Huấn luyện viên
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      <section className="section">
        {arr.map((program, idx) => {
          return (
            <div data-aos="fade-up" data-aos-delay="300" key={idx}>
              <div className="trainer-container">
                <div className="trainer-wrapper">
                  <div className="flex justify-around items-center flex-wrap w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="m-2">
                      <div className="flex justify-center w-screen md:w-[500px] items-center">
                        <div className="relative w-full">
                          <div className="flex items-center">
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
                              className="w-full h-full rounded-full object-contain"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="trainer-details">
                        <div className="trainer-details-texts">
                          <span className="trainer-price-highlight">
                            Hãy để tôi giúp bạn thực hiện tốt các bài tập
                          </span>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faUser}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <p className="trainer-title">{program.name}</p>
                          </div>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faPhoneVolume}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <span>{program.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <span>{program.address}</span>
                          </div>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faDongSign}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <span>
                              {Currency.format(program.fee, { code: "VND" })}
                            </span>
                          </div>
                          <div className="w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 flex flex-col">
                              <span className="mb-4 text-rose-700">
                                Thông tin phòng tập đang tác nghiệp
                              </span>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faDumbbell}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{program.gym.name}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{program.gym.address}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faEnvelope}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{program.gym.email}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faPhoneVolume}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{program.gym.phone}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faImage}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <img
                                  className="w-10/12 h-10/12"
                                  src={program.gym.avatar}
                                  alt="ảnh phòng gym"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="trainer-details-price">
                          <button>Đặt ngay!!!</button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <div className="w-full h-full bg-white dark:bg-gray-800">
                        <div className="w-full bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-4xl">
                          <img
                            className="rounded-full h-8 w-8 mr-2 mt-1 "
                            src="https://picsum.photos/id/1027/200/200"
                            alt="avatar"
                          />
                          <div>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                              <div className="font-semibold text-sm leading-relaxed">
                                Jon Doe
                              </div>
                              <div className="text-normal leading-snug md:leading-normal">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                            <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
                              thời gian bình luận
                            </div>
                          </div>
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
