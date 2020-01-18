<template>
    <div class="checkpoint-container">
      <div class="checkpoint-path"></div>
      <div class="checkpoint-icon" v-bind:class="{ checked: checked }"
      v-on:click="onCheck">
          <label-edit class="checkpoint-title" :text="checkpoint.title" placeholder="enter a title"
            v-on:text-updated-enter="onUpdateTitle">
          </label-edit>

          <div class="member-list">
            <span class="member-icon" v-for="member in checkpoint.members" v-bind:key="member">{{member}}</span>
          </div>

          <div class="remove-checkpoint"
            v-on:click="onRemove"> -
          </div>
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
  props: ["checkpoint", "username"],
  methods: {
    onUpdateTitle(text) {
      this.$emit("update-title", this.checkpoint.id, text)
    },
    onRemove() {
      this.$emit("delete", this.checkpoint.id)
    },
    onCheck() {
      this.$emit("check", this.checkpoint.id, !this.checked)
    }
  },

  computed: {
    checked() {
      return this.checkpoint.members && this.checkpoint.members.indexOf(this.username) > -1
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

  position: relative;
}

.checkpoint-title {
  margin-right: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
}

.member-list {
  position: absolute;
  left: 40px;
  top: 0;
}

.member-icon {
  margin-right: 10px;
}

.remove-checkpoint {
  position: absolute;
  left: 40px;
  top: -20px;

  background: #ddeef7;
  border-radius: 50px;

  width: 12px;
  height: 12px;

  color: white;
  vertical-align: center;
  line-height: 12px;
}

.vlabeledit-input{

  height: 50px;
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: inherit;
  text-align: right;
}

.checked {
  background: #BFF199;
}

</style>
