<template>
  <div
    class="backdrop"
    @click.self="HIDE_CONTACT"
    v-if="$store.getters.getContactVisible"
  >
    <div class="container">
      <img
        class="image"
        v-if="getCurrentContact.image"
        :src="getCurrentContact.image"
        :alt="getCurrentContact.name"
      />
      <div v-else class="letters-container">
        <h1 class="letter">{{ getFirstLetter[0] }}{{ getFirstLetter[1] }}</h1>
      </div>
      <button class="close-btn btn" @click="HIDE_CONTACT">
        <i class="far fa-window-close"></i>
      </button>
      <div class="info">
        <p class="name">{{ getCurrentContact.name }}</p>
        <p class="telephone">{{ getCurrentContact.tel }}</p>
        <p class="email">{{ getCurrentContact.email }}</p>
        <p class="address">{{ getCurrentContact.address }}</p>
      </div>

      <div class="icons-row">
        <p class="date">{{ getDate }}</p>
        <button class="button" @click="editContact">
          <i class="fas fa-pencil-alt icon"></i>
        </button>
        <button class="button" @click="deleteContact">
          <i class="far fa-trash-alt icon"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  HIDE_CONTACT,
  DELETE_CONTACT,
  SET_EDIT_MODE,
} from "../store/contacts/types";

export default {
  computed: {
    ...mapGetters(["getCurrentContact", "getFirstLetter", "getDate"]),
    deleteContact() {
      this.$store.dispatch(DELETE_CONTACT, { id: this.getCurrentContact.id });
      this.$store.dispatch(HIDE_CONTACT);
    },
  },
  methods: {
    ...mapActions([HIDE_CONTACT, SET_EDIT_MODE]),
    editContact() {
      this.$router.push({
        name: "Create",
        params: this.getCurrentContact,
      });
      this.$store.dispatch(SET_EDIT_MODE);
    },
  },
};
</script>

<style scoped>
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.container {
  height: 500px;
  width: 720px;
  border-radius: 15px;
  text-align: center;
  position: fixed;
  background-color: #49e20e;
  top: 35%;
  left: 45%;
  margin: -130px 500px 0 -258px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p {
  margin: 20px;
}
.image {
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
.letters-container {
  background-color: #4d4dff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border: 3px solid crimson;
}
.letter {
  font-size: 35px;
  color: white;
  font-weight: 600;
}
.btn {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
}
.far {
  color: crimson;
  font-size: 28px;
}
.icons-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.date {
  font-size: 19px;
  color: #cd1076;
}
.button {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.icon {
  font-size: 20px;
}
.fa-pencil-alt {
  color: #007fff;
  margin-right: 20px;
}
.fa-trash-alt {
  color: red;
}
.details {
  margin-left: 20px;
}
.name {
  font-size: 27px;
  font-weight: bold;
  color: white;
}
.email {
  color: crimson;
  font-size: 20px;
}
.address {
  color: #91219e;
  font-size: 19px;
}
.telephone {
  color: blue;
  font-size: 24px;
  font-weight: 500;
}
</style>