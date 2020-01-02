<template>
  <div class="wrap">
    <TheHeader v-if="isHeaderShow"/>
    <nuxt class="layout-container"/>
    <TheFooter v-if="isFooterShow"/>
  </div>
</template>

<script>
  import TheHeader from '../components/layout/TheHeader/header';
  import TheFooter from '../components/layout/TheFooter/footer';

  export default {
    components: {
      TheHeader,
      TheFooter
    },
    data () {
      return {
        isFooterShow: true,
        isHeaderShow: true
      }
    },
    created () {
      if (process.client) {
        document.body.style.overflow = 'overlay';
      }
      if (this.$route.name === 'home') {
        this.isFooterShow = false
      } else {
        this.isFooterShow = true
      }

      if (this.$route.name === 'ready') {
        this.isHeaderShow = false
        this.isFooterShow = false
      } else {
        this.isHeaderShow = true
        this.isFooterShow = true
      }
    },
    watch: {
      // Route 감지하여 footer show/hide
      $route () {
        if (this.$route.name === 'home') {
          this.isFooterShow = false
        } else {
          this.isFooterShow = true
        }

        if (this.$route.name === 'ready') {
          this.isHeaderShow = false
          this.isFooterShow = false
        } else {
          this.isHeaderShow = true
          this.isFooterShow = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout-container {
    min-height: 100vh;
  }
</style>
