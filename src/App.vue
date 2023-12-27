<template>
  <div class="app">
    <img @click="$router.push('/')" class="logo" src="../public/icons/VK_Logo.svg" alt="Логотип Вконтакте" />
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
.app {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
