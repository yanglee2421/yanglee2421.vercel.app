import axios, { AxiosError } from "axios";

export const qqlykm_cn = axios.create({
  timeout: 1000 * 30,
  baseURL: "https://qqlykm.cn",
});

qqlykm_cn.interceptors.request.use((config) => {
  config.params = {
    ...(config.params || {}),
    key: "GY7rE1J3f4ovi4wGONXshLHOHv",
  };

  return config;
});

qqlykm_cn.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error instanceof AxiosError) {
      console.error("errorlog", error.response?.data);
    }

    throw error;
  },
);
