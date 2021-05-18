<template>
  <el-header id="topnav" class="width-full" height="78px">
    <div
      class="d-flex flex-items-center px-3"
      style="height: 78px; justify-content: space-between;"
    >
      <div class="d-flex flex-items-center logo">
        <router-link
          :to="{ name: 'home' }"
          class="d-inline-block text-blue d-flex"
          style="margin-right: 48px;"
        >
          <img src="~/@/assets/xdefi.svg" class="mr-2 v-align-middle" />
        </router-link>
      </div>
      <div class="navsList">
        <div class="navContent">
          <span class="active">
            {{ $t('nav.dao') }}
            <b></b>
          </span>
          <Navs />
        </div>
        <i class="el-icon-s-fold navIcon" @click="drawer = true" />
        <el-drawer
          :visible.sync="drawer"
          :show-close="false"
          :wrapperClosable="true"
          size="30%"
          class="drawer"
        >
          <Navs />
        </el-drawer>
      </div>
      <NavWallet />
      <div class="settings">
        <el-select v-model="$i18n.locale" style="width: 100px;">
          <el-option
            v-for="item in langOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <ModalAccount
      :open="modalOpen"
      @close="modalOpen = false"
      @login="handleLogin"
    />
  </el-header>
</template>

<script>
import { mapActions } from 'vuex';
import Navs from './Navs';

export default {
  components: {
    Navs
  },
  data() {
    return {
      drawer: false,
      loading: false,
      modalOpen: false,
      modalAboutOpen: false,
      menus: false,
      langOptions: [
        {
          value: 'zh',
          label: '简体中文'
        },
        {
          value: 'en',
          label: 'English'
        }
      ]
    };
  },
  computed: {
    wrongNetwork() {
      return this.config.chainId !== this.web3.injectedChainId;
    },
    showLogin() {
      return (
        (!this.$auth.isAuthenticated && !this.web3.injectedLoaded) ||
        (!this.$auth.isAuthenticated && !this.wrongNetwork)
      );
    }
  },
  methods: {
    ...mapActions(['toggleSidebar']),
    ...mapActions(['login']),
    async handleLogin(connector) {
      this.modalOpen = false;
      this.loading = true;
      await this.login(connector);
      this.loading = false;
    },
    toolgeMenu() {
      this.menus = !this.menus;
    },
    changeLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../vars';

#topnav {
  background-color: $panel-background;
  z-index: 3000;
}
.more {
  display: none;
}
.lang-menu {
  background-color: $panel-background;
  .van-dropdown-menu__bar {
    background-color: transparent !important;
    color: #7e7f9c;
  }
}
.navsList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex: auto;
  @media (max-width: 768px) {
    flex: 1;
  }
}

.navIcon {
  font-size: 1.25rem;
  color: #fff;
  display: none;
}

.settings {
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    background: #1c1c38;
    z-index: 999;
    .accounts {
      flex: 1;
      text-align: center;
    }
  }
}

.navContent {
  display: flex;
  justify-content: flex-start;
  .active {
    font-size: 16px;
    color: #7e7f9c;
    white-space: nowrap;
    margin-right: 3rem;
    display: none;
    & > b {
      width: 20px;
      height: 4px;
      background: linear-gradient(
        137deg,
        #2bf7dd 0%,
        #3a8ff7 51%,
        #da37fa 100%
      );
      border-radius: 3px;
      margin-left: 5px;
      margin-top: 5px;
    }
    &:hover b,
    b {
      display: block;
    }
  }
  @media (max-width: 768px) {
    .active {
      display: inline-block;
    }
    .navs {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .logo {
    a {
      margin-right: 20px;
      width: 40px;
      overflow: hidden;
    }
  }
  .navIcon {
    display: block;
  }
  .nav {
    justify-content: space-between;
    a {
      margin-right: 0;
    }
  }
  .more {
    display: block;
    float: right;
  }
  .menus {
    display: none !important;
  }
}
</style>
