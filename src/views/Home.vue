<template>
  <section class="container-hero row align-items-center">
    <div class="col-md-12 col-lg-5">
      <img
        src="../assets/img/header-img.svg"
        alt="Illustration d'une personne qui code"
      />
    </div>
    <div class="col-md-12 col-lg">
      <h1>
        Bienvenue sur votre application d’aide mémoire en
        <span>Développement Web !</span>
      </h1>
      <p>
        Faites de la place dans votre mémoire !<br />Sauvegarder et retrouver
        tous les sites que vous aurez enregistrés et qui seront utiles à votre
        apprentissage.
      </p>
      <div class="container-search">
        <div class="container-control">
          <i class="bi bi-search"></i>
          <input
            type="text"
            id="search"
            placeholder="Entrer votre recherche"
            class="form-control"
          />
        </div>
        <button class="custom-btn">Explorer</button>
      </div>
    </div>
  </section>
  <section class="row">
    <h2 class="col-12 text-center">
      Vous recherchez un <span>thème</span> en particulier ?
    </h2>

    <div class="container-tag">
      <div
        v-for="(tag, index) in tagList"
        :key="index"
        :class="{ active: index === activeButton }"
      >
        <button class="btn-tag" @click="tagClick(tag, index)">{{ tag }}</button>
      </div>
    </div>

    <div class="separator-horizontal"></div>
  </section>

  <section class="row">
    <div class="col d-flex justify-content-between align-items-center mb-4">
      <h3>Votre liste de <span>site</span></h3>
      <button class="btn-refresh" @click="refresh">
        <i class="bi bi-arrow-clockwise"></i>
      </button>
    </div>

    <div class="container-card">
      <card-site
        v-for="(site, index) in filterCategories"
        :key="index"
        :id="site.id"
        :name="site.name"
        :url="site.url"
        :description="site.description"
        :tags="site.tags"
        @tagClick="tagClick"
        :now="site.now"
        @delete="deleteSite"
      ></card-site>
    </div>

    <div class="separator-horizontal"></div>
  </section>
</template>

<script>
import CardSite from "@/components/CardSite.vue";

export default {
  name: "Home",
  components: {
    CardSite,
  },
  data() {
    return {
      siteList: [],
      tagList: [],
      tag: "",
      activeButton: null,
    };
  },
  created() {
    this.loadSite();
  },
  computed: {
    // Filtre les tags avec les données
    filterCategories() {
      if (this.tag) {
        return this.siteList.filter((item) => {
          if (item.tags) {
            return item.tags.includes(this.tag);
          }
        });
      } else {
        return this.siteList;
      }
    },
  },

  methods: {
    // Chargement des données
    loadSite() {
      let url =
        "https://memorycode-ee3dc-default-rtdb.firebaseio.com/sites.json";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Tableau qui contient les données
          let sites = [];
          for (const key in data) {
            const site = {
              id: key,
              now: data[key].now,
              name: data[key].name,
              description: data[key].description,
              tags: data[key].tags,
              url: data[key].url,
            };
            console.log(key);
            sites.push(site);
          }

          this.siteList = sites.reverse();

          // Tableau qui contient les tags
          sites.map((site) => {
            if (site.tags) {
              site.tags.map((tag) => {
                if (!this.tagList.includes(tag)) {
                  this.tagList.push(tag);
                }
              });
            }
          });
        })
        .catch((error) => console.log("error", error));
    },

    // Supprimer
    deleteSite(id) {
      if (
        confirm(
          'Attention, vous allez supprimer ce lien ! Cliquer sur le bouton "Ok" pour continuer ! '
        )
      ) {
        fetch(
          `https://memorycode-ee3dc-default-rtdb.firebaseio.com/sites/${id}.json`,
          {
            method: "DELETE",
          }
        )
          .then(() => this.loadSite())
          .catch((error) => console.log("error", error));
      }
    },

    // Cibler un tag
    tagClick(tag, index) {
      this.tag = tag;
      this.activeButton = index;
    },

    // Recharge la page pour le filtre de tags
    refresh() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.active button {
  background-color: #08dca5;
}

// Section hero
.container-hero {
  margin: 40px 0;
}

h1 {
  font-family: "Lato-Medium", sans-serif;
  color: #0f211f;
  font-size: 40px;
}

h1 > span {
  color: #08dca5;
}

h3 > span {
  color: #08dca5;
}

p {
  font-size: 20px;
  color: #0f211f;
  margin-bottom: 0;
}

.container-search {
  margin-top: 32px;
  display: flex;
}

.container-control {
  position: relative;
  display: flex;
  margin-right: 16px;
  width: 100%;
}

.container-control i {
  font-size: 20px;
  position: absolute;
  top: 11px;
  left: 16px;
  z-index: 2;
}

.form-control {
  width: 100%;
  border: 2px solid #fff;
  border-radius: 6px;
  padding: 12px 14px 12px 44px;
  border: 2px solid #0f211f;
  box-shadow: 0px -3px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
}

.form-control:focus,
.form-control:hover {
  box-shadow: 0 0 0 0.3rem rgba(8, 220, 165, 0.2);
  border: 2px solid #08dca5;
}

.custom-btn {
  font-family: "Lato-Medium", sans-serif;
  padding: 10px 16px;
  border: 2px solid #0f211f;
  border-radius: 6px;
  color: #0f211f;
  background-color: #08dca5;
  letter-spacing: 0.5px;
  box-shadow: 0px -3px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);

  &:hover {
    color: #08dca5;
    background-color: #0f211f;
  }
}

// Section Tag
h2 {
  font-family: "Lato-Medium", sans-serif;
  color: #0f211f;
  font-size: 30px;
}

h2 > span {
  color: #08dca5;
}

.separator-horizontal {
  margin-top: 40px;
  margin-bottom: 70px;
  width: 100%;
  height: 2px;
  background-color: #08dca5;
}

// Section Liste
h3 {
  font-family: "Lato-Regular", sans-serif;
  font-size: 28px;
  color: #0f211f;
  margin-bottom: 0;
}

.btn-refresh {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: auto;
  padding: 6px 10px;
  background-color: #08dca5;
  border: 1px solid #08dca5;
  border-radius: 8px;

  i {
    color: #0f211f;
    font-size: 18px;
  }

  &:hover {
    background-color: #0f211f;
    border: 1px solid #0f211f;

    i {
      color: #08dca5;
    }
  }
}

.container-card {
  margin: 32px 0;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px;
}

.container-tag {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-tag {
  font-family: "Lato-Medium", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 200px;
  width: auto;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #0f211f;
  background-color: #fff;
  color: #13201f;
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
