<template>
  <div class="card">

    <div class="card-header" v-if="url">
      <a :href="url" target="_blank">{{ name }}</a>
    </div>
    <div class="card-header" v-else>
      <p>{{ name }}</p>
    </div>

    <div class="card-body">
      <small>Créer le {{ now }}</small>
      <p>{{ description }}</p>
    </div>

    <div class="card-site-tag">
      <div v-for="(item, index) in tags" :key="index">
        <button @click="$emit('tagClick', item)">
          {{ item }}
        </button>
      </div>
    </div>
    
    <div class="card-site-footer">
      <button class="btn-favori">Favoris</button>
      <button type="button" class="btn-delete" @click="$emit('delete', id)">
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSite",

  props: {

    id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      validator: (value) => value.length > 0 || value.length <= 25,
    },

    url: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: {
      type: Array,
      required: false,
    },

    now: {
      type: String,
      required: true,
    },
  },
  $emits: ["delete", "tagClick"]
};
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  background-color: #fff;
  color: #13201f;
  margin-bottom: 32px;
  padding: 16px 25px;
  border-radius: 8px;
}

.card-header {
  background-color: #fff;
  border-bottom: 0;
  margin-bottom: 0;
  padding: 0;

  a,
  p {
    font-family: "Lato-Medium", sans-serif;
    color: #13201f;
    text-decoration: none;
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 0;
  }
}
.card-header a:hover {
  color: #08dca5;
}

.card-body {
  padding: 0;

  p {
    margin-top: 1em;
  }
}
.card-site-tag {
  display: flex;
  justify-content: center;

  div {
    margin-top: 16px;
    display: flex;
    padding: 0;
    flex-wrap: wrap;

    button {
      font-family: "Lato-Medium", sans-serif;
      list-style: none;
      text-transform: uppercase;
      font-size: 14px;
      border-radius: 200px;
      padding: 8px 16px;
      font-size: 16px;
      font-weight: 500;
      border: 1px solid #08dca5;
      background-color: #08dca5;
      color: #13201f;
      margin-right: 8px;
      margin-bottom: 16px;
    }

  }
}

.card-site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
}
.btn-delete {
  width: 100%;
  border: 1px solid #13201f;
  border-radius: 6px;
  color: #fff;
  background-color: #13201f;
  padding: 8px;

  &:hover {
    border: 1px solid #08dca5;
    background-color: #08dca5;
    color: #13201f;
  }
}

.btn-favori {
  width: 100%;
  border: 2px solid #13201f;
  margin-right: 16px;
  border-radius: 6px;
  color: #13201f;
  background-color: transparent;
  padding: 8px;

  &:hover {
    color: #08dca5;
    border: 2px solid #08dca5;
  }
}
</style>
