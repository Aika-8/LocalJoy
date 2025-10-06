import { chainStore } from "../../../utils/constants/chainStores";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Supermarket = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:gap-7 px-4 py-6">
      <h1 className="text-5xl text-center lg:text-left w-full">Гипермаркеты</h1>
      <div className="block lg:hidden w-full">
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 16 },
            835: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 16 },
          }}
        >
          {chainStore.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full rounded-2xl shadow-lg overflow-hidden group hover:scale-[1.03] transition-transform">
                <div className="relative w-full aspect-[15/9] bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-[12px] px-2 py-1 rounded-full shadow-md">
                    -15%
                  </span>
                </div>
                <div className="bg-gray-800 text-white text-center py-2 text-[16px] font-medium">
                  {item.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:flex flex-wrap gap-8 justify-start w-full">
        {chainStore.map((item, index) => (
          <div
            key={index}
            className="w-[250px] rounded-2xl shadow-lg overflow-hidden group hover:scale-[1.03] transition-transform"
          >
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-600 text-white text-[12px] px-2 py-1 rounded-full shadow-md">
                -15%
              </span>
            </div>
            <div className="bg-gray-800 text-white text-center py-2 text-[16px] font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
