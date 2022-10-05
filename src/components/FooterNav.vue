<template>
  <div class="row container-footer-nav">
    <p class="col-md-12 col-lg-4 title-logo">Memory<span>Code</span></p>

    <nav class="col-md-12 col-lg-4">
      <ul>
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }"
            >Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Add' }" 
            >Ajouter</router-link>
        </li>
      </ul>
    </nav>
    
    <div class="col-md-12 col-lg-4 container-freepik">
      <span>Toutes les illustrations<br />sont sous licence de Freepik</span>
      <img src="../assets/img/freepik-icon.svg" alt="Icône de Freepik" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
};
</script>

<style lang="scss" scoped>
.container-footer-nav {
  margin-bottom: 48px;

  p {
    font-size: 24px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  .nav-item {
    list-style: none;
  }

  .nav-item:first-child {
    margin-bottom: 16px;
  }

  .container-freepik {
    display: flex;
    align-items: center;

    img {
      width: 34px;
    }
    span {
      margin-right: 1em;
    }
  }
}
</style>
