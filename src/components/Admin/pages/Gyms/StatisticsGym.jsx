import React, { useState } from "react";
import ExportSheet from "../../../Features/ExportSheet";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const StatisticsGym = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  const handleOnCLickExport = () => {
    if (data) {
      ExportSheet.exportExcel(data, "Thống kê phòng tập", "StatisticsGym");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <button
                  onClick={() => handleOnCLickExport()}
                  className="btn bg-lime-600 hover:bg-lime-800 text-white rounded-xl"
                >
                  <span className="m-1.5">Xuất excel</span>
                </button>
              </div>
            </div>
            <div className="table-list">
              {/* Table list */}
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <h2>Thống kê cho phòng tập: Tên phòng tập</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Tên HLV
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Địa chỉ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Hotline
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
                      ></th>
                      <td className="py-4 px-6"></td>
                      <td className="py-4 px-6"></td>
                      <td className="py-4 px-2"></td>
                      <td className="py-4 px-6 flex justify-between"></td>
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

export default StatisticsGym;
