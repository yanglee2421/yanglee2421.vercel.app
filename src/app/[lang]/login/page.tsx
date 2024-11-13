"use client";

export default function Page() {
  return (
    <>
      <a href={getGoogleOauth()}>sign in with google</a>
    </>
  );
}

const GOOGLE_CLIENT_ID =
  "733238189477-kpgurqq0ru3ao2cua8rtmq22ac80053i.apps.googleusercontent.com";

function getGoogleOauth() {
  const url = new URL("https://accounts.google.com/o/oauth2/auth");

  url.searchParams.set("response_type", "token");
  url.searchParams.set("client_id", GOOGLE_CLIENT_ID);
  url.searchParams.set(
    "redirect_uri",
    "https://yanglee2421.vercel.app/api/oauth",
  );
  url.searchParams.set("scope", "openid profile email");

  return url.href;
}
