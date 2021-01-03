<template>
  <div class="card m-1">
    <img class=" img-thumbnail" :src="post.img" :alt="post.title" />
    <div class="card-body">
      <router-link :to="`/post-detail/${post.id}`">
        <h5 class="card-title">{{ post.title }}</h5></router-link
      >
      <p class="card-text">
        {{ post.description }}
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{ post.author }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
 
};
</script>

<style scoped>
.card {
  width: 300px;
}
img {
  height: 250px !important;
}
a {
  text-decoration: none;
  color: #198754;
}
</style>
