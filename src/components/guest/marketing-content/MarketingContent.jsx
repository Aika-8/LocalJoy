import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SlideButton } from "../../UI/Button";
import { bannersForTest } from "../../../utils/constants/banner";

export const MarketingContent = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {bannersForTest.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row bg-gradient-to-r from-emerald-100 via-emerald-50 to-white min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
              <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-1/2 p-6 lg:p-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-almost-black">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-almost-black">
                  {slide.text}
                </p>
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
