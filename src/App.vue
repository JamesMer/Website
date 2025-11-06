<script setup>
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"
import TopNavBar from "@/components/TopNavBar.vue"
</script>

<template>
  <TopNavBar />

  <!-- 
    Side note: <transition> requires only ONE node.
    Meaning your templates should have ONE root element (div) and all inside it 
  -->
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.1s ease-in;
}
/* .fade-leave-active {
  transition: opacity 0.2s ease-out;
} */
</style>
