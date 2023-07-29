import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import type { SwiperEvents } from "../node_modules/swiper/types/swiper-events.d.ts";
import type { SwiperClass } from "../node_modules/swiper/types/swiper-class.d.ts";




interface Swipertype extends SwiperClass<SwiperEvents> {
    activeIndex: number;
}
const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Explicitly type the swiper parameter using the Swiper type
  const handleSlideChange = (swiper: Swipertype) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <div className="slider-container">
      <Swiper
        onSlideChange={handleSlideChange}
        rewind={true}
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
      >
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={activeSlideIndex === 0 ? "img-centered" : "img-normal"}
            src="https://www.fonewalls.com/wp-content/uploads/1080x2340-Background-HD-Wallpaper-507.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={activeSlideIndex === 1 ? "img-centered" : "img-normal"}
            src="https://www.fonewalls.com/wp-content/uploads/1080x2340-Background-HD-Wallpaper-511.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className={activeSlideIndex === 2 ? "img-centered" : "img-normal"}
            src="https://www.fonewalls.com/wp-content/uploads/1080x2340-Background-HD-Wallpaper-518.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className={activeSlideIndex === 3 ? "img-centered" : "img-normal"}
            src="https://www.fonewalls.com/wp-content/uploads/1080x2340-Background-HD-Wallpaper-522.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className={activeSlideIndex === 4 ? "img-centered" : "img-normal"}
            src="https://www.fonewalls.com/wp-content/uploads/1080x2340-Background-HD-Wallpaper-488.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

