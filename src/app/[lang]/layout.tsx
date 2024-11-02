import React from "react";
import { TranslateWrapper } from "@/components/TranslateWrapper";

type Props = React.PropsWithChildren<{
  params: Promise<{
    lang: string;
  }>;
}>;

export default async function LangLayout(props: Props) {
  const params = await props.params;

  return (
    <TranslateWrapper lang={params.lang}>
      {props.children}
    </TranslateWrapper>
  );
}
