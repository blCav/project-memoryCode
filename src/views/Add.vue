<template>
  <section class="row container-add">
    <div class="col">
      <h2>Ajouter un <span>site</span> à l’aide mémoire</h2>
      <p>
        Veuillez remplir le formulaire ci-dessous pour pouvoir ajouter un site
        au répertoire. Le champs avec un * est obligatoire.
      </p>
    </div>

    <div class="row align-items-center">
      <div class="col-md-12 col-lg-5">
        <add-site @add-site="addSite"></add-site>
      </div>

      <div class="col-md-12 col-lg">
        <div>
          <img
            src="../assets/img/img-add.svg"
            alt="Illustration de main tapant sur un clavier d'ordinateur"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AddSite from "@/components/AddSite.vue";

export default {
  name: "Add",
  components: {
    AddSite,
  },
  data() {
    return {
      siteList: [],
    };
  },
  created() {
    this.loadSite();
  },
  methods: {
    // Ajouter un site à la base de donnée
    addSite(site) {
      fetch(
        "https://memorycode-ee3dc-default-rtdb.firebaseio.com/sites.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(site),
        }
      ).then(() => this.loadSite());
    },
    loadSite() {
      fetch(
        "https://memorycode-ee3dc-default-rtdb.firebaseio.com/sites.json"
      )
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          this.siteList = data;
          console.log("data", data);
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style lang="scss">
.container-add {
  padding: 12px;
  margin: 32px 0 70px 0;

  h2 {
    font-size: 32px;
  }

  span {
    color: #08dca5;
  }

  p {
    margin-top: 8px;
    margin-bottom: 32px;
  }
}
</style>
