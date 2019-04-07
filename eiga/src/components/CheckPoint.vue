<template>
    <div class="checkpoint-container">
      <div class="checkpoint-path"></div>
      <div class="checkpoint-icon">
          <label-edit class="checkpoint-title" :text="checkpoint.title" placeholder="enter a title"
          v-on:text-updated-enter="onUpdateTitle"
          ></label-edit>
      </div>
    </div>
</template>

<script>
import LabelEdit from "label-edit";

export default {
  name: "CheckPoint",
  components: {
    LabelEdit
  },
  props: ["checkpoint"],
  data() {
    return {
      checked: false
    }
  },
  methods: {
    onUpdateTitle(text) {
      this.$emit("update-title", this.checkpoint.id, text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

  background-color:white;

  border-radius: 100px;
  border: 7px solid #e53b36;

  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.checkpoint-title {
  margin-right: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
}
</style>
