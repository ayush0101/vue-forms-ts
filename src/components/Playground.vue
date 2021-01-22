<template>
  <div class="container p-3">
    <h3>Learning Vue forms</h3>
    <hr />
    <NormalForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NormalForm from "@/components/NormalForm.vue";

export default defineComponent({
  components: {
    NormalForm,
  },
});
</script>

<style>
</style>