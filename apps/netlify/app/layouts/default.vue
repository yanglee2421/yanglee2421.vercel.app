<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const menus: NavigationMenuItem[] = [
  {
    label: "首页",
    icon: "i-lucide-house",
    to: "/",
  },
  {
    label: "电气制作",
    icon: "i-lucide-zap",
    to: "/electric",
  },
  {
    label: "设备调试",
    icon: "i-lucide-bug-play",
    to: "/debug",
  },
  {
    label: "设备巡检",
    icon: "i-lucide-bug-play",
    to: "/inspection",
  },
  {
    label: "聊天",
    icon: "i-lucide-messages-square",
    to: "/chat",
  },
  {
    label: "文档",
    icon: "i-lucide-book-open",
    to: "/docs",
  },
  {
    label: "Settings",
    icon: "i-lucide-settings",
    defaultOpen: true,
    children: [
      {
        label: "General",
      },
      {
        label: "Members",
      },
      {
        label: "Notifications",
      },
    ],
  },
];

const otherMenus: NavigationMenuItem[] = [
  {
    label: "Feedback",
    icon: "i-lucide-message-circle",
    to: "https://github.com/nuxt-ui-templates/dashboard",
    target: "_blank",
  },
  {
    label: "Help & Support",
    icon: "i-lucide-info",
    to: "https://github.com/nuxt/ui",
    target: "_blank",
  },
];
</script>

<template>
  <UDashboardGroup>
    <UDashboardSearch />
    <UDashboardSidebar collapsible resizable>
      <template #header="{ collapsed }">
        <h2 v-if="!collapsed" class="h-5 w-auto shrink-0">Nuxt UI</h2>
        <UIcon
          v-else
          name="i-simple-icons-nuxtdotjs"
          class="text-primary mx-auto size-5"
        />
      </template>
      <template #default="{ collapsed }">
        <UDashboardSearchButton v-if="!collapsed" />
        <UNavigationMenu
          :collapsed="collapsed"
          :items="menus"
          orientation="vertical"
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="otherMenus"
          orientation="vertical"
          class="mt-auto"
        />
      </template>
      <template #footer="{ collapsed }">
        <UButton
          :avatar="{
            src: 'https://github.com/benjamincanac.png',
          }"
          :label="collapsed ? undefined : 'Benjamin'"
          color="neutral"
          variant="ghost"
          class="w-full"
          :block="collapsed"
        />
      </template>
    </UDashboardSidebar>
    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="文档">
          <template #leading>
            <UDashboardSidebarCollapse />
          </template>

          <template #trailing>
            <UBadge label="4" variant="subtle" />
          </template>

          <template #right>
            <UColorModeSelect />
          </template>
        </UDashboardNavbar>
      </template>
      <template #body>
        <UContainer class="min-h-full">
          <slot></slot>
        </UContainer>
      </template>
      <template #footer>
        <div class="flex items-center justify-center p-3">
          <p class="text-muted">&copy; 2024 Nuxt UI. All rights reserved.</p>
        </div>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
