import { Product } from "@/types/product";
import { API_URL } from "./consts";
export async function getPaginateProducts(
  limit = 10,
  skip = 0
): Promise<{ products: Product[]; total: number }> {
  const res = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);
  const resJson = await res.json();
  const products: Product[] = resJson.products;
  const total: number = resJson.total;
  return { products, total };
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const product: Product = await res.json();
    return product;
  } catch (error) {
    return null;
  }
}