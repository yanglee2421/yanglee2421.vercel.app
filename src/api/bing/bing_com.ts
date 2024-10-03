import axios from "axios";

export const bing_com = axios.create({
  timeout: 1000 * 30,
  baseURL: "https://www.bing.com",
});
