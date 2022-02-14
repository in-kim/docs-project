<template>
  <div class="sidebar__wrapper">
    <button @click="handleContentPadding">
      <b-icon icon="justify" font-scale="1.5" color="#fff" />
    </button>
    <b-sidebar
      :visible="isSidebarActive"
      class="sidebar__content"
      no-header
      :no-close-on-route-change=true
    >
      <div class="sidemenu__wrapper">
        <ul>
          <li v-for="(el, i) in menuList" :key="i" :class="el.path === page ? 'active' : ''">
            <router-link :to="el.path" v-if="!el.children">
              <span @click="updatePage">{{ el.name }}</span>
            </router-link>
            <span @click="handleSideMenu" v-if="el.children">
              {{ el.name }}
              <b-icon :icon="isActive ? 'chevron-up' : 'chevron-down'" />
            </span>
            <transition name="slide-fade" v-if="el.children">
              <ul v-if="isActive">
                <li v-for="(childEl, j) in el.children" :key="j" :class="childEl.path === page ? 'active' : ''">
                  <router-link :to="childEl.path">
                    <span @click="updatePage">
                      {{ childEl.name }}
                    </span>
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { routeList } from "@/router/routerList";
export default {
  name: "side-bar",
  props:{
    isSidebarActive:{
      type:Boolean, 
      description:'siebar 오픈 여부'
    },
    handleContentPadding:{
      type:Function,
      description:'컨텐츠 좌측 패딩 컨트롤'
    }
  },
  data() {
    return {
      isActive:true,
      menuList: routeList,
      page: "",
    };
  },
  methods: {
    updatePage(path, title) {
      this.page = path;
      document.title = title;
    },
    handleSideMenu() {
      this.isActive = !this.isActive;
    },
  },
  watch: {
    '$route' (to) {
      console.log('###########',to);
      this.updatePage(to.path, to.meta.title);
    }
  }
};
</script>
