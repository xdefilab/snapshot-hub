<template>
  <div class="navs">
    <a
      href="https://swap.kovan.xdefi.com/"
      class="d-inline d-flex nav-item"
      target="_blank"
    >
      {{ $t('nav.swap') }}
    </a>
    <span class="d-inline d-flex nav-item">
      {{ $t('nav.pool') }}
      <b></b>
    </span>
    <a
      href="https://farm.kovan.xdefi.com/"
      class="d-inline d-flex nav-item"
      target="_blank"
    >
      {{ $t('nav.farming') }}
    </a>
    <a
      href="https://halflife.kovan.xdefi.com/"
      class="d-inline d-flex nav-item"
      target="_blank"
    >
      HalfLife
    </a>

    <a
      href="https://stat.kovan.xdefi.com/"
      class="d-inline d-flex nav-item"
      target="_blank"
    >
      {{ $t('nav.statistics') }}
      <b></b>
    </a>
    <a
      href="https://vote.kovan.xdefi.com/"
      class="d-inline d-flex nav-item active"
      target="_blank"
    >
      {{ $t('nav.dao') }}
      <b></b>
    </a>
    <a
      href="https://community.kovan.xdefi.com/"
      class="d-inline d-flex nav-item"
      target="_blank"
    >
      {{ $t('nav.community') }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Navs'
};
</script>

<style lang="scss" scoped>
.navs {
  display: flex;
  justify-content: flex-start;
  .nav-item {
    margin-right: 3rem;
    font-size: 16px;
    color: #7e7f9c;

    &.active {
      & > b {
        display: none;
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
      &.active b {
        display: block;
      }
    }
  }
}

@media (max-width: 768px) {
  .drawer {
    .navs {
      display: flex !important;
      flex-direction: column;
      padding: 0 1rem;

      .nav-item {
        width: 100%;
        padding: 10px 0;
        text-align: left;

        &.active {
          margin-left: 0 !important;
          display: block !important;
        }
      }
    }
  }
}
</style>
