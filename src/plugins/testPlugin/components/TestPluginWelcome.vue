<script setup lang="ts">
import { computed } from "vue";
import { useSharedStore } from "@/stores/shared";
import { useTestPlugin } from "../composables";
import { useTestPluginStore } from "../store";

const store = useSharedStore();
const username = computed(() => store.username);

const changeUser = () => {
  store.setUsername("userTestPlugin");
};

const { testApi } = useTestPlugin();

const testPluginStore = useTestPluginStore();
</script>

<template>
  <div>
    <h1>Welcome {{ username }} to TestPlugin</h1>

    <button @click="changeUser">Change user {{ $t("mrw") }}</button>
    <button @click="testApi">Test Api</button>
  </div>
</template>

<style scoped></style>
