export type UserCartItem = {
  id: number;
  title: string;
  thumbnail: string;
  quantity: number;
  price: number;
};
export type UserCart = {
  items: UserCartItem[];
  quantity: number;
  total: number;
};
