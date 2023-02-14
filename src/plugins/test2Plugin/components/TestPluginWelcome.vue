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
    <h1>Welcome {{ username }} to Test2Plugin</h1>

    <button @click="changeUser">Change user</button>
  </div>
</template>

<style scoped></style>
