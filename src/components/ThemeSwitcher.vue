<template>
  <div>
    <button @click="toggleTheme()">
      <svg
        v-if="theme == 'dark'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-sun"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-moon"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "",
    };
  },
  methods: {
    setTheme() {
      if (process.isClient && localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
        this.theme = "light";
      }

      if (process.isClient) {
        this.theme = localStorage.getItem("theme");
        if (this.theme == "dark")
          document.documentElement.classList.add("scheme-dark");
      }
    },
    toggleTheme() {
      if (this.theme == "light") {
        localStorage.setItem("theme", "dark");
        this.theme = "dark";
        document.documentElement.classList.add("scheme-dark");
      } else {
        localStorage.setItem("theme", "light");
        this.theme = "light";
        document.documentElement.classList.remove("scheme-dark");
      }
    },
  },
  mounted() {
    this.setTheme();
  },
};
</script>

<style lang="scss" scoped>
</style>