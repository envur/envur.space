<script setup></script>

<template>
  <nav>
    <div class="items-block">
      <NuxtLink :to="{ name: 'index' }">
        <img
          id="logo"
          src="../assets/images/black_frog.png"
          alt="My Avatar/Logo"
        />
      </NuxtLink>
      <ul id="sections">
        <li>
          <NuxtLink :to="{ name: 'index' }" class="black-link"
            >Entrance</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="{ name: 'about-the-garden' }" class="black-link"
            >What is this?</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="{ name: 'about-me' }" class="black-link"
            >Who am I?</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="items-block">
      <span>Find me @</span>
      <ul id="contact">
        <li>
          <a href="https://github.com/envur" target="_blank" class="black-link"
            >[github]</a
          >
        </li>
        <li>
          <a
            href="https://linkedin.com/in/gustavo-stefanello"
            target="_blank"
            class="black-link"
            >[linkedin]</a
          >
        </li>
        <li>
          <a
            href="https://hachyderm.io/@envur"
            rel="me"
            target="_blank"
            class="black-link"
            >[mastodon]</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
* {
  color: #000;
}
#logo {
  height: 3rem;
  width: auto;
  padding: 0 1rem;
}
.items-block {
  display: flex;
  align-items: center;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
ul {
  padding: 0 1rem;
}
#contact {
  display: flex;
  padding: 0 0.4rem 0 2px;
}
#contact li {
  margin-left: 0rem;
}

@media (max-width: 576px) {
  nav {
    flex-direction: column;
  }
}
</style>
