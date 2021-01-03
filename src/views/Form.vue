<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <div class="row p-1">
          <div class="col-md-6 mx-auto">
            <div class="card rounded-0">
              <div class="card-header">
                <h3 class="mb-0">Blog Yaz</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label for="title"
                      >Başlık <label class="text-danger">*</label></label
                    >

                    <input
                      v-model="post.title"
                      type="text"
                      class="form-control form-control-lg rounded-0"
                      name="title"
                      id="title"
                    />
                  </div>
                  <div class="form-group">
                    <label for="description"
                      >Açıklama <label class="text-danger">*</label></label
                    >
                    <input
                      v-model="post.description"
                      type="text"
                      class="form-control form-control-lg rounded-0"
                      name="description"
                      id="description"
                    />
                  </div>
                  <div class="form-group">
                    <label for="content"
                      >İçerik <label class="text-danger">*</label></label
                    >

                    <textarea
                      v-model="post.content"
                      class="form-control"
                      id="content"
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="author"
                      >Yazar <label class="text-danger">*</label></label
                    >
                    <input
                      v-model="post.author"
                      type="text"
                      class="form-control form-control-lg rounded-0"
                      name="author"
                      id="author"
                    />
                  </div>
                  <div class="form-group">
                    <label for="thumbnail">Thumbnail</label>
                    <input
                      v-model="post.img"
                      type="text"
                      class="form-control form-control-lg rounded-0"
                      name="thumbnail"
                      id="thumbnail"
                    />
                  </div>
                  <div class="form-group mt-2">
                    <button
                      @click="addPost()"
                      class="btn btn-success float-right"
                    >
                      Gönder !
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        title: null,
        description: null,
        content: null,
        author: null,
        img: null,
      },
    };
  },
  methods: {
    addPost() {
      if (
        this.post.title === null ||
        this.post.description === null ||
        this.post.content === null ||
        this.post.author === null
      ) {
        alert("lütfen tüm alanları doldurunuz");
      } else {
        axios
          .post("http://localhost:3000/posts", this.post)
          .then((p) => {
            console.log("post yayınlandı", p);
            alert("yazınız yayınlandı");
   this.$router.push("/");
          })
          .catch((err) => console.error(err));
        this.post = {};
      }
    },
  },
 
};
</script>
