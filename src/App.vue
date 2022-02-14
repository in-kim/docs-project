<template>
  <div id="app">
    <default-layout>
      <transition name="fade">
        <router-view />
      </transition>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/Layout/DefaultLayout.vue';
export default {
  components: { DefaultLayout },
}
</script>
