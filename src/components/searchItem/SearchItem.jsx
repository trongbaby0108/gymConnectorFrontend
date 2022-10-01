import "./search-item.css"

const SearchItem = () => {
    return (
        <div className="search-item">
            <img src="https://mbhfit.vn/wp-content/uploads/2018/02/26805151_431632767239699_3466841789791533409_n.jpg"
                alt=""
                className="si-img" />
            <div className="si-desc">
                <h1 className="si-title">Gym đẹp</h1>
                <span className="si-subtitle">
                    Vị trí đẹp rộng rãi thoáng mát</span>
                <span className="si-feature">Có khu vực tập yoga và nhà tắm.</span>
                <span className="si-cancel-opt">Hủy đặt miễn phí</span>
                <span className="si-cancel-opt-subt">Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.</span>
            </div>
            <div className="si-detail">
                <div className="si-rating">
                    <span>Tuyệt vời</span>
                    <button>4.5</button>
                </div>
                <div className="si-detail-text">
                    <div className="si-price">1.000.000 vnđ</div>
                    <button className="si-check-button">Xem ngay</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem