import axios from "axios";

export const cn_bing = axios.create({
  timeout: 1000 * 30,
  baseURL: "https://cn.bing.com",
});
