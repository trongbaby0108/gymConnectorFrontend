import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ForgotPass = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/signUser/forgetPassword",
        { username: user, newPassword: pwd, oldPassword: pwd }
      );
      setUser("");
      setPwd("");
      setSuccess(true);
      console.log(response);
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
      console.log(error);
    }
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Sai lỗi cú pháp");
      return;
    }
    setSuccess(true);
  };

  return (
    <>
      {success ? (
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
                  Cập nhật mật khẩu thành công!
                </h2>
                <h3 className="signup-welcome-1">Vui lòng đăng nhập lại.</h3>
              </div>
              <div className="signup-body-1">
                <div className="signup-bodymain-1">
                  <div className="signup-form-wrapper-1">
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
      ) : (
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
              <form className="signup-body-1" onSubmit={handleSubmit}>
                <div className="signup-bodymain-1">
                  <div className="signup-form-wrapper-1">
                    <p
                      className={errMsg ? "errmsg" : "hidden"}
                      aria-live="assertive"
                      ref={errRef}
                    >
                      {errMsg}
                    </p>
                    <div className="signup-form-1">
                      <div className="form-fill-in">
                        <input
                          type="text"
                          placeholder="Nhập tài khoản"
                          className="signup-username-1"
                          autoComplete="off"
                          id="username"
                          ref={userRef}
                          onChange={(e) => setUser(e.target.value)}
                          required
                          aria-invalid={validName ? "false" : "true"}
                          aria-describedby="uidnote"
                          onFocus={() => setUserFocus(true)}
                          onBlur={() => setUserFocus(true)}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={
                            validName ? "valid text-lime-700" : "hidden"
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            validName || !user
                              ? "hidden"
                              : "invalid  text-red-700"
                          }
                        />
                      </div>
                      <div className="form-notification">
                        <p
                          id="uidnote"
                          className={
                            userFocus && user && !validName
                              ? "instructions"
                              : "hidden"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          4 đến 24 ký tự.
                          <br />
                          Bắt đầu bằng chữ cái.
                          <br />
                          Cho phép các chữ cái, số, dấu gạch dưới, dấu gạch nối.
                        </p>
                      </div>
                    </div>
                    <div className="signup-form-1">
                      <div className="form-fill-in">
                        <input
                          type="password"
                          id="password"
                          placeholder="Nhập mật khẩu"
                          className="signup-password-1"
                          autoComplete="off"
                          onChange={(e) => setPwd(e.target.value)}
                          required
                          aria-invalid={validPwd ? "false" : "true"}
                          aria-describedby="pwdnote"
                          onFocus={() => setPwdFocus(true)}
                          onBlur={() => setPwdFocus(false)}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={
                            validPwd ? "valid text-lime-700" : "hidden"
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            validPwd || !pwd
                              ? "hidden"
                              : "invalid  text-red-700"
                          }
                        />
                      </div>
                      <div className="form-notification">
                        <p
                          id="pwdnote"
                          className={
                            pwdFocus && !validPwd ? "instructions" : "hidden"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          {"  "}8 đến 24 ký tự.
                          <br />
                          Phải bao gồm chữ hoa và chữ thường, một số và một ký
                          tự đặc biệt.
                          <br />
                          Các ký tự đặc biệt được phép:{" "}
                          <span aria-label="exclamation mark">!</span>{" "}
                          <span aria-label="at symbol">@</span>{" "}
                          <span aria-label="hashtag">#</span>{" "}
                          <span aria-label="dollar sign">$</span>{" "}
                          <span aria-label="percent">%</span>
                        </p>
                      </div>
                    </div>
                    <div className="signup-form-1">
                      <div className="form-fill-in">
                        <input
                          type="password"
                          id="confirm_pwd"
                          placeholder="Xác nhận mật khẩu"
                          className="signup-password-1"
                          autoComplete="off"
                          onChange={(e) => setMatchPwd(e.target.value)}
                          required
                          aria-invalid={validMatch ? "false" : "true"}
                          aria-describedby="confirmnote"
                          onFocus={() => setMatchFocus(true)}
                          onBlur={() => setMatchFocus(false)}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={
                            validMatch && matchPwd
                              ? "valid text-lime-700"
                              : "hidden"
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            validMatch || !matchPwd
                              ? "hidden"
                              : "invalid  text-red-700"
                          }
                        />
                      </div>
                      <div className="form-notification">
                        <p
                          id="confirmnote"
                          className={
                            matchFocus && !validMatch
                              ? "instructions"
                              : "hidden"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Phải khớp với trường nhập mật khẩu ở trên.
                        </p>
                      </div>
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
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPass;
