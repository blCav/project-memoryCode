<template>
  <section class="row align-items-center container-error">
    <div class="col-md-12 col-lg-7">
      <img
        src="../assets/img/img-error.svg"
        alt="Illustration d'un écran d'ordinateur endommagé"
      />
    </div>
    <div class="col-md-12 col-lg">
      <h2><span>Erreur !</span> Cette page n'existe pas !</h2>
      <p>
        Hum, il me semble que cette page n'existe pas...<br />
        Veuillez recommencer votre recherche.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.container-error {
  padding: 12px;
  margin: 40px 0 70px 0;

  h2 {
    span {
      color: #08dca5;
    }
  }

  p {
    font-size: 20px;
  }
}
</style>
