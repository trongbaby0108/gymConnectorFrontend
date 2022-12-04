import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import * as Yup from "yup";
const EditCombo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      fee: "",
      avatar: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Không được bỏ trống mục này")
        .min(4, "Phải nhiều hơn 4 ký hoặc hơn"),
      phone: Yup.string()
        .required("Không được bỏ trống mục này")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Vui lòng điền đúng định dạng số điện thoại"
        ),
      address: Yup.string().required("Không được bỏ trống mục này"),
      fee: Yup.string().required("Không được bỏ trống mục này"),
      avatar: Yup.mixed()
        .required("Không được bỏ trống mục này")
        .test(
          "FILE_SIZE",
          "Ảnh quá lớn",
          (value) => value && value.size < 1280 * 1280
        )
        .test(
          "FILE_TYPE",
          "Không tồn tại hoặc không đúng định dạng",
          (value) =>
            value &&
            ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Add view</span>
                </button>
              </div>
            </div>

            <div className="">
              <form>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Tên Combo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                    autoComplete="off"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Địa chỉ phòng tập
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                    autoComplete="off"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.address}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Đơn giá
                  </label>
                  <input
                    type="text"
                    id="fee"
                    name="fee"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditCombo;
