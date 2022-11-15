import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const ListCombo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl">
                  <Link to="/admin/createGym" className="m-1.5">
                    Thêm Combo mới
                  </Link>
                </button>
              </div>
            </div>
            <div className="table-list">
              {/* Table list */}
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Tên Combo
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Địa chỉ phòng tập
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Đơn giá
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Các thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Fitness khỏe đẹp
                      </th>
                      <td className="py-4 px-6">123 Xa lộ Hà Nội</td>
                      <td className="py-4 px-6">3.000.000đ</td>
                      <td className="py-4 px-6">
                        <a
                          href="/admin/editCombo"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Chỉnh sửa
                        </a>
                        |
                        <a
                          href="/#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Vô hiệu
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListCombo;
