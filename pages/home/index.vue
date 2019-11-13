<template>
  <div>
    <section class="main-visual">
      <div v-swiper:mySwiperMainVisual="swiperOptionMainVisual">
        <div class="swiper-wrapper">
          <!-- Numbering 01 -->
          <div class="swiper-slide swiper-slide01">
            <div class="main-visual__bg"></div>
            <div class="main-visual__wording">
              <h2>
                <nuxt-link
                  :to="{ name: 'workspace-wid', params: {wid:2}}"
                  class="main-visual__text fira-title"
                >Project Co&amp;de</nuxt-link>
              </h2>
              <p class="main-visual__info">애니메이션을 활용한 웹사이트입니다.</p>
            </div>
          </div>
          <!-- Numbering 02 -->
          <div class="swiper-slide swiper-slide02">
            <div class="main-visual__bg"></div>
            <div class="main-visual__wording position-center">
              <h2>
                <nuxt-link
                  to="/service"
                  class="main-visual__text fira-title"
                >Service</nuxt-link>
              </h2>
              <p class="main-visual__info">웹사이트가 제작되는 과정을 보실 수 있습니다.</p>
            </div>
          </div>
          <!-- Numbering 03 -->
          <div class="swiper-slide swiper-slide03">
            <div class="main-visual__bg"></div>
            <div class="main-visual__wording position-center">
              <h2>
                <nuxt-link
                  to="/about"
                  class="main-visual__text fira-title"
                >About Me</nuxt-link>
              </h2>
              <p class="main-visual__info">저에 대해 소개합니다.</p>
            </div>
          </div>
        </div>
        <!-- 페이지네이션 -->
        <div class="swiper-pagination"></div>
        <!-- 화살표 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOptionMainVisual: {
          loop: true,
          mousewheel: true,
          effect: 'fade',
          pagination: {
            el: '.main-visual .swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.main-visual .swiper-button-next',
            prevEl: '.main-visual .swiper-button-prev'
          }
        },
        windowHeight: 0
      }
    },
    mounted () {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed () {
      // 페이지를 떠날 때 실행
      window.removeEventListener('resize', this.handleResize)
      document.querySelector('body').style.overflow = 'overlay';
    },
    methods: {
      handleResize() {
        this.windowHeight = window.innerHeight;
        document.querySelector('.swiper-wrapper').style.height = this.windowHeight + 'px';
        document.querySelector('body').style.overflow = 'hidden';
      }
    }
  }
</script>

<style src="./main.scss" lang="scss" scoped></style>

