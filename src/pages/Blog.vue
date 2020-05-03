<template>
  <Layout>
    <div class="Blog">
      <h1>Blog</h1>
      <div class="Blog-blogs">
        <div
          class="Blog-blogs-item"
          v-for="blog in $page.allBlog.edges"
          :key="blog.node.id"
        >
          <div class="Blog-blogs-item-date">{{ blog.node.date }}</div>
          <h2>{{ blog.node.title }}</h2>
          <p>{{ blog.node.description }}</p>
          <div class="Blog-blogs-item-bottom">
            <span>{{ blog.node.timeToRead }} min de lecture</span>
            <g-link :to="blog.node.path" class="Blog-blogs-item-button"
              >Lire plus</g-link
            >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allBlog {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        date (format: "D/MM/YYYY")
        path
        description
      }
    }
  }
}
</page-query>

<script>
"use strict";

import BlogItem from "@/components/BlogItem";

export default {
  name: "Blog",
  components: {
    BlogItem,
  },
};
</script>

<style lang="scss">
.Blog {
  width: calc(100% - 1rem);
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.5rem 0rem;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  &-blogs {
    &-item {
      color: rgba(0, 0, 0, 0.8);
      text-decoration: none;
      padding: 1rem 1rem 2rem;
      border-top: 1px solid #eeeeee;
      &-button {
        margin-left: 0.5rem;
      }
      &-date {
        font-size: 14px;
      }
      &-bottom {
        font-weight: 600;
      }
      > h2 {
        margin: 0.75rem 0;
      }
    }
  }
}
</style>
