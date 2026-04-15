<script setup lang="ts"></script>

<template>
  <div class="space-y-6">
    <h1 class="text-highlighted text-3xl">设备调试</h1>
    <h2 class="text-highlighted text-2xl"></h2>
    <section class="w-full overflow-x-auto">
      <Table class="text-center">
        <caption class="text-toned">
          LWCZT-H、F型探伤机轴身探头定位表
        </caption>
        <colgroup>
          <col width="100" />
          <col width="140" />
          <col width="70" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="100" />
          <col width="100" />
          <col width="100" />
          <col width="100" />
          <col width="100" />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableHeader rowspan="3">机型</TableHeader>
            <TableHeader rowspan="3">组探头规格及差动行程</TableHeader>
            <TableHeader rowspan="3">探测轴型</TableHeader>
            <TableHeader colspan="3">探头定位（mm）</TableHeader>
            <TableHeader colspan="3">探头移动范围（mm）</TableHeader>
            <TableHeader colspan="2">组合探头声场覆盖范围（mm）</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader colspan="2">按探头前端算</TableHeader>
            <TableHeader>按探头中心算</TableHeader>
            <TableHeader rowspan="2">探头前端距轴中央</TableHeader>
            <TableHeader rowspan="2">探头前端距轮毂内侧面</TableHeader>
            <TableHeader rowspan="2">移动长度</TableHeader>
            <TableHeader colspan="2">从轴端向轴中央算</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader>距轴中央</TableHeader>
            <TableHeader>距轮毂内侧面</TableHeader>
            <TableHeader>距轮辋内侧面</TableHeader>
            <TableHeader>起点至终点</TableHeader>
            <TableHeader>覆盖长度</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowspan="9">LWCZT-H型</TableCell>
            <TableCell rowspan="3"
              >54.4/45/0<br />差动油缸行程为30mm<br />（未大修设备）</TableCell
            >
            <TableCell>RD2</TableCell>
            <TableCell>555</TableCell>
            <TableCell>53</TableCell>
            <TableCell>155</TableCell>
            <TableCell>555~462</TableCell>
            <TableCell>53-146</TableCell>
            <TableCell rowspan="9">>=93</TableCell>
            <TableCell>254~484</TableCell>
            <TableCell>230</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2A</TableCell>
            <TableCell>525</TableCell>
            <TableCell>83</TableCell>
            <TableCell>185</TableCell>
            <TableCell>525~432</TableCell>
            <TableCell>83~176</TableCell>
            <TableCell>289~523</TableCell>
            <TableCell>234</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2B</TableCell>
            <TableCell>525</TableCell>
            <TableCell>83</TableCell>
            <TableCell>185</TableCell>
            <TableCell>525~432</TableCell>
            <TableCell>83~176</TableCell>
            <TableCell>282~518</TableCell>
            <TableCell>236</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowspan="3"
              >54.4/45/0<br />差动油缸行程为15mm<br />（单位自选）</TableCell
            >
            <TableCell>RD2</TableCell>
            <TableCell>555</TableCell>
            <TableCell>53</TableCell>
            <TableCell>155</TableCell>
            <TableCell>555~462</TableCell>
            <TableCell>53-146</TableCell>
            <TableCell>254~484</TableCell>
            <TableCell>230</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2A</TableCell>
            <TableCell>540</TableCell>
            <TableCell>68</TableCell>
            <TableCell>170</TableCell>
            <TableCell>540~447</TableCell>
            <TableCell>68~161</TableCell>
            <TableCell>274~508</TableCell>
            <TableCell>234</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2B</TableCell>
            <TableCell>540</TableCell>
            <TableCell>68</TableCell>
            <TableCell>170</TableCell>
            <TableCell>540~447</TableCell>
            <TableCell>68~161</TableCell>
            <TableCell>267~503</TableCell>
            <TableCell>236</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowspan="3"
              >51/44/0<br />差动油缸行程为15mm<br />（设备标配）</TableCell
            >
            <TableCell>RD2</TableCell>
            <TableCell>566</TableCell>
            <TableCell>42</TableCell>
            <TableCell>145</TableCell>
            <TableCell>566~473</TableCell>
            <TableCell>42~135</TableCell>
            <TableCell>272~481</TableCell>
            <TableCell>209</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2A</TableCell>
            <TableCell>551</TableCell>
            <TableCell>57</TableCell>
            <TableCell>160</TableCell>
            <TableCell>551~458</TableCell>
            <TableCell>57~150</TableCell>
            <TableCell>291~501</TableCell>
            <TableCell>210</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2B</TableCell>
            <TableCell>551</TableCell>
            <TableCell>57</TableCell>
            <TableCell>160</TableCell>
            <TableCell>551~458</TableCell>
            <TableCell>57~150</TableCell>
            <TableCell>286~496</TableCell>
            <TableCell>210</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowspan="4">LWCZT-F型</TableCell>
            <TableCell rowspan="4"
              >51/44/0<br />差动油缸行程为37mm<br />（设备标配）</TableCell
            >
            <TableCell>RD2</TableCell>
            <TableCell>566</TableCell>
            <TableCell>42</TableCell>
            <TableCell>145</TableCell>
            <TableCell>566~471</TableCell>
            <TableCell>42~137</TableCell>
            <TableCell rowspan="4">>=95</TableCell>
            <TableCell>272~481</TableCell>
            <TableCell>209</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2A</TableCell>
            <TableCell>566</TableCell>
            <TableCell>42</TableCell>
            <TableCell>145</TableCell>
            <TableCell>566~471</TableCell>
            <TableCell>42~137</TableCell>
            <TableCell>277~492</TableCell>
            <TableCell>215</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RE2B</TableCell>
            <TableCell>566</TableCell>
            <TableCell>42</TableCell>
            <TableCell>145</TableCell>
            <TableCell>566~471</TableCell>
            <TableCell>42~137</TableCell>
            <TableCell>272~486</TableCell>
            <TableCell>214</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>RF2</TableCell>
            <TableCell>529</TableCell>
            <TableCell>79</TableCell>
            <TableCell>182</TableCell>
            <TableCell>529~434</TableCell>
            <TableCell>79~174</TableCell>
            <TableCell>305~523</TableCell>
            <TableCell>218</TableCell>
          </TableRow>
        </TableBody>
        <TableFoot v-if="false">
          <TableRow></TableRow>
        </TableFoot>
      </Table>
    </section>
  </div>
</template>
