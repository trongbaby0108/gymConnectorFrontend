import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const GetCode = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <div className="login-wrapper-1">
        <div className="login-container-1">
          <div className="login-header-1">
            <img
              src={require("../../images/logo-g.png")}
              alt=""
              className="logo-gymfitness"
            />
            <h2 className="login-welcome-1">
              Vui lòng điền thông tin địa chỉ email lấy mã
            </h2>
          </div>
          <form className="login-body-1">
            <div className="login-bodymain-1">
              <div className="login-form-wrapper-1">
                <div className="login-form-1">
                  <div className="form-fill-in">
                    <input
                      type="text"
                      placeholder="Nhập email"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="login-button-form-1">
                  <Link to={"/fillCode"} className="login-button-1">
                    Tiếp tục
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
