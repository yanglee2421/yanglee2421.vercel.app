import ReactMarkdown from "react-markdown";
import RemarkMath from "remark-math";
import RemarkBreaks from "remark-breaks";
import RemarkGfm from "remark-gfm";
import React from "react";
import { hightlighter } from "@src/lib/hightlighter";

type CodeProps = {
  code: string;
  lang: string;
  dark: boolean;
};

const Code = (props: CodeProps) => {
  const highlight = React.use(hightlighter);

  console.log(props.dark);

  return (
    <div
      data-lang={props.lang}
      dangerouslySetInnerHTML={{
        __html: highlight.codeToHtml(props.code, {
          theme: props.dark ? "dark-plus" : "light-plus",
          lang: highlight.getLoadedLanguages().includes(props.lang)
            ? props.lang
            : "text",
        }),
      }}
      className="prose-code:text-xl prose-pre:whitespace-pre-wrap"
    />
  );
};

type MarkdownProps = {
  code: string;
  dark: boolean;
};

export const Markdown = (props: MarkdownProps) => (
  <ReactMarkdown
    remarkPlugins={[RemarkMath, RemarkGfm, RemarkBreaks]}
    components={{
      code({ children, className, ...rest }) {
        const match = /language-(\w+)/.exec(className || "");

        return match ? (
          <Code code={String(children)} lang={match[1]} dark={props.dark} />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        );
      },
      // pre: React.Fragment,
    }}
  >
    {props.code}
  </ReactMarkdown>
);
