import React from "react";
import { DashboardLayout, PageContainer } from "@toolpad/core";

export default function AuthLayout(props: React.PropsWithChildren) {
  return (
    <DashboardLayout>
      <PageContainer>{props.children}</PageContainer>
    </DashboardLayout>
  );
}
