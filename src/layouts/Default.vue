<template>
  <div class="container mx-auto mt-4 px-4 max-w-4xl">
    <div class="flex flex-col justify-center items-center">
      <header class="w-full md:flex left-0 md:items-center mt-10 lg:-ml-64">
        <g-image
          class="rounded-full pr-8"
          alt="Example image"
          src="~/assets/images/avatar.png"
          width="135"
        />
        <slot name="about"></slot>
      </header>
      <div class="w-full my-5 self-end">
        <slot />
      </div>
      <footer
        class="flex flex-col-reverse md:flex-row w-full justify-between my-4"
      >
        <span>© 2020 Barış Aksu</span>
        <div>
          <a href="https://github.com/baris">Gitlab</a><span> / </span
          ><a href="https://twitter.com/barisaksu">Twitter</a><span> / </span
          ><a href="https://www.linkedin.com/in/barisaksu">LinkedIn</a
          ><span> / </span><a href="https://dev.to/baris">DEV</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
a:not(.title) {
  box-shadow: 0 1px 0 0 #3182ce;

  &:hover {
    box-shadow: none;
    color: blue;
  }
}

a {
  @apply transition duration-300;

  &:hover {
    color: blue;
  }
}
</style>
