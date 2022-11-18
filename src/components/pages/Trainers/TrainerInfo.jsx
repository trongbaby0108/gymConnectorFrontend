import { useFormik } from "formik";
import React from "react";
import Footer from "../../Features/Footer";
import Header from "../../Features/Header";
import UserIcn from "../../pages/User/user_info.svg";
import * as Yup from "yup";

const TrainerInfo = () => {
  const formik = useFormik({
    initialValues: {
      skill: "",
      fee: "",
    },
    validationSchema: Yup.object({
      skill: Yup.string()
        .required("Không được bỏ trống mục này")
        .min(4, "Phải nhiều hơn 4 ký hoặc hơn"),
      fee: Yup.string().required("Không được bỏ trống mục này"),
    }),
    onSubmit: async () => {
      console.log(formik.values);
    },
  });

  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <section className="bg-neutral-500 h-[100px]">
        <div className="container mx-auto h-full"></div>
      </section>
      <section className="section">
        {/* section title */}
        <div
          className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={UserIcn} alt="" />
          <h2 className="h2 section-title">
            Thông tin Huấn luyện viên<span className="text-primary-200">.</span>
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="max-w-full flex flex-col justify-center items-center">
            <div
              className="grid md:grid-cols-2 md:gap-16"
              onSubmit={formik.handleSubmit}
            >
              <form>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="skill"
                    id="skill"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    autoComplete="off"
                    value={formik.values.skill}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.skill && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.skill}
                    </p>
                  )}
                  <label
                    htmlFor="address"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Kỹ năng huấn luyện
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="fee"
                    id="fee"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    autoComplete="off"
                    value={formik.values.fee}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.fee && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.fee}
                    </p>
                  )}
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Giá thuê
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TrainerInfo;
