<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <header>
        <h1 class="title">{{ title }}</h1>
        <button class="close-btn btn" @click="closeModal">
          <i class="far fa-window-close"></i>
        </button>
      </header>
      <div class="content">
        <p class="text">{{ text }}</p>
        <div class="buttons-container">
          <button class="yes-btn btn" @click="deleteContact">Yes</button>
          <button class="cancel-btn btn" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
    deleteContact() {
      this.$emit("delete");
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
.modal {
  height: 300px;
  width: 520px;
  border-radius: 5px;
  text-align: center;
  position: fixed;
  background-color: #a155e7;
  top: 50%;
  left: 50%;
  margin: -131px 0 0 -258px;
  z-index: 999999;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8a2be2;
  padding: 7px 25px;
  color: white;
  border-radius: 5px;
}
.title {
  font-size: 22px;
  font-weight: 500;
}
.btn {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}
.far {
  color: crimson;
  font-size: 25px;
}
.content {
  margin-top: 50px;
  padding: 0 30px;
}
.text {
  color: white;
  font-size: 18px;
  margin-bottom: 50px;
  line-height: 30px;
}
.yes-btn {
  background: crimson;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-right: 25px;
}
.cancel-btn {
  background: green;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
}
</style>