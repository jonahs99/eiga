<template>
  <div class="map">
    <h1 class="title">{{ room.name }}</h1>
    <div class="map-container">
      <check-point
        v-for="checkpoint in checkpoints"
        v-bind:key="checkpoint.name"
        v-bind:checkpoint="checkpoint"
      ></check-point>

      <div class="add-checkpoint" v-on:click="addCheckpoint">+</div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";

import CheckPoint from "./CheckPoint.vue";

export default {
  name: "MapApp",
  components: {
    CheckPoint
  },
  props: ["docId"],
  data() {
    return {
      room: null,
      checkpoints: [],

      roomDoc: db.collection("rooms").doc(this.docId),
      checkpointsCollection: db.collection("rooms").doc(this.docId).collection("checkpoints")
    }
  },
  firestore() {
    return {
      room: this.roomDoc,
      checkpoints: this.checkpointsCollection
    };
  },
  methods: {
    addCheckpoint() {
      this.roomDoc.update({
        checkpoints: firebase.firestore.FieldValue.arrayUnion({
          title: ""
        })
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  position: absolute;
  text-align: left;
  margin-left: 40px;
  margin-top: 40px;

  text-shadow: 0px 2px 0 white;

  z-index: 1;
}

.map-container {
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-checkpoint {
  margin-top: 30px;
}
</style>
