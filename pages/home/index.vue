<template>
  <div>
    <section class="main-visual">
      <div v-swiper:mySwiperMainVisual="swiperOptionMainVisual">
        <div class="swiper-wrapper">
          <template v-for="(list, index) in slideList">
            <div class="swiper-slide" :key="index">
            <div class="main-visual__wording">
              <h2>
                <nuxt-link
                  :to="list.link"
                  class="main-visual__text"
                >{{list.title}}</nuxt-link>
              </h2>
              <p class="main-visual__info">{{list.desc}}</p>
            </div>
          </div>
          </template>
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
        slideList: [
          {
            title: 'workspace',
            link: '/workspace',
            desc: '피벗의 작업공간입니다.'
          },
          {
            title: 'service',
            link: '/service',
            desc: '피벗이 제공하는 서비스입니다.'
          },
          {
            title: 'about',
            link: '/about',
            desc: '피벗에 대해 소개합니다.'
          }
        ],
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

