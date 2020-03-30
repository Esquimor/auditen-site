<template>
  <section class="IndexItem">
    <div class="IndexItem-image">
      <slot name="image" />
    </div>
    <div class="IndexItem-text">
      <slot />
    </div>
  </section>
</template>

<script>
"use strict";

export default {
  name: "IndexItem"
};
</script>

<style lang="scss"></style>
