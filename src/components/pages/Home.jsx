import React from 'react'
// import components
import Banner from '../Features/Banner';
import Header from '../Features/Header';
import About from '../Features/About';
import Workouts from '../Features/Workouts';
import Join from '../Features/Join';
import Footer from '../Features/Footer';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import Review from '../Features/Review';

const Home = () => {
    Aos.init({
        duration: 2500,
        delay: 400,
    });
    return (
        <div className='max-w-[1920px] mx-auto bg-page overflow-hidden relative'>
            <Header />
            <Banner />
            <About />
            <Workouts />
            {/* <Pricing />
            <Community />
            <Faq /> */}
            <Join />
            <Review />
            <Footer />
            {/* <div className='h-[4000px]'></div> */}
        </div>
    )
}

export default Home