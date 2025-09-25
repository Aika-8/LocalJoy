import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { banners } from "../../utils/constants/banner";

export const BannerSwiper = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[230px] sm:h-[280px] lg:h-[330px] overflow-hidden">
              <picture>
                <source srcSet={banner.large} media="(min-width: 1024px)" />
                <source srcSet={banner.large} media="(min-width: 640px)" />
                <img
                  src={banner.small}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
