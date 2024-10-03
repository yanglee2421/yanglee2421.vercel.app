import { hp_image_archive } from "@/api/bing/hp_image_archive";
import { hp_image_archive as hp_image_archive_fallback } from "@/api/bing/hp_image_archive_fallback";

const req = {
  params: { idx: 0, n: 8, format: "js" },
};

export default async function Page() {
  const res = await Promise.any([
    hp_image_archive(req),
    hp_image_archive_fallback(req),
  ]);

  return (
    <div className="">
      <div className=" mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.data.images.map((item) => (
          <div key={item.hsh}>
            <img
              src={new URL(item.url, "https://cn.bing.com").href}
              alt={item.title}
              width={480}
              height={270}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
