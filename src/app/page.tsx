import { Markdown } from "@src/components/markdown";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { ParticlesUI } from "@src/components/layout";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@src/components/ui/sidebar";
import Link from "next/link";
import { CherryIcon, ChevronRight, HomeIcon } from "lucide-react";

export default async function Home() {
  const code = await readFile(
    resolve(process.cwd(), "public", "handbook.md"),
    "utf-8",
  );

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>label</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <HomeIcon />
                    <Link href="/404">notfound</Link>
                  </SidebarMenuButton>
                  <SidebarMenuAction>
                    <CherryIcon />
                  </SidebarMenuAction>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/404">
                      <HomeIcon />
                      notfound
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuAction>
                    <ChevronRight />
                  </SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <main className="container mx-auto">
          <SidebarTrigger />
          <article className="prose dark:prose-h1:text-foreground dark:prose-h2:text-foreground dark:prose-p:text-foreground dark:prose-blockquote:text-foreground dark:prose-code:text-foreground dark:prose-code:text-orange-500 dark:prose-li:text-foreground dark:marker:prose-li:text-foreground dark:prose-th:text-foreground dark:prose-td:text-foreground">
            <Markdown code={code} dark />
          </article>
          <ParticlesUI preset="bubbles" />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
