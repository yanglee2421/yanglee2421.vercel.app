import { Markdown } from "@src/components/markdown";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { ParticlesUI } from "@src/components/layout";

export default async function Home() {
  const code = await readFile(
    resolve(process.cwd(), "public", "handbook.md"),
    "utf-8",
  );

  return (
    <main className="container mx-auto">
      <article className="prose dark:prose-h1:text-foreground dark:prose-h2:text-foreground dark:prose-p:text-foreground dark:prose-blockquote:text-foreground dark:prose-code:text-foreground dark:prose-code:text-orange-500 dark:prose-li:text-foreground dark:marker:prose-li:text-foreground dark:prose-th:text-foreground dark:prose-td:text-foreground">
        <Markdown code={code} dark />
      </article>
      <ParticlesUI preset="bubbles" />
    </main>
  );
}
