import React from "react";
import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const ListUser = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="table-list">
              {/* Table list */}
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Tên người dùng
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Địa chỉ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Số điện thoại
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Email
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
                      <td className="py-4 px-6">0123 123 123</td>
                      <td className="py-4 px-6">example@gmail.com</td>
                      <td className="py-4 px-6">
                        <a
                          href="/#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Vô hiệu hóa
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

export default ListUser;
