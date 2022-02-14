<template>
  <div class="wrapper">
    <!-- header, side bar start -->
    <layout-header :handleContentPadding="handleContentPadding" :isSidebarActive="isSidebarActive"/>
    <!-- header, side bar end -->

    <!-- content start -->
    <div class="content" :class="isSidebarActive ? 'side-open' : 'side-close'">
      <slot></slot>
    </div>
    <!-- content end -->
  </div>
</template>

<script>
import LayoutHeader from "@/components/Layout/LayoutHeader";
export default {
  name: "default-layout",
  data() {
    return {
      isSidebarActive: true,
    };
  },
  components: {
    LayoutHeader,
  },
  methods:{
    handleContentPadding(){
      console.log('@handleContentPadding');
      this.isSidebarActive = !this.isSidebarActive
    }
  }
};
</script>

<style>
</style>
