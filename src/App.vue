<script lang="ts" setup>
import HotTable from "@handsontable/vue";

import "handsontable/dist/handsontable.full.css";

const settings = {
  data: [
    ["", "Ford", "Volvo", "Toyota", "Honda"],
    ["2016", 10, 11, 12, 13],
    ["2017", 20, 11, 14, 13],
    ["2018", 30, 15, 12, 13]
  ],
  colHeaders: true,
  rowHeaders: true
};
</script>

<template>
  <div id="hot-preview">
    <HotTable
      :settings="settings"
      license-key="non-commercial-and-evaluation"
    />
  </div>
</template>

<style>
#hot-preview {
  width: 600px;
  height: 400px;
  overflow: hidden;
}
</style>
