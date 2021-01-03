<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-dark p-1"
        ><i class="fab fa-vuejs fa-lg"></i>Blog</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              aria-current="page"
              href="#"
              >Home <i class="fas fa-home"></i></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/add-post" active-class="active" class="nav-link"
              >Blog Yaz <i class="fas fa-pencil-alt"></i></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
