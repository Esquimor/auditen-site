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
    metainfo
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.metainfo
    };
  }
};
</script>

<style lang="scss">
.Post {
  width: calc(100% - 1rem);
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.5rem;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  img {
    width: 100%;
    max-width: 700px;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    thead {
      tr {
        th {
          background-color: #777;
          color: white;
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 0.25rem;
        }
      }
    }
  }
}
</style>