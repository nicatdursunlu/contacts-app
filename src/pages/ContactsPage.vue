<template>
  <div class="container">
    <Contact
      v-for="contact in getAllContacts"
      :contact="contact"
      :key="contact.id"
    />
    <ContactDetails />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Contact from "../components/Contact";
import Modal from "../components/Modal";
import ContactDetails from "../components/ContactDetails";

export default {
  components: {
    ContactDetails,
    Contact,
    Modal,
  },
  computed: {
    ...mapGetters(["getAllContacts"]),
  },
};
</script>

<style scoped>
.container {
  padding: 40px 80px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 40px 0;
  row-gap: 20px;
}
</style>
