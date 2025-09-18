import { stocks } from "../../utils/constants/stocks";
import { StockButton } from "../UI/Button";

export const Stock = () => {
  const bgGradients = [
    "bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-600",
    "bg-gradient-to-br from-amber-200 via-amber-300 to-orange-400",
    "bg-gradient-to-br from-sky-300 via-sky-400 to-blue-600",
    "bg-gradient-to-br from-pink-300 via-rose-400 to-fuchsia-500",
    "bg-gradient-to-br from-violet-300 via-purple-400 to-indigo-600",
  ];
  return (
    <div className="flex flex-wrap gap-8 justify-center px-36">
      {stocks.map((item, index) => (
        <div
          key={index}
          className={`w-[250px] h-[250px] flex flex-col justify-start items-center gap-[5px] 
                     ${bgGradients[index % bgGradients.length]} 
                     rounded-lg shadow-lg shadow-gray-400/50 hover:scale-[1.03] transition-transform`}
        >
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <div className="flex flex-col items-center justify-between h-full p-4">
            <h2 className="text-3xl font-bold text-gray-800 relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-500 rounded-full"></span>
              <span className="ml-4"> {item.title}</span>
            </h2>
            <div className="w-full h-[200px] flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <StockButton className="mt-2 px-4 py-2 text-sm font-medium text-emerald-600 bg-white rounded-full shadow hover:bg-emerald-50 transition-colors">
              Подробнее
            </StockButton>
          </div>
        </div>
      ))}
    </div>
  );
};
