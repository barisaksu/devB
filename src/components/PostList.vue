<template>
  <div class="divide-y divide-gray-400 dark:divide-gray-800">
    <article class="py-2" v-for="(post, index) in posts" :key="index">
      <h2 class="antialiased">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </h2>
      <small class="text-gray-700" :title="post.node.date"
        >{{ post.node.date }} · {{ post.node.timeToRead }} min read</small
      >
      <!-- <p>{{ post.node.description }}</p> -->
    </article>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>