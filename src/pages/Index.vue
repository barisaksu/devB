<template>
  <Layout>
    <Header slot="about" />

    <PostList :posts="$page.posts.edges" />
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        title
        description
        path
        date(format: "D MMMM  YYYY")
        timeToRead
      }
    }
  }
}
</page-query>

<script>
import Header from "~/components/Header.vue";
import PostList from "~/components/PostList.vue";

export default {
  components: {
    Header,
    PostList,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
