<template>
  <div v-html="markdown"></div>
</template>

<script>
import mdText from "./README.md";
import changeMarkdown from "@/utils/markdown.js";
export default {
  data() {
    return {};
  },
  computed: {
    markdown() {
      return changeMarkdown(mdText);
    },
  },
};
</script>

<style></style>
