import React from 'react'
// import components
<<<<<<< HEAD
import Banner from '../Banner';
import Header from '../Header';
import About from '../About';
import Workouts from '../Workouts';
import Join from '../Join';
import Footer from '../Footer';
=======
import Banner from '../Features/Banner';
import Header from '../Features/Header';
import About from '../Features/About';
import Workouts from '../Features/Workouts';
import Join from '../Features/Join';
import Footer from '../Features/Footer';
>>>>>>> df681403779b617858c4a6fae39bc1a11cf485a8
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import Review from '../Features/Review';

const Home = () => {
    Aos.init({
        duration: 2500,
        delay: 400,
    });

    console.log(localStorage.getItem('userInfo'));
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