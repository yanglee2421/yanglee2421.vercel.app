import { AxiosRequestConfig } from "axios";
import { qqlykm_cn } from "./qqlykm_cn";

type Res = {
  success: true;
  data: {
    joke: " 一人好放债，家已贫矣，止馀斗粟，仍谋煮粥放之。人问如何起利？答曰：讨饭。 ";
  };
  text: {
    msg: "获取成功";
    copyright: "公共API https://qqlykm.cn";
    time: "当前请求时间为：2024-10-03 14:32:32";
  };
};

export function joke(req: AxiosRequestConfig) {
  return qqlykm_cn<Res>({
    url: "/api/joke/index",
    ...req,
  });
}
