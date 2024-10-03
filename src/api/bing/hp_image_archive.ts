import { AxiosRequestConfig } from "axios";
import { cn_bing } from "./cn_bing_com";

type Params = {
  idx: number;
  n: number;
  format: string;
};

type Req = AxiosRequestConfig & {
  params: Params;
};

type Res = {
  images: [
    {
      startdate: "20241002";
      fullstartdate: "202410020700";
      enddate: "20241003";
      url: "/th?id=OHR.WindRiverAlaska_ROW8103793021_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.WindRiverAlaska_ROW8103793021";
      copyright: "Wind River, Brooks Range, Arctic National Wildlife Refuge, Alaska, USA (© Design Pics/DanitaDelimont)";
      copyrightlink: "https://www.bing.com/search?q=Arctic+National+Wildlife+Refuge&form=hpcapt";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20241002_WindRiverAlaska%22&FORM=HPQUIZ";
      wp: true;
      hsh: "f92063d26c7cd382dd1e1fa13627bf35";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    },
    {
      startdate: "20241001";
      fullstartdate: "202410010700";
      enddate: "20241002";
      url: "/th?id=OHR.HalfDomeYosemite_ROW8093920979_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.HalfDomeYosemite_ROW8093920979";
      copyright: "Last light on Half Dome, Yosemite National Park, California, USA (© Adam Burton/Alamy Stock Photo)";
      copyrightlink: "https://www.bing.com/search?q=Half+Dome+Yosemite&form=hpcapt";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20241001_HalfDomeYosemite%22&FORM=HPQUIZ";
      wp: true;
      hsh: "9989d2025bccfc4fe30c6acb16278467";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    },
    {
      startdate: "20240930";
      fullstartdate: "202409300700";
      enddate: "20241001";
      url: "/th?id=OHR.WalrusNorway_ROW7949861182_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.WalrusNorway_ROW7949861182";
      copyright: "Herd of walruses in northern Spitsbergen, Svalbard archipelago, Norway (© AWL Images/DanitaDelimont)";
      copyrightlink: "https://www.bing.com/search?q=walrus&form=hpcapt";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240930_WalrusNorway%22&FORM=HPQUIZ";
      wp: true;
      hsh: "883db1a00357d339ec3db969264a7905";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    },
    {
      startdate: "20240929";
      fullstartdate: "202409290700";
      enddate: "20240930";
      url: "/th?id=OHR.ConnecticutBridge_ROW8232454989_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.ConnecticutBridge_ROW8232454989";
      copyright: "West Cornwall Covered Bridge over the Housatonic River, Connecticut, USA (© pabradyphoto/Getty Images)";
      copyrightlink: "https://www.bing.com/search?q=West+Cornwall+Covered+Bridge+Housatonic+River";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240929_ConnecticutBridge%22&FORM=HPQUIZ";
      wp: true;
      hsh: "ff313cfaefcca4ef992942c7302e8c89";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    },
    {
      startdate: "20240928";
      fullstartdate: "202409280700";
      enddate: "20240929";
      url: "/th?id=OHR.FloridaSeashore_ROW7569075310_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.FloridaSeashore_ROW7569075310";
      copyright: "Beach at sunrise, Gulf Islands National Seashore, Florida, USA (© Tim Fitzharris/Minden Pictures)";
      copyrightlink: "https://www.bing.com/search?q=Gulf+Islands+National+Seashore&form=hpcapt";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240928_FloridaSeashore%22&FORM=HPQUIZ";
      wp: true;
      hsh: "448fd1dd4400a05be00f6b282b0efb7f";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    },
    {
      startdate: "20240927";
      fullstartdate: "202409270700";
      enddate: "20240928";
      url: "/th?id=OHR.VeniceAerial_ROW7352144146_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.VeniceAerial_ROW7352144146";
      copyright: "Grand Canal and the Basilica di Santa Maria della Salute, Venice, Italy (© Bachir Moukarzel/Amazing Aerial Agency)";
      copyrightlink: "https://www.bing.com/search?q=Santa+Maria+della+Salute&form=hpcapt";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240927_VeniceAerial%22&FORM=HPQUIZ";
      wp: true;
      hsh: "a86d4abff6184ed47f52cd6a47d1d7f4";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    },
    {
      startdate: "20240926";
      fullstartdate: "202409260700";
      enddate: "20240927";
      url: "/th?id=OHR.LittleToucanet_ROW7160252018_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.LittleToucanet_ROW7160252018";
      copyright: "Blue-throated toucanet, Los Quetzales National Park, Costa Rica (© Oscar Dominguez/Tandem Stills + Motion)";
      copyrightlink: "https://www.bing.com/search?q=Blue-throated+toucanet&form=hpcapt";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240926_LittleToucanet%22&FORM=HPQUIZ";
      wp: true;
      hsh: "0d018daaa9b2b33c7e4c07df87146cc0";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    },
    {
      startdate: "20240925";
      fullstartdate: "202409250700";
      enddate: "20240926";
      url: "/th?id=OHR.GiantSequoias_ROW6962026915_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";
      urlbase: "/th?id=OHR.GiantSequoias_ROW6962026915";
      copyright: "Giant sequoias, Sequoia National Park, California, USA (© Galyna Andrushko/Shutterstock)";
      copyrightlink: "https://www.bing.com/search?q=Sequoia+National+Park&form=hpcapt";
      title: "Info";
      quiz: "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20240925_GiantSequoias%22&FORM=HPQUIZ";
      wp: true;
      hsh: "887481b3bd2a0fde37cdaf1e18b8254e";
      drk: 1;
      top: 1;
      bot: 1;
      hs: [];
    }
  ];
  tooltips: {
    loading: "正在加载...";
    previous: "上一个图像";
    next: "下一个图像";
    walle: "此图片不能下载用作壁纸。";
    walls: "下载今日美图。仅限用作桌面壁纸。";
  };
};

export function hp_image_archive(req: Req) {
  return cn_bing<Res>({
    url: "/HPImageArchive.aspx",
    ...req,
  });
}
