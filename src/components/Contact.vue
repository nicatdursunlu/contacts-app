<template>
  <div class="content" @click="openContact">
    <div class="column">
      <img v-if="contact.image" :src="contact.image" class="image" />
      <div v-else class="letters-container">
        <h1 class="letter">{{ firstLetter[0] }}{{ firstLetter[1] }}</h1>
      </div>
    </div>
    <div class="details">
      <p class="name">{{ contact.name }}</p>
      <p class="telephone">{{ contact.tel }}</p>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
import ContactDetails from "./ContactDetails";
import { SET_CURRENT_CONTACT, SHOW_CONTACT } from "../store/contacts/types";

export default {
  components: { Modal, ContactDetails },
  props: ["contact"],
  computed: {
    firstLetter() {
      const name = this.contact.name;
      return [name[0], name[name.indexOf(" ") + 1]];
    },
  },
  methods: {
    openContact() {
      this.$store.dispatch(SET_CURRENT_CONTACT, this.contact);
      this.$store.dispatch(SHOW_CONTACT);
    },
  },
};
</script>

<style scoped>
.content {
  background-color: #ffcff1;
  border: 2px solid #ff1493;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  align-items: center;
  min-width: calc(100% - 100px);
  cursor: pointer;
  height: 100px;
}
.details {
  margin-left: 20px;
}
p {
  margin: 18px;
}
.image {
  width: 90px;
  height: 90px;
  border-radius: 100%;
}
.letters-container {
  background-color: #4d4dff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border: 3px solid crimson;
}
.letter {
  font-size: 35px;
  color: white;
  font-weight: 600;
}
.name {
  font-size: 23px;
  font-weight: bold;
  color: crimson;
}
.telephone {
  color: blue;
  font-size: 20px;
  font-weight: 500;
}
</style>