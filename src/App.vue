<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const HelloWorld = defineAsyncComponent(() =>
  import("./components/HelloWorld.vue")
);
</script>

<template>
  <div id="hot-preview">
    <HelloWorld />
  </div>
</template>

<style>
#hot-preview {
  width: 600px;
  height: 400px;
  overflow: hidden;
}
</style>
