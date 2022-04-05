import axios from "axios";

export const getProductsData = async () => {
   return await axios.get("https://artisant.io/api/products");
};
