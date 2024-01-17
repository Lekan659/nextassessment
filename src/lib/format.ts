export function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function computeDiscountedPrice(price: number, discount: number) {
  const discountedPrice = ((100 - discount) / 100) * price;
  return formatPrice(discountedPrice);
}
