<script lang="ts" setup></script>

<template>
  <div class="space-y-6">
    <h1 class="text-highlighted text-3xl">设备巡检</h1>
    <h2 class="text-2xl">配置文件</h2>
    <section>
      <ol class="list-decimal">
        <li>
          用记事本打开
          <code class="text-info"> 软件根目录/usprofile.ini </code>
        </li>
        <li>
          找到
          <code class="text-info"> duanXian </code> 字段；并将
          <code class="text-info"> duanXian </code>
          的值设置为
          <UKbd> 1 </UKbd>。
        </li>
        <li>保存并关闭文件。</li>
      </ol>
    </section>
    <h2 class="text-2xl">软件</h2>
    <section>
      <ol class="list-decimal">
        <li>
          打开软件，登录到 <code class="text-primary"> admin </code>用户，密码为
          <UKbd> 1 </UKbd>。
        </li>
        <li>进入 <code class="text-primary"> 灵敏度调整 </code> 界面</li>
        <li>
          进入左右两个
          <code class="text-primary"> A03 </code> 的参数设置界面（分两次进行）。
        </li>
        <li>
          在闸门下拉框中选择
          <code class="text-error"> 闸门:No.0[始波] </code>
        </li>
        <li>
          将
          <code class="text-info"> 闸门起点 </code>
          的值调整到
          <UKbd> 1 </UKbd>，并保存设置。
        </li>
      </ol>
    </section>
    <h2 class="text-2xl">数据库</h2>
    <section>
      <ol class="list-decimal">
        <li>
          用 <code class="text-error">Access</code> 打开
          <code class="text-info underline"> 软件根目录/Data/local.mdb </code>
          文件，密码是 <UKbd class="capitalize">Joney</UKbd>（首字母大写）。
        </li>
        <li>
          进入
          <code class="text-info"> gates </code>表，并过滤<code
            class="text-indigo-500"
          >
            nChannel
          </code>
          列的值为
          <UKbd> 5 </UKbd>； 过滤<code class="text-indigo-500"> szwheel </code
          >列的值为<UKbd>RE2B</UKbd> 或<UKbd>RD2</UKbd>；过滤<code
            class="text-indigo-500"
          >
            nGate
          </code>
          列的值为 <UKbd> 0 </UKbd>。
        </li>
        <li>
          将过滤后的记录的
          <code class="text-info"> nLeft </code> 字段的值调整到
          <UKbd> 1 </UKbd>，并保存数据库。
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped></style>
