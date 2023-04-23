<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = {
  where: [{ tags: { $contains: props.tags } }],
};

const metadataIcons = {
  seedling: "seedling",
  planted: "seedling",
  budding: "leaf",
  tended: "leaf",
  evergreen: "tree",
  knowledge: "brain",
  thought: "cloud",
};

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  tags: {
    required: true,
  },
});
</script>

<template>
  <ContentList :path="`/${props.category}`" :query="query">
    <template #default="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink class="article-link" :to="article._path">
          <div class="card">
            <div id="heading">
              <h2>{{ article.title }}</h2>
              <div>
                <div
                  v-for="item in [article.category, article.stage]"
                  :key="item"
                >
                  <i :class="`fa fa-${metadataIcons[item]}`" />
                  <span>
                    {{ item.toUpperCase() }}
                  </span>
                </div>
              </div>
            </div>
            <p>{{ article.description }}</p>
            <hr />
            <div id="card-footer">
              <div id="post-dates">
                <span
                  v-for="[key, value] in Object.entries({
                    planted: article.planted,
                    tended: article.tended,
                  })"
                  :key="value"
                >
                  <span v-if="value">
                    <i :class="`fa fa-${metadataIcons[key]}`" />
                    {{
                      new Date(value).toLocaleDateString("ru-RU", {
                        timeZone: "UTC",
                      })
                    }}</span
                  >
                </span>
              </div>
              <div id="tags">
                <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </template>
    <template #not-found>
      <div class="not-found">
        <i class="fa fa-pagelines" />
        <h1>Looks like there's nothing here yet...</h1>
      </div>
    </template>
  </ContentList>
</template>

<style scoped>
.card {
  border-radius: 15px;
  padding: 1rem;
  border: solid 1px #fff;
}

.card {
  margin-top: 2rem;
}
.card:hover {
  scale: 1.03;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}

.article-link {
  text-decoration: none;
}

.article-link:hover {
  cursor: pointer;
}

.not-found {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.not-found i {
  text-align: center;
  font-size: 5rem;
}

#heading,
#tags {
  display: flex;
  align-items: center;
}

#heading {
  justify-content: space-between;
}

#tags span:not(:last-child),
#post-dates span:not(:last-child) {
  margin-right: 1rem;
}

#heading div i {
  margin-right: 0.4rem;
}

#card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 1115px) {
  #heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #heading h2 {
    text-align: center;
    padding: 0;
  }

  #heading div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #heading div:first-child {
    margin-right: 2rem;
  }

  #card-footer {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
