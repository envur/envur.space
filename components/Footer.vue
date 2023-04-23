<script setup>
const socials = [
  {
    url: "https://linkedin.com/in/gustavo-stefanello",
    icon: "fa fa-linkedin",
  },
  {
    url: "https://github.com/envur",
    icon: "fa fa-github",
  },
  {
    url: "https://hachyderm.io/@envur",
    icon: "fa-brands fa-mastodon",
  },
];
</script>

<template>
  <footer>
    <div>
      made with 🎵 and 🍺 by
      <NuxtLink :to="{ name: 'about-me' }">Gustavo Stefanello</NuxtLink>
      <i class="copyleft fa fa-copyright" />
      {{ new Date().getFullYear() }}
    </div>
    <ul>
      <li v-for="social in socials" :key="social.url">
        <a rel="me" :href="social.url" target="_blank"
          ><i :class="social.icon"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.copyleft {
  display: inline-block;
  transform: rotate(180deg);
  margin: 0 0 0 0.3rem;
}
footer {
  height: 10vh;
  padding: 0 1rem;
  border-top: 1px solid #fff;
}
li {
  margin: 0 0.3rem;
}
footer,
ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 576px) {
  footer {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }
}
</style>
