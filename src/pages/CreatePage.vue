<template>
  <div class="container">
    <h1 v-if="getEditMode" class="header">Edit Contact</h1>
    <h1 v-else class="header">Create New Contact</h1>
    <Form :contact="contact" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Form from "../components/Form";

export default {
  components: {
    Form,
  },
  computed: {
    contact() {
      return this.$route.params;
    },
    ...mapGetters(["getEditMode"]),
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}

.header {
  font-size: 32px;
  color: crimson;
  text-align: center;
  margin: -10px;
}
</style>