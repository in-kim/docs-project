<template>
  <div class="navbar__wrapper">
    <b-navbar toggleable="lg" type="dark">
      <section class="left">
        <!-- side bar start -->
        <side-bar
          :isSidebarActive="isSidebarActive"
          :handleContentPadding="handleContentPadding"
        ></side-bar>
        <!-- side bar end -->

        <!-- logo start -->
        <b-navbar-brand href="#">
          DOCS
          <!-- <img src="https://uploads-ssl.webflow.com/5f3b26c2b3bde9e2894607e8/6049a6bd314be972946af637_OSC%20Korea%20CI%20blue.svg" alt=""> -->
        </b-navbar-brand>
        <!-- logo end -->
      </section>

      <!-- center start -->
      <section class="center"></section>
      <!-- center end -->

      <!-- right start -->
      <section class="right">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- search start -->
            <search />
            <!-- search end -->

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </section>
      <!-- right end -->
    </b-navbar>
  </div>
</template>

<script>
import SideBar from "@/components/Layout/SideBar";
import Search from "@/components/Layout/Search";
export default {
  name: "layout-header",
  props: {
    isSidebarActive: {
      type: Boolean,
      description: "siebar 오픈 여부",
    },
    handleContentPadding: {
      type: Function,
      description: "컨텐츠 좌측 패딩 컨트롤",
    },
  },
  components: {
    SideBar,
    Search,
  },
};
</script>

<style></style>
