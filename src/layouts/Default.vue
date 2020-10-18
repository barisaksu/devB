<template>
  <div class="container mx-auto mt-4 px-4 lg:pl-12 max-w-4xl">
    <div class="flex flex-col justify-center items-center">
      <header class="text-center md:text-left w-full md:flex left-0 mt-10">
        <ThemeSwitcher
          class="hidden lg:flex lg:fixed right-0 top-0 m-20 rounded-full"
        />
        <div class="flex md:flex-col justify-center lg:absolute lg:-ml-32">
          <div class="flex">
            <ThemeSwitcher
              class="inline-flex absolute self-end lg:hidden bg-gray-900 dark:bg-yellow-500 text-white rounded-full"
            />
            <g-image
              class="rounded-full w-24 h-24"
              alt="Example image"
              src="~/assets/images/avatar.png"
              width="135"
            />
          </div>
          <div class="hidden lg:flex justify-center mt-2">
            <Github username="barisaksu" />
            <Gitlab username="baris" />
          </div>
        </div>
        <slot name="about"></slot>
      </header>
      <div class="w-full my-5">
        <slot />
      </div>
      <footer
        class="flex flex-col-reverse md:flex-row w-full justify-between my-4"
      >
        <span>© 2020 Barış Aksu</span>
        <div>
          <a href="https://github.com/baris" target="_blank">Gitlab</a
          ><span> / </span
          ><a href="https://twitter.com/barisaksu" target="_blank">Twitter</a
          ><span> / </span
          ><a href="https://www.linkedin.com/in/barisaksu" target="_blank"
            >LinkedIn</a
          ><span> / </span
          ><a href="https://dev.to/baris" target="_blank">DEV</a>
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

<script>
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import Github from "~/components/brands/Github.vue";
import Gitlab from "~/components/brands/Gitlab.vue";
export default {
  components: {
    Github,
    Gitlab,
    ThemeSwitcher,
  },
};
</script>

<style lang="scss">
body {
  font-family: "Raleway", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);

  &::-webkit-scrollbar {
    width: 4px;
    cursor: pointer;
    /*background-color: rgba(229, 231, 235, var(--bg-opacity));*/
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(229, 231, 235, var(--bg-opacity));
    cursor: pointer;
    /*background: red;*/
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #000;
    /*outline: 1px solid slategrey;*/
  }

  footer,
  nav {
    a {
      box-shadow: 0 1px 0 0 var(--underline-color);

      &:hover {
        box-shadow: none;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='Squiggle-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.st0{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none'  stroke='blue' stroke-width='1' class='st0' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
        background-position: 0 17px;
        background-size: auto 3px;
        background-repeat: repeat-x;
        padding-bottom: 0.15em;
        background-clip: initial;
        -webkit-text-fill-color: initial;
        -webkit-box-decoration-break: initial;
        box-decoration-break: slice;
      }
    }
  }

  a {
    @apply transition duration-300;
    padding-bottom: 0.15em;

    &:hover {
      color: var(--link-hover);
    }
  }
}
</style>
