import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Hero.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
// import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <div className="pt-4">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-96"
            style={{
              backgroundImage: `url("https://i.ibb.co/c18k4Xm/slide1.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  Get your desired product now
                </h1>
                <p className="mb-5 w-2/3 text-center mx-auto hidden md:block">
                  Xen Matrix gives you the best condition products
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-96"
            style={{
              backgroundImage: `url("https://i.ibb.co/N3rP4K9/slide2.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  Get your desired product now
                </h1>
                <p className="mb-5 w-2/3 text-center mx-auto hidden md:block">
                  Xen Matrix gives you the best condition products
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-96"
            style={{
              backgroundImage: `url("https://i.ibb.co/1rsRbc5/slide3.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  Get your desired product now
                </h1>
                <p className="mb-5 w-2/3 text-center mx-auto hidden md:block">
                  Xen Matrix gives you the best condition products
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-96"
            style={{
              backgroundImage: `url("https://i.ibb.co/pf4QBtW/slide4.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  Get your desired product now
                </h1>
                <p className="mb-5 w-2/3 text-center mx-auto hidden md:block">
                  Xen Matrix gives you the best condition products
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
