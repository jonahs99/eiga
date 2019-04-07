<template>
  <div class="map">
    <h1 class="title" v-if="room">{{ room.name }}</h1>
    <div class="map-container" v-if="checkpoints">
      <check-point
        v-for="checkpoint in checkpoints"
        v-bind:key="checkpoint.id"
        v-bind:checkpoint="checkpoint"
        v-on:update-title="changeCheckpoint"
        v-on:delete="deleteCheckpoint"
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
      checkpointsCollection: db
        .collection("rooms")
        .doc(this.docId)
        .collection("checkpoints")
    };
  },
  firestore() {
    return {
      room: this.roomDoc,
      checkpoints: this.checkpointsCollection.orderBy("timestamp")
    };
  },
  methods: {
    addCheckpoint() {
      this.checkpointsCollection.add({
        title: "",
        timestamp: firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
      });
    },
    changeCheckpoint(id, title) {
      this.checkpointsCollection.doc(id).update({
        title
      });
    },
    deleteCheckpoint(id) {
      this.checkpointsCollection.doc(id).delete();
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
  margin-bottom: 40px;

  background: #1cb0f6;
  border-radius: 50px;

  width: 14px;
  height: 14px;

  color: white;
  vertical-align: center;
  line-height: 15px;
}
</style>
