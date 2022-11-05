import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const ForgotPass = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <div className="signup-wrapper-1">
        <div className="signup-container-1">
          <div className="signup-header-1">
            <img
              src={require("../../images/logo-g.png")}
              alt=""
              className="logo-gymfitness"
            />
            <h2 className="signup-welcome-1">
              Điền thông tin lấy lại mật khẩu
            </h2>
          </div>
          <div className="signup-body-1">
            <div className="signup-bodymain-1">
              <div className="signup-form-wrapper-1">
                <div className="signup-form-1">
                  <input
                    type="text"
                    placeholder="Nhập tài khoản"
                    className="signup-username-1"
                  />
                </div>
                <div className="signup-form-1">
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className="signup-phonenum-1"
                  />
                </div>
                <div className="signup-form-1">
                  <input
                    type="text"
                    placeholder="Nhập email"
                    className="signup-email-address-1"
                  />
                </div>
                <div className="signup-form-1">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="signup-password-1"
                  />
                </div>
                <div className="signup-form-1">
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    className="signup-password-1"
                  />
                </div>
                <div className="signup-form-1">
                  <input
                    type="text"
                    placeholder="Nhập mã xác nhận"
                    className="signup-password-1"
                  />
                </div>
                <div className="signup-button-form-1">
                  <button className="signup-button-1">Cập nhật</button>
                </div>
              </div>
              {/* <div className="signup-cutting-1">
                            <span>----- HOẶC -----</span>
                        </div>
                        <div className="signup-button-google-1">
                            <img src={require('../images/icon-google.png')} alt="" className="signup-google-image" />
                            <span className="signup-google-title">
                                Tiếp tục với Google
                            </span>
                        </div> */}
              <div className="signup-login-now-1">
                <span>Bạn đã có tài khoản?</span>
                <Link to="/login" className="login-now">
                  {" "}
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
