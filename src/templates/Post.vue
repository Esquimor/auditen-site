<template>
  <Layout>
    <div class="Post" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="scss">
.Post {
  width: 100%;
  max-width: 700px;
  margin: 2rem auto;
}
</style>