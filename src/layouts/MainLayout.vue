<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar class="q-pa-lg text-black">
        <q-toolbar-title class="text-bold">
          Valorant Premier League
        </q-toolbar-title>

        <q-space />
        <q-btn-toggle
          v-model="model"
          flat
          stretch
          class="text-grey-8"
          toggle-color="black"
          :options="navigation"
        />
      </q-toolbar>
      <q-separator color="grey-19" />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const navigation = ref([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Players",
    to: "/playersinformation",
  },
  {
    label: "Teams",
    to: "/teams",
  },
  {
    label: "Points",
    to: "/points",
  },
  {
    label: "Fixtures",
    to: "/fixtures",
  },
  {
    label: "Join us",
    to: "/joinus",
  },
]);
defineOptions({
  name: "MainLayout",
});
</script>
