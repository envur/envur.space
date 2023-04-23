<template>
  <main>
    <PostsList :category="$route.params.category" :tags="$route.query.tags" />
  </main>
</template>
