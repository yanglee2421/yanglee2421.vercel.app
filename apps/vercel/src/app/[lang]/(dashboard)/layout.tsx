import { DashboardLayout } from "@/components/layout/dashboard";
import React from "react";

export default function Page(props: React.PropsWithChildren) {
  return <DashboardLayout>{props.children}</DashboardLayout>;
}
