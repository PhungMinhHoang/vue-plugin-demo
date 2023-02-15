<script setup lang="ts">
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
const { testApi } = app?.appContext.config.globalProperties.$useTestPlugin();
</script>

<template>
  <h1>{{ $t("mrw") }}</h1>
  <button @click="testApi">Test Api</button>
</template>

<style scoped></style>
