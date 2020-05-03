<template>
  <div>{{ blog }}</div>
</template>

<script>
"use strict";

export default {
  name: "BlogItem",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
