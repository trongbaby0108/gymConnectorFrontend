import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faCubes, faDumbbell, faHeartPulse, faMagnifyingGlass, faPercent, faPerson } from "@fortawesome/free-solid-svg-icons"
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"

import "./header.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/gyms", { state: { destination, date, options } })
    }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faDumbbell} />
                        <span>Phòng Gym</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPersonWalking} />
                        <span>Huấn luyện viên</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCubes} />
                        <span>Gói tập</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPercent} />
                        <span>Ưu đãi</span>
                    </div>
                </div>
                {type !== "list" &&
                    <><h1 className="headerTitle">Bạn đang cần tìm một nơi để có thân hình đẹp?</h1>
                        <p className="headerDesc">
                            Hãy tham gia cùng nền văn minh tập luyện thể hình cùng chúng tôi để sở
                            hữu cơ thể săn chắc và cường tráng ngay từ ngày hôm nay.
                        </p>
                        <button className="headerBtn">Đăng ký/Đăng nhập</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faHeartPulse} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Bạn tìm kiếm điều gì?"
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)} />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} 
                            to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate={new Date()}
                                    className="date"
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Người lớn</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Trẻ em</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Chưa biết thêm gì???</span>
                                        <div className="optionCounter">
                                            <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="headerIcon" />
                                <button className="headerBtn" onClick={handleSearch}>Tìm kiếm</button>
                            </div>
                        </div></>}
            </div>

        </div>
    )
}

export default Header