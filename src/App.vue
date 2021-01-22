<template>
  <Navbar />
  <Playground />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Playground from "@/components/Playground.vue";
export default defineComponent({
  components: {
    Navbar,
    Playground,
  },
});
</script>