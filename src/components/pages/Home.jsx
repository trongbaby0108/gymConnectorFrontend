import React from 'react'
// import components
import Banner from '../Banner';
import Header from '../Header';
import About from '../About';
import Workouts from '../Workouts';
import Join from '../Join';
import Footer from '../Footer';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    Aos.init({
        duration: 2500,
        delay: 400,
    });
    return (
        <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
            <Header />
            <Banner />
            <About />
            <Workouts />
            {/* <Pricing />
            <Community />
            <Faq /> */}
            <Join />
            <Footer />
            {/* <div className='h-[4000px]'></div> */}
        </div>
    )
}

export default Home