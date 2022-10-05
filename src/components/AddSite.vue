<template>
  <form @submit.prevent="submitData">
    <fieldset>
      <legend>Informations</legend>
      <div class="mb-3">
        <label for="name" class="form-label">Nom du site</label>
        <input
          type="text"
          placeholder="Écrire le nom du site"
          class="form-control"
          id="name"
          name="name"
          v-model.trim="name"
        />
        <span class="form-text" v-if="nameValidity">
          <p>Le nom du site est obligatoire</p>
        </span>
        <span class="form-text" v-else-if="nameValidityLength">
          <p>Le nom du site ne doit pas dépasser 255 caractères</p>
        </span>
      </div>
      
      <div class="mb-3">
        <label for="url" class="form-label">Adresse du site</label>
        <input
          type="text"
          placeholder="Écrire l'adresse url du site"
          class="form-control"
          id="url"
          name="url"
          v-model.trim="url"
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          placeholder="Écrire une description du site"
          id="description"
          name="description"
          v-model.trim="description"
        />
  
        <div class="form-text">
          Pour optimiser vos connaissances, nous vous conseillons de remplir ce
          champ.
        </div>
      </div>

      <div class="mb-3">
        <label for="tags" class="form-label">Catégorie(s)</label>
        <input
          type="text"
          placeholder="Écrire une ou plusieures catégorie(s)"
          class="form-control"
          id="tags"
          name="tags"
          v-model.trim="tags"
        />
      </div>

      <div class="container-button">
        <button type="reset">Annuler</button>
        <button type="submit">Ajouter</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "AddSite",
  emits: ["add-site"],

  data() {
    return {
      name: "",
      url: "",
      description: "",
      tags: "",
      nameValidity: false,
      nameValidityLength: false,
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      this.nameValidity = false;
      this.nameValidityLength = false;

      if (this.name.length === 0) {
        this.nameValidity = true;
        this.formIsValid = false;
      } else if (this.name.length > 255) {
        this.nameValidityLength = true;
        this.formIsValid = false;
      }
    },

    // Envoie du form
    submitData() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      let arrayString = [];
      if (this.tags != "") {
        arrayString = this.tags.split(" ");
      }

      this.$emit("add-site", {
        name: this.name,
        url: this.url,
        description: this.description,
        tags: arrayString,
        now: new Date().toLocaleString(),
      });

      this.clearInput();
    },

    clearInput() {
      this.name = "";
      this.url = "";
      this.description = "";
      this.tags = "";
    },
  },
};
</script>

<style lang="scss">
form {
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  border: 2px solid #13201f;
  box-shadow: 0px -3px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  color: #13201f;
}

legend {
  display: none;
}

label {
  text-align: left !important;
}

label[for="name"]::after {
  content: " *";
  color: #08dca5;
}

input {
  border: 1px solid #13201f;
}

input::placeholder,
textarea::placeholder {
  color: rgba(15, 33, 31, 0.5);
}

input:focus,
input:hover,
textarea:hover,
textarea:focus {
  box-shadow: 0 0 0 0.3rem rgba(8, 220, 165, 0.2);
  border: 1px solid #08dca5;
}

textarea {
  padding: 10px;
  width: 100%;
  border: 1px solid #13201f;
  border-radius: 4px;
}

.container-button {
  display: flex;
  margin-top: 38px;

  button {
    width: 100%;
    border-radius: 6px;
    padding: 10px 15px;
  }

  button[type="reset"] {
    color: #13201f;
    border: 2px solid #13201f;
    margin-right: 16px;
    background-color: transparent;

    &:hover {
      color: #08dca5;
      border: 2px solid #08dca5;
    }
  }

  button[type="submit"] {
    color: #13201f;
    border: 1px solid #08dca5;
    background-color: #08dca5;

    &:hover {
      border: 1px solid #0f211f;
      background-color: #0f211f;
      color: #08dca5;
    }
  }
}
</style>
