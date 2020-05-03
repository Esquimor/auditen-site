<template>
  <Layout>
    <div class="BlogPage" v-html="$page.blog.content" />
  </Layout>
</template>

<page-query>
query Blog ($path: String!) {
  blog: blog (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.metainfo,
    };
  },
};
</script>

<style lang="scss">
.BlogPage {
  width: calc(100% - 1rem);
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.5rem 0rem;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  img {
    width: 350px;
    margin: 0 auto;
    display: flex;
    @media (max-width: 450px) {
      width: 300px;
    }
    @media (max-width: 400px) {
      width: 275px;
    }
    @media (max-width: 350px) {
      width: 250px;
    }
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    thead {
      tr {
        th {
          background-color: #777;
          color: white;
          padding: 0.5rem;
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 0.25rem;
          padding: 0.5rem;
        }
      }
    }
  }
}
</style>
