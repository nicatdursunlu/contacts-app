<template>
  <div id="nav">
    <router-link to="/" class="logo">Contacts App</router-link>
    <div class="links-container">
      <router-link to="/" class="link">Contacts</router-link>
      <router-link to="create" class="link">Create</router-link>
      <button @click="SHOW_MODAL">
        <i class="fas fa-trash"></i>
      </button>
      <Modal
        @delete="clearContacts"
        @close="HIDE_MODAL"
        v-if="$store.getters.getModalVisible"
        :title="title"
        :text="text"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "./Modal";
import {
  CLEAR_CONTACTS,
  HIDE_MODAL,
  SHOW_MODAL,
} from "../store/contacts/types";

export default {
  components: { Modal },
  data() {
    return {
      title: `Do you want to delete all these contacts?`,
      text:
        "Once you delete these contacts, it won't be possible to undo this action. Are you sure you want do delete them",
    };
  },
  methods: {
    clearContacts() {
      this.$store.dispatch(CLEAR_CONTACTS);
      this.$store.dispatch(HIDE_MODAL);
    },
    ...mapActions([SHOW_MODAL, HIDE_MODAL]),
  },
};
</script>

<style scoped>
#nav {
  background: rgb(30, 144, 255);
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: white;
  font-size: 25px;
  text-decoration: none;
  font-weight: bold;
}
.logo:hover {
  color: crimson;
}
.link {
  text-decoration: none;
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-right: 20px;
}
.link:hover {
  color: crimson;
}
.link.router-link-exact-active {
  color: crimson;
}
.links-container {
  display: flex;
  align-items: center;
}
button {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.fas {
  font-size: 20px;
  color: white;
}
.fas:hover {
  color: crimson;
}
</style>