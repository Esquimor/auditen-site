<template>
  <Layout>
    <div class="Post" v-html="$page.post.content" />
    <div class="Post-pdf"><a v-if="!!$page.post.pdf" :href="linkPdf" target="_blank">{{ $page.post.pdfName }}</a></div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    metainfo
    pdf
    pdfName
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.metainfo
    };
  },
  computed: {
    linkPdf() {
      if (!this.$page || !this.$page.post || !this.$page.post.pdf) return ""
      return `/${this.$page.post.pdf}`
    }
  }
};
</script>

<style lang="scss">
.Post {
  width: calc(100% - 1rem);
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
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
  &-pdf {
    display: flex;
    justify-content: center;
    margin: 2rem 0; 
    > a {
      cursor: pointer;
      padding: 0.5rem 1rem;
      background-color: #1565c0;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }
  }
}
</style>