import { MarketingContent } from "../../components/guest/marketing-content/MarketingContent";
import { Stock } from "../../components/guest/stock/Stock";
import { Supermarket } from "../../components/guest/superMarket/Supermarket";

export const MainGuest = () => {
  return (
    <div className="flex flex-col gap-[20px] bg-background-color">
      <MarketingContent />
      <Stock />
      <Supermarket />
    </div>
  );
};
