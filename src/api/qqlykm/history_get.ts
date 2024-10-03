import { AxiosRequestConfig } from "axios";
import { qqlykm_cn } from "./qqlykm_cn";

type Req = AxiosRequestConfig;

type Res = {
  success: true;
  date: "2024-10-03";
  data: [
    {
      year: "1789";
      title: "第一任香港总督璞鼎查爵士出生";
      url: "https://baike.baidu.com/item/%E7%92%9E%E9%BC%8E%E6%9F%A5";
    },
    {
      year: "1877";
      title: "李鸿章筹办开平矿务局";
      url: "https://baike.baidu.com/item/%E6%9D%8E%E9%B8%BF%E7%AB%A0/28575";
    },
    {
      year: "1897";
      title: "法国作家阿拉贡出生";
      url: "https://baike.baidu.com/item/%E8%B7%AF%E6%98%93%C2%B7%E9%98%BF%E6%8B%89%E8%B4%A1";
    },
    {
      year: "1903";
      title: "台湾画家蓝荫鼎出生";
      url: "https://baike.baidu.com/item/%E8%93%9D%E8%8D%AB%E9%BC%8E";
    },
    {
      year: "1931";
      title: "丹麦作曲家卡尔·尼尔森逝世";
      url: "https://baike.baidu.com/item/%E5%8D%A1%E5%B0%94%C2%B7%E5%B0%BC%E5%B0%94%E6%A3%AE";
    },
    {
      year: "1945";
      title: "世界工会联合会在法国巴黎正式成立";
      url: "https://baike.baidu.com/item/%E4%B8%96%E7%95%8C%E5%B7%A5%E4%BC%9A%E8%81%94%E5%90%88%E4%BC%9A";
    },
    {
      year: "1965";
      title: "瑞典乒乓球运动员瓦尔德内尔出生";
      url: "https://baike.baidu.com/item/%E7%AE%80%C2%B7%E8%AF%BA%E7%93%A6%C2%B7%E7%93%A6%E5%B0%94%E5%BE%B7%E5%86%85%E5%B0%94";
    },
    {
      year: "1965";
      title: "英国男演员克里夫·欧文出生";
      url: "https://baike.baidu.com/item/%E5%85%8B%E9%87%8C%E5%A4%AB%C2%B7%E6%AC%A7%E6%96%87";
    },
    {
      year: "1971";
      title: "苏联不载人的宇宙飞船月球19号进入月球轨道";
      url: "https://baike.baidu.com/item/%E6%9C%88%E7%90%8319%E5%8F%B7";
    },
    {
      year: "1971";
      title: "李小龙首部功夫电影《唐山大兄》在香港上映";
      url: "https://baike.baidu.com/item/%E5%94%90%E5%B1%B1%E5%A4%A7%E5%85%84";
    },
    {
      year: "1995";
      title: "马其顿总统格利戈罗夫遇刺受伤";
      url: "https://baike.baidu.com/item/%E9%A9%AC%E5%85%B6%E9%A1%BF";
    },
    {
      year: "1999";
      title: "日本索尼公司创始人盛田昭夫逝世";
      url: "https://baike.baidu.com/item/%E7%9B%9B%E7%94%B0%E6%98%AD%E5%A4%AB";
    },
    {
      year: "2008";
      title: "第一届世界智力运动会开幕式在北京举行";
      url: "https://baike.baidu.com/item/%E4%B8%96%E7%95%8C%E6%99%BA%E5%8A%9B%E8%BF%90%E5%8A%A8%E4%BC%9A";
    },
    {
      year: "2016";
      title: "中国催化化学的重要开拓者和奠基人蔡启瑞逝世";
      url: "https://baike.baidu.com/item/%E8%94%A1%E5%90%AF%E7%91%9E/3474085";
    }
  ];
};

export function history_get(req: Req) {
  return qqlykm_cn<Res>({
    url: "/api/history/get",
    ...req,
  });
}
