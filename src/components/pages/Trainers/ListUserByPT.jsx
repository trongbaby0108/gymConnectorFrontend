import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { header } from "../../../data";
import Header from "../../Admin/partials/Header";
const ListUserByPT = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const formData = new FormData();
  formData.append("idPT", parseInt(localStorage.getItem("id")));
  const getData = async () => {
    const res = await axios
      .post(
        "http://localhost:8080/client/personalTrainer/getUserByPT",
        formData,
        headers
      )
      .then((response) => {
        setData(response.data);
      });
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);

  function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return (
    <div className="flex h-screen overflow-hidden">
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
                        Avatar
                      </th>

                      <th scope="col" className="py-3 px-6">
                        Số điện thoại
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Email
                      </th>
                    </tr>
                  </thead>

                  {data.map((user) => (
                    <tbody>
                      <td className="py-4 px-6 text-black font-bold text-xl">
                        {formatName(user.name)}
                      </td>
                      <td className="py-4 px-6 text-black font-bold text-xl">
                        {formatName(user.address)}
                      </td>
                      <td className="py-4 px-6 text-black font-bold text-xl">
                        <img
                          className="h-32"
                          src={user.avatar}
                          alt={user.avatar}
                        />
                      </td>
                      <td className="py-4 px-6 text-black font-bold text-xl">
                        {user.phone}
                      </td>
                      <td className="py-4 px-6 text-black font-bold text-xl">
                        {user.email}
                      </td>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListUserByPT;
