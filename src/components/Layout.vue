<template>
  <div class="container">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 78vh;
}
</style>