import { history_get } from "@/api/qqlykm/history_get";

export default async function Page() {
  const res = await history_get({});

  return (
    <div>
      <ul>
        {res.data.data.map((item) => (
          <li key={item.url}>
            <a href={item.url} target={item.url}>
              {item.year + " " + item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
