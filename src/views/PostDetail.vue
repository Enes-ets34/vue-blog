<template>
  <div class="container-fluid pt-5">
    <h2 class="text-center">{{ post.title }}</h2>
    <hr />
    <div
      class="d-flex flex-wrap flex-row justify-content-center align-items-center"
    >
      <div class="card m-1">
        <img class=" img-thumbnail" :src="post.img" :alt="post.title" />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
       
          <p class="card-text">
            {{ post.content }}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{{ post.author }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import axios from "axios";
export default {
  components: {
    Post,
  },
  data() {
    return {
      post: {
        author: null,
        content: null,
        description: null,
        id: null,
        img: null,
        title: null,
      },
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/posts/${this.$route.params.id}`)
      .then((r) => {
        console.log(r);
        this.post = r.data;
      });
  },
};
</script>

<style scoped>
.card {
  width: 300px;
}
img {
  width: 500px !important;
}
</style>
