import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">
                Kết nối với chúng tôi
            </h1>
            <span className="mailDesc">Đăng ký ngay thôi để nhận nhiều ưu đãi</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Địa chỉ email của bạn" />
                <button>Kết nối</button>
            </div>
        </div>
    )
}

export default MailList