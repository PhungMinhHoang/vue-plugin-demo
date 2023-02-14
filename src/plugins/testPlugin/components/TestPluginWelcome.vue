<script setup lang="ts">
import { useSharedStore } from "@/stores/shared";
import { computed } from "vue";

const store = useSharedStore();
const username = computed(() => store.username);

const changeUser = () => {
  store.setUsername("userTestPlugin");
};
</script>

<template>
  <div>
    <h1>Welcome {{ username }} to TestPlugin</h1>

    <button @click="changeUser">Change user {{ $t("mrw") }}</button>
  </div>
</template>

<style scoped></style>
