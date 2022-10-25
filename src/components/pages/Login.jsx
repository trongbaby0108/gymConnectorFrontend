import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  }

  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <div className='login-wrapper-1'>
        <div className="login-container-1">
          <div className="login-header-1">
            <img src={require('../images/logo-g.png')}
              alt="" className="logo-gymfitness" />
            <h2 className="login-welcome-1">
              Chào mừng đến với chúng tôi
            </h2>
          </div>
          <div className="login-body-1">
            <div className="login-bodymain-1">
              <div className="login-form-wrapper-1">
                <div className="login-form-1">
                  <input type="text" placeholder="Nhập tài khoản" className="login-username-1" />
                </div>
                <div className="login-form-1">
                  <input type="password" placeholder="Nhập mật khẩu" className="login-password-1" />
                </div>
                <div className="login-button-form-1">
                  <button className="login-button-1" onClick={goHome}>Đăng nhập</button>
                </div>
              </div>
              <div className="login-cutting-1">
                <span>----- HOẶC -----</span>
              </div>
              <div className="login-button-google-1">
                <img src={require('../images/icon-google.png')} alt="" className="login-google-image" />
                <span className="login-google-title">
                  Tiếp tục với Google
                </span>
              </div>
              <div className="login-signup-now-1">
                <span>Bạn chưa có tài khoản?</span><Link to='/register' className="signup-now"> Đăng ký</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login