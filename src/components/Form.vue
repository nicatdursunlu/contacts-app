<template>
  <form class="container" method="POST">
    <label for="name">Name</label>
    <input
      placeholder="John Doe"
      id="name"
      name="name"
      v-model.trim="fields.name"
    />
    <label for="tel">Telephone number</label>
    <input
      type="tel"
      placeholder="352-314-3406"
      id="tel"
      name="tel"
      v-model.trim="fields.tel"
    />
    <label for="email">E-mail</label>
    <input
      type="email"
      placeholder="john.doe@gmail.com"
      id="email"
      name="email"
      v-model.trim="fields.email"
    />
    <label for="address">Address</label>
    <input
      type="text"
      placeholder="88764 Messerschmidt Court"
      id="address"
      name="address"
      v-model.trim="fields.address"
    />
    <label for="url">Image URL</label>
    <input
      type="text"
      placeholder="https://example.com/example"
      id="url"
      name="image"
      v-model.trim="fields.image"
    />
    <div class="error" v-for="(error, index) in errors" :key="index">
      {{ error }}
    </div>
    <button v-if="!getEditMode" @click.prevent="onSubmit" class="submit-btn">
      Submit
    </button>
    <div v-else class="edit-buttons-row">
      <button @click.prevent="editContact" class="edit-btn">
        Edit Contact
      </button>
      <button @click="cancel" class="cancel-btn">Cancel</button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import {
  ADD_CONTACT,
  EDIT_CONTACT,
  HIDE_CONTACT,
  SET_CREATE_MODE,
  SET_EDIT_MODE,
} from "../store/contacts/types";
import { createID } from "../utils/createID";

export default {
  data() {
    return {
      fields: {
        name: "" || this.contact.name,
        tel: "" || this.contact.tel,
        email: "" || this.contact.email,
        address: "" || this.contact.address,
        image: "" || this.contact.image,
        date: Date.now(),
      },
      errors: [],
    };
  },
  props: {
    contact: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['getEditMode']),
  },
  methods: {
    validateForm(fields) {
      this.errors = [];
      if (!fields.name) {
        this.errors.push("Name is required, please, fill the gap");
        return false;
      }
      if (!fields.tel) {
        this.errors.push(
          "Telephone number is required, please, write your telephone number"
        );
        return false;
      }
      if (!fields.email) {
        this.errors.push(
          "Email number is required, please, write your telephone number"
        );
        return false;
      }
      if (!fields.address) {
        this.errors.push("Address is required, please, write your address");
        return false;
      } else return true;
    },
    onSubmit() {
      if (this.validateForm(this.fields)) {
        const id = createID();
        this.$store.dispatch(ADD_CONTACT, { ...this.fields, id });
        this.$router.push("/");
      }
    },
    editContact() {
      if (this.validateForm(this.fields)) {
        this.$store.dispatch(EDIT_CONTACT, {
          ...this.fields,
          id: this.contact.id,
        });
        this.$router.push("/");
        this.$store.dispatch(HIDE_CONTACT);
        this.$store.dispatch(SET_CREATE_MODE);
      }
    },
    cancel() {
      this.$router.push("/");
      this.$store.dispatch(SET_CREATE_MODE);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 800px;
}
label {
  font-size: 20px;
  color: black;
  margin-bottom: 8px;
}
input {
  padding: 0 10px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 25px;
  font-size: 17px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  border: 1px solid #dddddd;
}
input:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
}
button {
  border: none;
  padding: 10px;
  height: 40px;
  background-color: crimson;
  color: white;
  font-size: 18px;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  font-weight: bold;
}
button:hover {
  background-color: #990000;
}
.submit-btn,
.edit-buttons-row {
  margin: 30px 100px;
}
.edit-btn,
.cancel-btn {
  width: 47%;
}
.edit-buttons-row {
  display: flex;
  justify-content: space-between;
}
.error {
  color: crimson;
  font-size: 17px;
}
</style>