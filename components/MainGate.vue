<script setup>
const thoughtsTopics = [
  {
    topic: "Life",
    tags: ["life"],
  },
  {
    topic: "Travels",
    tags: ["travel"],
  },
  {
    topic: "Hobbies",
    tags: ["hobby"],
  },
  {
    topic: "Career",
    tags: ["career"],
  },
];

const knowledgeTopics = [
  {
    topic: "Tech",
    tags: ["tech"],
  },
  {
    topic: "Tools/Skills",
    tags: ["tool", "skill"],
  },
  {
    topic: "Languages",
    tags: ["languages"],
  },
  {
    topic: "Humanities",
    tags: ["humanity", "culture", "humanities"],
  },
];
</script>

<template>
  <header>
    <h1>Welcome to my place on the net.</h1>
    <nav id="topics">
      <div>
        <h3>Thoughts on Things</h3>
        <ul class="topics-list">
          <li v-for="thought in thoughtsTopics" :key="thought.topic">
            <NuxtLink
              :to="{ path: '/thoughts', query: { tags: thought.tags } }"
              class="black-link"
              >{{ thought.topic }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <img src="../assets/images/black_frog.png" alt="My Avatar/Logo" />
      <div>
        <h3>Knowledge Base</h3>
        <ul class="topics-list">
          <li v-for="knowledge in knowledgeTopics" :key="knowledge.topic">
            <NuxtLink
              :to="{ path: '/knowledge', query: { tags: knowledge.tags } }"
              class="black-link"
              >{{ knowledge.topic }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <ul id="nav-links">
        <li>
          <NuxtLink :to="{ name: 'about-the-garden' }" class="black-link"
            >What is this?</NuxtLink
          >
        </li>
        <span>·</span>
        <li>
          <NuxtLink :to="{ name: 'about-me' }" class="black-link"
            >Who am I?</NuxtLink
          >
        </li>
      </ul>
      <hr />
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
  </header>
</template>

<style scoped>
img {
  width: auto;
  height: 12rem;
}
nav {
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  color: #000;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
}
header > * {
  margin: 2rem auto;
}
#contact,
#nav-links {
  display: flex;
  justify-content: space-between;
}

#nav-links {
  font-size: 1.2rem;
}

@media (max-width: 1115px) {
  header > * {
    margin: 1rem auto;
  }
  img {
    padding: 1rem 0;
  }
  #topics {
    flex-direction: column;
  }
  .topics-list {
    display: flex;
  }
  .topics-list > * {
    margin: 0 0.5rem;
  }
}
</style>
