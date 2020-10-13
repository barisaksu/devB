<template>
  <div class="space-y-2">
    <h1 class="text-2xl">Hello! I'm Barış.</h1>
    <p>🚀 A passionate Full-Stack web developer and musician from Turkey</p>
    <div class="flex">
      <a class="title mr-2" href="#">
        <Github />
      </a>
      <a class="title mr-2 hover:text-red-500" href="#">
        <Gitlab />
      </a>
    </div>
  </div>
</template>

<script>
import Github from "~/components/brands/Github.vue";
import Gitlab from "~/components/brands/Gitlab.vue";
export default {
  components: {
    Github,
    Gitlab,
  },
};
</script>

<style lang="scss" scoped>
</style>