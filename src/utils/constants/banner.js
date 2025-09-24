import {
  Delivery,
  Discount,
  FreeShipping,
  SmallUnplush1,
  SmallUnplush2,
  Unplush1,
  Unplush2,
} from "../../assets";

export const bannersForTest = [
  {
    id: 1,
    title: "Бесплатная доставка на первый заказ",
    text: "Закажите бесплатно по промокоду - 1Delivery",
    image: FreeShipping,
  },
  {
    id: 2,
    title: "Быстрая доставка за 30 минут",
    text: "Доставляем продукты, лекарства, цветы и всё необходимое прямо к вашей двери",
    image: Delivery,
  },
  {
    id: 3,
    title: "Скидки до 30%",
    text: "Успей купить лучшие товары по суперценам!",
    image: Discount,
  },
];

export const banners = [
  { title: "Весенние скидки", large: Unplush1, small: SmallUnplush1 },
  { title: "Новинки недели", large: Unplush2, small: SmallUnplush2 },
  { title: "Бесплатная доставка", large: Unplush1, small: SmallUnplush1 },
  { title: "Акция 1+1", large: Unplush2, small: SmallUnplush2 },
];
