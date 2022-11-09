import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import AuthContext from "../../../context/AuthProvider";

import axios from "../../../api/axios";
const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ username: user, password: pwd }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //     withCredentials: true,
      //   }
      // );
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({ user, pwd, roles, accessToken });
      // setUser("");
      // setPwd("");
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("Server không có phản hồi");
      } else if (error.response?.status === 400) {
        setErrMsg("Kiểm tra lại tài khoản và mật khẩu");
      } else if (error.response?.status === 401) {
        setErrMsg("Không được phép cấp quyền");
      } else {
        setErrMsg("Đăng nhập không thành công!!!");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
          <div className="login-wrapper-1">
            <div className="login-container-1">
              <div className="login-header-1">
                <img
                  src={require("../../images/logo-g.png")}
                  alt=""
                  className="logo-gymfitness"
                />
                <h2 className="login-welcome-1">Đăng nhập thành công</h2>
                <Link
                  to={"/home"}
                  style={{ color: "orange" }}
                  className="login-welcome-1"
                >
                  Quay về trang chủ.
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
          <div className="login-wrapper-1">
            <div className="login-container-1">
              <div className="login-header-1">
                <img
                  src={require("../../images/logo-g.png")}
                  alt=""
                  className="logo-gymfitness"
                />
                <h2 className="login-welcome-1">Chào mừng đến với chúng tôi</h2>
              </div>
              <form className="login-body-1" onSubmit={handleSubmit}>
                <div className="login-bodymain-1">
                  <div className="login-form-wrapper-1">
                    <p
                      aria-live="assertive"
                      className={errMsg ? "errmsg" : "hidden"}
                      ref={errRef}
                    >
                      {errMsg}
                    </p>
                    <div className="login-form-1">
                      <input
                        type="text"
                        placeholder="Nhập tài khoản"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                      />
                    </div>
                    <div className="login-form-1">
                      <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />
                    </div>
                    <div className="login-forgot-pass-1">
                      <Link to={"/getCode"}>
                        <span>Quên mật khẩu?</span>
                      </Link>
                    </div>
                    <div className="login-button-form-1">
                      <button className="login-button-1">Đăng nhập</button>
                    </div>
                    <div className="login-cutting-1">
                      <span>----- HOẶC -----</span>
                    </div>
                    <div className="login-button-google-1">
                      <img
                        src={require("../../images/icon-google.png")}
                        alt=""
                        className="login-google-image"
                      />
                      <span className="login-google-title">
                        Tiếp tục với Google
                      </span>
                    </div>
                    <div className="login-signup-now-1">
                      <span>Bạn chưa có tài khoản?</span>
                      <Link to="/register" className="signup-now">
                        {" "}
                        Đăng ký
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
