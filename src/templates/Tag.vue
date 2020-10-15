<template>
  <Layout>
    <Header slot="about" />

    <h1 class="text-4xl border-b-2 border-t-2">🔎 #{{ $page.tag.title }}</h1>
    <PostList :posts="$page.tag.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
          }
        }
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
