import { Icons } from "../../assets";
import { GeoButton } from "../UI/Button";
import { Input } from "../UI/Input";
import { Logo } from "../UI/Logo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-10 h-[80px]">
      <div className="flex items-center gap-[8px]">
        <Logo />
        <GeoButton>
          <Icons.Location className="w-6 h-6" />
          Укажите адрес доставки
        </GeoButton>
      </div>
      <div className="flex items-center gap-[42px] cursor-pointer">
        <form className="hidden lg:block">
          <Input type="text" placeholder="Поиск товаров..." />
        </form>
        <Icons.Heart className="hidden lg:block" />
        <Icons.Basket className="hidden lg:block" />
        <Icons.Person />
      </div>
    </header>
  );
};
