import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/property/PropertyList";
import axios from "axios";
import "./home.css";
import { domain } from "../../api/api";

export default function Home() {
  const [gyms, setGyms] = useState([]);

  const getGym = () => {
    axios.get(domain + "home/getGym").then((response) => {
      return setGyms(response.data);
    });
  };

  useEffect(() => {
    getGym();
  }, []);
  console.log(gyms);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Lựa chọn các phòng tập hấp dẫn</h1>
        <PropertyList />
        <h1 className="home-title">Mọi người sẽ thích</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
