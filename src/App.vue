<template>
  <SideMenu />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideMenu from "@/components/SideMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    SideMenu,
  },
});
</script>

<style>
</style>
