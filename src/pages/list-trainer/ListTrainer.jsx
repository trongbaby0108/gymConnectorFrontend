import "./list-trainer.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const ListTrainer = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="ls-title">Search</h1>
                        <div className="ls-item">
                            <label >Địa điểm</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="ls-item">
                            <label>Ngày bắt đầu</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                    date[0].endDate, "dd/MM/yyyy"
                                )}`}
                            </span>
                            {openDate && (<DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date} />)}
                        </div>
                        <div className="ls-item">
                            <label >Tùy chọn</label>
                            <div className="ls-options">
                                <div className="ls-option-item">
                                    <span className="ls-option-text">
                                        Giá tối thiểu
                                    </span>
                                    <input type="number" className="ls-option-input" />
                                </div>
                                <div className="ls-option-item">
                                    <span className="ls-option-text">
                                        Giá tối đa
                                    </span>
                                    <input type="number" className="ls-option-input" />
                                </div>
                                <div className="ls-option-item">
                                    <span className="ls-option-text">
                                        Người lớn
                                    </span>
                                    <input type="number" min={1} className="ls-option-input"
                                        placeholder={options.adult} />
                                </div>
                                <div className="ls-option-item">
                                    <span className="ls-option-text">
                                        Trẻ em
                                    </span>
                                    <input type="number" min={0} className="ls-option-input"
                                        placeholder={options.children} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="list-result">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListTrainer