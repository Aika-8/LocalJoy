import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../../utils/constants/slides";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SlideButton } from "../UI/Button";

export const MarketingContent = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row bg-gradient-to-r from-emerald-100 via-emerald-50 to-white">
              <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-1/2 bg-primary text-white p-6 lg:p-10">
                <h2 className="text-4xl font-bold text-almost-black">
                  {slide.title}
                </h2>
                <p className="text-xl text-almost-black">{slide.text}</p>
                <SlideButton>Подробнее</SlideButton>
              </div>
              <div className="flex justify-center items-center w-full lg:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-[400px] h-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
