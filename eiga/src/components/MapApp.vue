<template>
  <div class="map">
    <h1>{{ name }}</h1>
    <div class="map-container">
      <div class="checkpoint-container" v-for="checkpoint in checkpoints"
        v-bind:key="checkpoint.name">
        <div class="checkpoint-path"></div>
        <div class="checkpoint-icon">
          <div class="checkpoint-title">{{ checkpoint.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapApp',
  data: function() {
    return {
      name: "Physics C",
      checkpoints: [
        {
          name: "Read assignment",
          members: ["Ignas"],
        },
        {
          name: "Part 1",
          members: ["Jonah"],
        },
        {
          name: "Conclusion",
          members: [],
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkpoint-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkpoint-path {
  width: 20px;
  height: 100px;
  background-color: #e53b3b;

  z-index: 0;
}

.checkpoint-icon {
  margin-top: -10px;
  margin-bottom: -10px;

  width: 30px;
  height: 30px;
  
  background-color: #eee;

  border-radius: 100px;
  border: 7px solid #e53b36;

  z-index: 1;
}

.checkpoint-title {
  margin-left: 50px;
}

</style>
