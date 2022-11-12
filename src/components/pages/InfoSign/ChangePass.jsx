import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ChangePass = () => {
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
          <div className="login-wrapper-1">
            <div className="login-container-1">
              <div className="login-header-1">
                <img
                  src={require("../../images/logo-g.png")}
                  alt=""
                  className="logo-gymfitness"
                />
                <h2 className="login-welcome-1">Đổi mật khẩu thành công!</h2>
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
                <h2 className="login-welcome-1">Vui lòng nhập thông tin</h2>
              </div>
              <form className="login-body-1" onSubmit={handleSubmit}>
                <div className="login-bodymain-1">
                  <div className="login-form-wrapper-1">
                    <p
                      className={errMsg ? "errmsg" : "offscreen"}
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
                    <div className="login-form-1">
                      <div className="form-fill-in">
                        <input
                          type="password"
                          id="password"
                          placeholder="Nhập mật khẩu cũ"
                          className="login-password-1"
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
                    <div className="login-form-1">
                      <div className="form-fill-in">
                        <input
                          type="password"
                          id="password"
                          placeholder="Nhập mật khẩu mới"
                          className="login-password-1"
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
                    <div className="login-form-1">
                      <div className="form-fill-in">
                        <input
                          type="password"
                          id="confirm_pwd"
                          placeholder="Xác nhận mật khẩu"
                          className="login-password-1"
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
                    <div className="login-button-form-1">
                      <button className="login-button-1">Cập nhật</button>
                    </div>
                    <div className="login-signup-now-1">
                      <span>Bạn quên mật khẩu?</span>
                      <Link to={"/forgotPass"} className="login-now">
                        {" "}
                        Lấy mật khẩu
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

export default ChangePass;
