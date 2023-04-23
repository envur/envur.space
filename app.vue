<script setup>
const route = useRoute();

let atEntrance = computed(() => {
  return route.name === "index";
});

useHead({
  title: `[envur]`,
});
</script>

<template>
  <div>
    <NuxtLayout>
      <Navbar v-if="!atEntrance" />
      <NuxtPage id="app" />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  max-width: 50vw;
  margin: 3rem auto;
}

@media (max-width: 1115px) {
  #app {
    min-width: 80vw;
  }
}
</style>
