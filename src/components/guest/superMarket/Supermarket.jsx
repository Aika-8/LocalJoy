import { chainStore } from "../../../utils/constants/chainStores";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Supermarket = () => {
  const Card = ({ item }) => (
    <div
      className="relative h-[200px] w-[260px] mx-auto flex flex-col justify-center items-center 
                 rounded-2xl shadow-md bg-gradient-to-br from-white to-emerald-50
                 hover:shadow-xl hover:scale-[1.05] transition-all duration-300"
    >
      <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full shadow">
        NEW
      </div>
      <div className="flex items-center justify-center h-full w-full p-4">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[100px] object-contain"
        />
      </div>
      <div className="absolute bottom-0 w-full bg-black/40 text-white text-center py-2 rounded-b-2xl">
        <h2 className="text-lg font-semibold">{item.title}</h2>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:gap-7 px-4 py-6">
      <h1 className="text-5xl text-center lg:text-left w-full">Гипермаркеты</h1>

      {/* Маленькие экраны */}
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
          {chainStore.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Большие экраны */}
      <div className="hidden lg:flex flex-wrap gap-8 justify-start w-full">
        {chainStore.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
