<template>
  <a
    :href="`https://gitlab.com/${username}`"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      aria-labelledby="a2wqrk3b3tfru5u48sqwjiftu9w33xxr"
      class="fill-current"
    >
      <title id="a2wqrk3b3tfru5u48sqwjiftu9w33xxr">GitLab</title>
      <path
        d="M5.868 2.75L8 10h8l2.132-7.25a.4.4 0 01.765-.01l3.495 10.924a.5.5 0 01-.173.55L12 22 1.78 14.214a.5.5 0 01-.172-.55L5.103 2.74a.4.4 0 01.765.009v.001z"
      ></path>
    </svg>
  </a>
</template>

<script>
export default {
  props: ["username"],
};
</script>