<template>
  <img
    src="~/@/assets/logo.png"
    class="d-inline-block bg-gray-9 v-align-middle line-height-0 circle"
    :style="{
      width: `${size || 22}px`,
      height: `${size || 22}px`
    }"
  />
</template>

<script>
export default {
  props: ['address', 'size']
};
</script>
