<template>
  <!-- <div class="container">
    <div class="card p-5">
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div v-for="post in posts" :key="post.id" class="col col2">
          <div class="card h-100">
            <img :src="post.img" class="card-img-top p-3" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">
                {{ post.description }}
              </p>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ post.author }}</small>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr />
    <div class="container-fluid pt-5">
      <div
        class="d-flex flex-wrap flex-row justify-content-center align-items-center"
      >
   
          <Post v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>
<script>
import Post from "../components/Post";
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Post,
  },
  created() {
    axios.get("http://localhost:3000/posts").then((p) => {
      console.log(p);
      this.posts = p.data;
    });
  },
};
</script>
<style scoped></style>
