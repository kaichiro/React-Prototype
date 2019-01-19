import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const loadCategories = () => api.get("Categories");
export const loadProducts = () => api.get("Products");
export const loadProductsByCategory = Category =>
  api.get(`Products?category=${Category}`);
export const loadTopSellingProducts = () => api.get(`Products?topSelling=1`);

const apis = {
  loadCategories,
  loadProducts,
  loadProductsByCategory,
  loadTopSellingProducts
};

export default apis;
