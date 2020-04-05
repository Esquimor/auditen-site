<template>
  <section class="IndexItem" :class="{inverse}">
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
  name: "IndexItem",
  props: {
    inverse: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.IndexItem {
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    flex-direction: column;
  }
  &.inverse {
    .IndexItem-text {
      order: -1;
      @media (max-width: 750px) {
        order: 1;
      }
    }
  }
  &-image {
    @media (max-width: 750px) {
      margin: 0 auto;
    }
  }
  img {
    padding-top: 2rem;
    max-width: 200px;
  }
  &-text {
    padding: 0 25px;
    width: calc(100% - 50px);
    max-width: 450px;
  }
}
</style>
