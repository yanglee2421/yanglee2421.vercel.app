import { cookies } from "next/headers";
import React from "react";

export default async function GuestLayout(props: React.PropsWithChildren) {
  const cookieStore = await cookies();

  return props.children;
}
