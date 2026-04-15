<script setup lang="ts">
type Message = {
  parts: {
    type: "text";
    text: string;
  }[];
  role: "user" | "assistant";
};

type State = {
  input: string;
  messages: Message[];
};

const state = reactive<State>({
  input: "",
  messages: [],
});

const getTextFromBuffer = (buf: string) => {
  return buf
    .split("data:")
    .map((data) => {
      try {
        const json = JSON.parse(data.replace("data:", ""));
        return json.choices[0].delta.content;
      } catch (e) {
        return "";
      }
    })
    .filter(Boolean)
    .join("");
};
const handleClick = async () => {
  state.messages.push({
    role: "user",
    parts: [{ type: "text", text: state.input }],
  });
  state.input = "";

  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({
      model: "4.0Ultra",
      messages: [
        {
          role: "user",
          content: "说一个程序员才懂的笑话",
        },
      ],
      stream: true,
      tools: [
        {
          type: "web_search",
          web_search: {
            enable: false,
          },
        },
      ],
    }),
    headers: {
      Authorization: "Bearer rCJALwydCHKaiiBolPGv:gxneLXlgwLjQQcsNnnEW",
    },
  });

  const reader = res.body?.getReader();
  if (!reader) throw new Error("No reader");

  const decoder = new TextDecoder();
  let buf = "";

  while (true) {
    const readable = await reader.read();
    if (readable.done) break;

    buf += decoder.decode(readable.value, { stream: true });

    let latestMessage = state.messages.at(-1);

    if (!latestMessage) return;

    if (latestMessage.role !== "assistant") {
      state.messages.push({
        role: "assistant",
        parts: [{ text: "", type: "text" }],
      });

      latestMessage = state.messages.at(-1);
    }

    if (!latestMessage) return;

    latestMessage.parts = [{ text: getTextFromBuffer(buf), type: "text" }];
  }

  buf += decoder.decode();
};
</script>

<template>
  <div class="flex min-h-full flex-col">
    <UChatMessages>
      <UChatMessage
        v-for="(message, index) in state.messages"
        :key="index"
        :id="'' + index"
        :role="index % 2 === 0 ? 'assistant' : 'user'"
        :side="index % 2 !== 0 ? 'left' : 'right'"
        :parts="message.parts"
        :avatar="{
          icon: index % 2 === 0 ? 'i-lucide-bot' : 'i-lucide-user',
        }"
        variant="soft"
      />
    </UChatMessages>
    <UChatPrompt
      v-model="state.input"
      @submit="handleClick"
      class="sticky bottom-0"
    >
      <UChatPromptSubmit />
    </UChatPrompt>
  </div>
</template>
