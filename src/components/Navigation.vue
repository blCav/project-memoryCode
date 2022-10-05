<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <p class="title-logo">Memory<span>Code</span></p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Add' }">Ajouter</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
.title-logo {
  font-family: "Lato-Bold", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 0;
  color: #13201F;

  span {
    color: #08dca5;
  }
}

.navbar-collapse {
  flex-grow: 0!important;
}

.nav-item:first-child {
  margin-right: 16px;
}

.nav-item a {
  text-decoration: none;
  color: #13201f;
  font-family: "Lato-Medium", sans-serif;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 1.2px;
  padding: 8px 0;

  &:hover {
    color: #08dca5;
    transition: 0.7s ease;
  }

  &:focus {
    color: #08dca5;
  }
}
</style>
