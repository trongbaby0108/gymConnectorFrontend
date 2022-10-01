import "./gym.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { isFirstDayOfMonth } from "date-fns"


const Gym = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photoGym = [
        { src: "https://ptfitness.vn/wp-content/uploads/2022/06/thiet-ke-phong-tap-the-hinh-dep.jpg" },
        { src: "https://maytapgym.vn/wp-content/uploads/2018/11/21-1.jpg" },
        { src: "https://mbhfit.vn/wp-content/uploads/2018/03/thiet-ke-phong-tap-gym.jpg" },
        { src: "https://cuonggym.com/wp-content/uploads/2019/03/Setup-mo-phong-tap-Kien-Gym-DNG-04.jpg" },
        { src: "https://setupphonggym.vn/wp-content/uploads/2020/09/mau-thiet-ke-phong-gym-dep.jpg" },
        { src: "https://ptfitness.vn/wp-content/uploads/2022/06/thiet-ke-phong-tap-the-hinh-dep.jpg" },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNum;
        if (direction === "l") {
            newSlideNum = slideNumber === 0 ? 5 : slideNumber - 1;
        }
        else {
            newSlideNum = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNum);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="gym-container">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="slider-wrapper">
                        <img src={photoGym[slideNumber].src} alt="" className="slider-img" />
                    </div>

                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                </div>}
                <div className="gym-wrapper">
                    <button className="book-now">
                        Đặt đi chờ chi
                    </button>
                    <h1 className="gym-title">Thông tin phòng Gym</h1>
                    <div className="gym-address">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>123 Trần Phú</span>
                    </div>
                    <span className="gym-price-highlight">
                        Hãy đặt ngay để có thể tham gia cùng chúng tôi
                    </span>
                    <div className="gym-images">
                        {photoGym.map((photo, i) => (
                            <div className="gym-img-wrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="gym-img" />
                            </div>
                        ))}
                    </div>
                    <div className="gym-details">
                        <div className="gym-details-texts">
                            <h1 className="gym-title">Khỏe đẹp fitness</h1>
                            <p className="gym-desc">
                                Ở đây sẽ đặt các mô tả chi tiết về phòng gym đó để khách hàng đọc và
                                biết được các thông tin, ưu đãi, dịch vụ mình hưởng thụ.
                            </p>
                        </div>
                        <div className="gym-details-price">
                            <h1>Thật tuyệt vời</h1>
                            <span>Hãy tận hưởng một cuộc sống healthy hơn cùng chúng tôi</span>
                            <h2><b>250.000vnđ</b></h2>
                            <button>Đặt ngay!!!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Gym