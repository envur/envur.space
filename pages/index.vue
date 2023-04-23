<script setup lang="ts">
import MainGate from "../components/MainGate.vue";
import RecentList from "../components/RecentList.vue";
</script>

<template>
  <MainGate />
  <section id="growth-section">
    <h1>Catch up with the growth</h1>
    <div id="articles-lists">
      <RecentList :new-articles="true" />
      <RecentList :new-articles="false" />
    </div>
  </section>
</template>

<style scoped>
* {
  text-align: center;
}

#articles-lists {
  width: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media (min-width: 1115px) {
  section:first-child {
    border-right: 1px solid #fff;
  }

  #growth-section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 2rem;
    min-height: 100vh;
  }
}

@media (max-width: 1115px) {
  #articles-lists {
    /* width: auto; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    /* align-items: center; */
  }
  #growth-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
  }
}
</style>
