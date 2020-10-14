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
footer a {
  box-shadow: 0 1px 0 0 #000;

  &:hover {
    box-shadow: none;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='Squiggle-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.st0{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='blue' stroke-width='1' class='st0' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
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

a {
  @apply transition duration-300;
  padding-bottom: 0.15em;

  &:hover {
    color: blue;
  }
}
</style>
