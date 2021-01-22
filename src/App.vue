<template>
  <Navbar />
  <Playground />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar";
import Playground from "@/components/Playground";
export default defineComponent({
  components: {
    Navbar,
    Playground,
  },
});
</script>