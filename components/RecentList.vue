<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const querySeedlings: QueryBuilderParams = {
  where: [{ stage: { $eq: "seedling" } }],
  limit: 5,
  sort: [{ planted: -1 }],
};

const queryBudding: QueryBuilderParams = {
  where: [{ stage: { $ne: "seedling" } }],
  limit: 5,
  sort: [{ tended: -1 }],
};

const props = defineProps({
  newArticles: Boolean,
});
</script>

<template>
  <section>
    <i
      :class="`icon fa-solid ${props.newArticles ? 'fa-seedling' : 'fa-leaf'}`"
    />
    <h2>{{ props.newArticles ? "New Seedlings" : "Recent Updates" }}</h2>
    <ContentList :query="props.newArticles ? querySeedlings : queryBudding">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            [{{ article.title }} ·
            {{ props.newArticles ? "Planted at" : "Tended at" }}
            {{
              new Date(
                props.newArticles ? article.planted : article.tended
              ).toLocaleDateString("ru-RU", { timeZone: "UTC" })
            }}]
          </NuxtLink>
        </div>
      </template>
      <template #not-found>
        <div class="not-found">
          <p>No recent work to show here... for now.</p>
        </div>
      </template>
    </ContentList>
  </section>
</template>

<style scoped>
.icon {
  font-size: 3rem;
}
section {
  width: 50vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
