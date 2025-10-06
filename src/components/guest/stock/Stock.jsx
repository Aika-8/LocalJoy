import { stocks } from "../../../utils/constants/stocks";
import { StockButton } from "../../UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Stock = () => {
  const bgGradients = [
    "bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-600",
    "bg-gradient-to-br from-amber-200 via-amber-300 to-orange-400",
    "bg-gradient-to-br from-sky-300 via-sky-400 to-blue-600",
    "bg-gradient-to-br from-pink-300 via-rose-400 to-fuchsia-500",
    "bg-gradient-to-br from-violet-300 via-purple-400 to-indigo-600",
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:gap-7 px-4 py-6">
      <h1 className="text-5xl text-center lg:text-left w-full">Акции</h1>
      <div className="block lg:hidden w-full">
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            835: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          }}
        >
          {stocks.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-[250px] w-full mx-auto flex flex-col justify-start items-center gap-[5px]
                  ${bgGradients[index % bgGradients.length]}
                  rounded-lg shadow-lg shadow-gray-400/50 hover:scale-[1.03] transition-transform`}
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 right-8 w-16 h-16 bg-white/30 rotate-45"></div>
                <div className="absolute bottom-10 left-16 w-16 h-16 bg-white/30 rotate-45"></div>
                <div className="absolute top-7 right-12 w-20 h-20 border-4 border-white/20 rounded-full"></div>
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-4">
                  <h2 className="text-2xl font-bold text-gray-800 text-center">
                    {item.title}
                  </h2>
                  <div className="w-full h-[150px] flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <StockButton className="mt-2 px-4 py-2 text-sm font-medium text-emerald-600 bg-white rounded-full shadow hover:bg-emerald-50 transition-colors">
                    Подробнее
                  </StockButton>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:flex flex-wrap gap-8 justify-start w-full">
        {stocks.map((item, index) => (
          <div
            key={index}
            className={`w-[250px] h-[250px] flex flex-col justify-start items-center gap-[5px]
              ${bgGradients[index % bgGradients.length]}
              rounded-lg shadow-lg shadow-gray-400/50 hover:scale-[1.03] transition-transform`}
          >
            <div className="flex flex-col items-center justify-between h-full p-4">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {item.title}
              </h2>
              <div className="w-full h-[150px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <StockButton className="mt-2 px-4 py-2 text-sm font-medium text-emerald-600 bg-white rounded-full shadow hover:bg-emerald-50 transition-colors">
                Подробнее
              </StockButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
