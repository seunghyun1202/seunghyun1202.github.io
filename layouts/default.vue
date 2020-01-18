<template>
  <div class="wrap">
    <TheHeader v-if="isHeaderShow"/>
    <nuxt class="layout-container"/>
    <div class="btn__kakao-channel">
      <a href="http://pf.kakao.com/_xhEWlxb/chat" target="_blank">
        <img src="/img/icon-kakao-ch.png" alt="카카오 채널">
      </a>
    </div>
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
  .btn__kakao-channel {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
    box-shadow: 3px 2px 4px 0px rgba(0,0,0,0.16);
    border-radius: 50%;
    @media (max-width: $device-breakpoint) {
      bottom: 20px;
      right: 20px;
    }
    img {
      width: 60px;
      @media (max-width: $device-breakpoint) {
        width: 50px;
      }
    }
  }
</style>
