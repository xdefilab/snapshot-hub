<template>
  <div>
    <div class="nav" :key="web3.account">
      <template v-if="web3.account && !wrongNetwork">
        <UiButton
          @click="modalVotingPowerOpen = true"
          :loading="loading"
          class="button-outline mr-2"
        >
          {{ _numeral(gov.votingPower) }}
          {{ gov.namespace.symbol }}
        </UiButton>
        <UiButton
          @click="modalOpen = true"
          class="button-outline"
          :loading="loading"
        >
          <Avatar :address="web3.account" size="16" class="mr-2 ml-n1" />
          <span v-if="web3.name" v-text="web3.name" />
          <span v-else v-text="_shorten(web3.account)" />
        </UiButton>
      </template>
      <UiButton v-if="web3.injectedLoaded && wrongNetwork" class="text-red">
        <Icon name="warning" class="ml-n1 mr-1 v-align-middle" />
        Wrong network
      </UiButton>
      <UiButton v-if="showLogin" @click="modalOpen = true" :loading="loading">
        Connect wallet
      </UiButton>
    </div>
    <ModalAccount
      :open="modalOpen"
      @close="modalOpen = false"
      @login="handleLogin"
    />
    <ModalAbout :open="modalAboutOpen" @close="modalAboutOpen = false" />
    <ModalVotingPower
      :open="modalVotingPowerOpen"
      @close="modalVotingPowerOpen = false"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      modalOpen: false,
      modalAboutOpen: false,
      modalVotingPowerOpen: false
    };
  },
  computed: {
    wrongNetwork() {
      console.log(this.config.chainId);
      console.log(this.web3.injectedChainId);
      return this.config.chainId !== this.web3.injectedChainId;
    },
    showLogin() {
      return (
        (!this.web3.account && !this.web3.injectedLoaded) ||
        (!this.web3.account && !this.wrongNetwork)
      );
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin(connector) {
      this.modalOpen = false;
      this.loading = true;
      await this.login(connector);
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.nav {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
