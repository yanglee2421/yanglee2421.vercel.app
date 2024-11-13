import { URL } from "node:url";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const data = Object.fromEntries(url.searchParams.entries());

  console.log(data);

  return Response.json({ code: 200 });
}
