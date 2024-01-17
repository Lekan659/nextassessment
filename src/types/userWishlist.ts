export type UserWishlistItem = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
};
export type UserWishlist = {
  items: UserWishlistItem[];
};
