<template>
  <header class="layout-header" :class="{fixed: isFixed, 'main-header': isIndexHeader}">
    <div class="layout-header__inner">
      <h1 class="layout-header__logo">
        <nuxt-link to="/home">
          <svg version="1.1" class="logo__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px"
               y="0px" viewBox="0 0 520 520">
            <g>
              <path d="M510.3,245.1c0-0.1,0-0.1,0-0.2c-0.6-10.1-1.8-20-3.5-29.8c-8.9-49.7-32.7-95.5-69.2-132c-30.6-30.6-67.7-52.2-108.2-63.7
                v29.7c74.9,24.4,132.4,87.8,148.5,166c2,9.7,3.4,19.7,4,29.8H329.3h-29v-29.8V41.7V13c-0.3-0.1-0.7-0.1-1-0.2
                c-9.4-1.5-19-2.4-28.6-2.7c-0.1,0-0.3,0-0.4,0v28.3v176.7v29.8v0.2v29v0.8v29.2v177.3v28.3c0.1,0,0.3,0,0.4,0
                c9.6-0.4,19.2-1.3,28.6-2.7c0.3-0.1,0.7-0.1,1-0.2v-28.7v-174v-29.2h29h152.6c-0.7,9.9-2,19.7-3.9,29.2
                c-16,78.5-73.6,142.1-148.7,166.6v29.7c40.5-11.5,77.6-33.2,108.2-63.7c36.6-36.6,60.5-82.6,69.3-132.6c1.7-9.6,2.8-19.3,3.4-29.2
                c0-0.3,0-0.5,0-0.8c0.3-4.7,0.4-9.4,0.4-14.2C510.7,254.9,510.5,250,510.3,245.1z"/>
              <path d="M221.3,13c-51.8,8.2-99.6,32.3-137.4,70.1c-36.5,36.5-60.3,82.3-69.2,132c-1.8,9.8-2.9,19.7-3.5,29.8c0,0.1,0,0.1,0,0.2
                c-0.3,4.9-0.4,9.8-0.4,14.8c0,4.8,0.1,9.5,0.4,14.2c0,0.3,0,0.5,0,0.8h28.4h181.8v29.2v174c-89.1-16.1-159.9-85.5-177.9-174H14.6
                c8.9,50,32.7,95.9,69.3,132.6c37.8,37.8,85.6,62,137.4,70.1c9.7,1.5,19.5,2.5,29.4,2.9c0.2,0,0.4,0,0.6,0v-28.3V304.1v-29.2v-0.8
                v-29v-0.2h-0.6h-29.4H39.5c0.7-10.1,2-20.1,4-29.8c18.2-88.2,88.8-157.4,177.7-173.4v173.4h29.4h0.6V38.4V10.1c-0.2,0-0.4,0-0.6,0
                C240.8,10.5,231,11.5,221.3,13z"/>
            </g>
          </svg>
          <span class="a11y-hidden">승현 웹사이트</span>
        </nuxt-link>
      </h1>
      <div class="float-left">
        <button
          class="layout-header__button"
          :class="{zindex: isContactOpen, 'color-black': isMenuOpen}"
          @click="menuToggle('menu')"
          aria-label="menu-button"
          :aria-pressed="isMenuOpen"
        >{{isMenuOpen ? 'Close' : 'Menu'}}
        </button>

        <!-- 내비게이션 -->
        <aside class="layout-nav layout-nav__left" :class="{open: isMenuOpen, close: !isMenuOpen}">
          <h2 class="a11y-hidden">내비게이션 목록</h2>
          <nav class="navigation">
            <ul class="position-center">
              <template v-for="(menu, index) in nav">
                <li :key="index">
                  <nuxt-link :to="menu.to">
                    {{ menu.title }}
                    <span class="line"></span>
                  </nuxt-link>
                </li>
              </template>
            </ul>
          </nav>
        </aside>
        <div class="layout-header__bg layout-header__bg__left"
             :class="{open: isLeftBg, close: !isLeftBg}"
             @click="menuToggle('menu')"
        ></div>
      </div>

      <div class="float-right">
        <button
          class="layout-header__button text-right"
          :class="{zindex: isMenuOpen, 'color-black': isContactOpen}"
          @click="menuToggle('contact')"
          aria-label="contact-button"
          :aria-pressed="isContactOpen"
        >{{isContactOpen ? 'Close' : 'Contact'}}
        </button>
        <!-- 문의하기 -->
        <aside class="layout-nav layout-nav__right" :class="{open: isContactOpen, close: !isContactOpen}">
          <div class="contact">
            <div class="contact__relative">
              <h2 class="contact__title">문의하기</h2>
              <no-ssr>
                <ValidationObserver v-slot="{ handleSubmit }">
                  <!-- 문의하기 폼 -->
                  <form @submit.prevent="handleSubmit(onSubmit)"
                        ref="inquiryForm"
                  >
                    <div class="contact__form-group">
                      <!-- 문의 유형 -->
                      <ValidationProvider rules="required|oneOf:홈페이지,쇼핑몰,기타" v-slot="{ errors }">
                        <div class="form-group" :class="{focus: isFilterFocus, 'is-error': errors[0]}">
                          <label for="contactFilter">구분</label>
                          <select
                            id="contactFilter"
                            v-model="contactFilter"
                            @focus="isFilterFocus = !isFilterFocus"
                            @blur="isFilterFocus = !isFilterFocus"
                          >
                            <option title="문의 유형" value="" disabled>문의 유형을 선택하세요.</option>
                            <option title="홈페이지" value="홈페이지">홈페이지</option>
                            <option title="쇼핑몰" value="쇼핑몰">쇼핑몰</option>
                            <option title="기타" value="기타">기타</option>
                          </select>
                        </div>
                        <p class="error-msg">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>

                    <!-- 성명 -->
                    <div class="contact__form-group">
                      <ValidationProvider name="contactName" rules="required" v-slot="{ errors }">
                        <div class="form-group" :class="{focus: isNameFocus, 'is-error': errors[0]}">
                          <label for="contactName">성명</label>
                          <input
                            type="text"
                            id="contactName"
                            title="성명"
                            placeholder="성명"
                            v-model="contactName"
                            @focus="isNameFocus = !isNameFocus"
                            @blur="isNameFocus = !isNameFocus"
                          >
                        </div>
                        <p class="error-msg">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>

                    <!-- 연락처 -->
                    <div class="contact__form-group">
                      <ValidationProvider name="contactPhone" rules="required|numeric" v-slot="{ errors }">
                        <div class="form-group" :class="{focus: isPhoneFocus, 'is-error': errors[0]}">
                          <label for="contactPhone">연락처</label>
                          <input
                            type="text"
                            id="contactPhone"
                            title="연락처"
                            placeholder="연락처"
                            v-model="contactPhone"
                            @focus="isPhoneFocus = !isPhoneFocus"
                            @blur="isPhoneFocus = !isPhoneFocus"
                          >
                        </div>
                        <p class="error-msg">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>

                    <!-- 이메일 -->
                    <div class="contact__form-group">
                      <ValidationProvider name="contactEmail" rules="required|email" v-slot="{ errors }">
                        <div class="form-group" :class="{focus: isEmailFocus, 'is-error': errors[0]}">
                          <label for="contactEmail">이메일</label>
                          <input
                            type="email"
                            id="contactEmail"
                            title="이메일"
                            placeholder="이메일"
                            v-model="contactEmail"
                            @focus="isEmailFocus = !isEmailFocus"
                            @blur="isEmailFocus = !isEmailFocus"
                          >
                        </div>
                        <p class="error-msg">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>

                    <!-- 내용 -->
                    <div class="contact__form-group">
                      <div class="form-group" :class="{focus: isContentsFocus}">
                        <label for="contactContents">내용</label>
                        <textarea
                          title="내용"
                          id="contactContents"
                          placeholder="프로젝트 관련 내용 및 문의사항을 남겨주시면 최대한 빠른 시일 내에 연락드리겠습니다."
                          v-model="contactContents"
                          @focus="isContentsFocus = !isContentsFocus"
                          @blur="isContentsFocus = !isContentsFocus"
                        ></textarea>
                      </div>
                    </div>

                    <!-- 동의 -->
                    <div class="contact__form-group">
                      <ValidationProvider name="contactAgree" rules="agree:1" v-slot="{ errors }">
                        <div class="form-agree">
                          <input
                            type="checkbox"
                            class="magic-checkbox"
                            :class="{'is-error': errors[0]}"
                            id="contactAgree"
                            title="개인정보취급방침 동의 여부"
                            v-model="contactAgree"
                            value="1"
                          >
                          <label for="contactAgree">
                            개인정보취급방침에 동의합니다.
                          </label>
                          <span @click="showModal = true">내용보기</span>
                        </div>
                        <p class="error-msg error-agree">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>
                    <div class="form-send">
                      <button type="submit">보내기</button>
                    </div>
                  </form>
                </ValidationObserver>
              </no-ssr>
            </div>
          </div>
        </aside>
        <div class="layout-header__bg layout-header__bg__right"
             :class="{open: isRightBg, close: !isRightBg}"
             @click="menuToggle('contact')"
        ></div>
      </div>
    </div>

    <modal class="contact-modal" v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        개인정보취급방침 안내
      </h3>
      <div class="contact-modal__body" slot="body">
        <p>개인정보 수집이용에 대한 동의</p>
        고객님의 소중한 개인정보는 다음과 같은 정책에 따라 수집 및 이용됩니다. 해당 목적에 연관되는 개인정보만을 수집하며, 수집된 정보를 투명하고 안전하게 보호 관리할 것을
        약속합니다. 이에 개인정보 수집 및 이용에 대한 동의를 구합니다.
        <br><br>
        <p>개인정보의 수집·이용 목적</p>
        고객님의 프로젝트에 대한 견적, 기간, 개발방법 등의 문의에 대한 정보가 보다 정확한 답변을 위해 수집됩니다.
        <br><br>
        <p>수집항목</p>
        필수항목: 성명, 나이, 연락처, 이메일, 의뢰내용
        <br>
        선택항목: 홈페이지, 쇼핑몰, 기타
        <br><br>
        <p>보유이용기간</p>
        원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
        단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
        <br><br>
        보존 이유 : 회원님의 동의를 통한 인재정보 유지<br>
        보존 기간 : 회원정보 삭제 요청 시까지
      </div>
    </modal>

    <!-- 문의 접수 모달 -->
    <modal class="alert-modal" v-if="showAlert" @close="closeAlert()">
      <h3 slot="header">
        알림
      </h3>
      <div class="contact-modal__body" slot="body">
        문의 접수가 완료되었습니다.
      </div>
    </modal>

    <!-- 준비 중 모달 -->
    <modal class="alert-modal" v-if="showReady" @close="showReady = false">
      <h3 slot="header">
        알림
      </h3>
      <div class="contact-modal__body" slot="body">
        준비 중입니다.
      </div>
    </modal>
  </header>
</template>

<script>
  import Modal from '~/components/modal';
  import axios from 'axios';

  export default {
    components: {
      Modal
    },
    data() {
      return {
        nav: this.$store.state.menus.menuList,
        isMenuOpen: false,
        isContactOpen: false,
        isFixed: false,
        isLeftBg: false,
        isRightBg: false,
        isIndexHeader: true,
        windowHeight: 0,

        // 모달 데이터
        showModal: false,
        showAlert: false,
        showReady: false,

        // 포커스 감지
        isFilterFocus: false,
        isNameFocus: false,
        isPhoneFocus: false,
        isEmailFocus: false,
        isContentsFocus: false,

        // 문의하기 데이터
        contactFilter: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        contactContents: '',
        contactAgree: false,
      }
    },
    created() {
      // window is not defined - Nuxt가 SSR을 기본으로 가져가기 때문에
      // 해당 로직을 클라이언트 사이드에서만 돌아가게 함.
      if (process.client) {
        window.addEventListener('scroll', this.headerFixed);
      }

      if (this.$route.name === 'home' || this.$route.name === 'about') {
        this.isIndexHeader = true;
      } else {
        this.isIndexHeader = false;
      }

      if (process.client) {
        this.headerFixed();
      }
    },
    destroyed() {
      if (process.client) {
        window.addEventListener('scroll', this.handleAsideResize);
      }
      window.removeEventListener('resize', this.handleAsideResize)
    },
    mounted() {
      window.addEventListener('resize', this.handleAsideResize)
      this.handleAsideResize();
    },
    watch: {
      // Route 감지하여 footer show/hide
      $route() {
        // Route 변화 감지하여 메뉴 show / hide
        this.isMenuOpen = false;
        this.isLeftBg = false;
        this.isRightBg = false;
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'overlay';
        if (this.$route.name === 'home' || this.$route.name === 'about') {
          this.isIndexHeader = true;
        } else {
          this.isIndexHeader = false;
        }
      }
    },
    methods: {
      // 모바일 높이 이슈 때문에 윈도우 높이 구하는 식 만들어서 사이드 메뉴에 적용.
      handleAsideResize() {
        this.windowHeight = window.innerHeight;
        document.querySelector('.navigation').style.height = this.windowHeight + 'px';
        document.querySelector('.contact').style.height = this.windowHeight + 'px';
      },
      // 스크롤 시 헤더 고정
      headerFixed() {
        if (window.scrollY > 120) {
          if(this.$route.name === 'about') {
            this.isIndexHeader = false;
          }
          this.isFixed = true;
        } else {
          if(this.$route.name === 'about') {
            this.isIndexHeader = true;
          }
          this.isFixed = false;
        }
      },
      // 양쪽 사이드 메뉴 On/Off
      menuToggle(type) {
        if (type === 'menu') {
          this.isMenuOpen = !this.isMenuOpen;
          this.isLeftBg = !this.isLeftBg;
          document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'overlay';
        } else if (type === 'contact') {
          // 작성 중 Close 눌렀을 시 데이터 초기화
          if (this.isContactOpen) {
            this.resetContactData();
          }
          // Contact On/Off
          this.isContactOpen = !this.isContactOpen;
          this.isRightBg = !this.isRightBg;
          document.body.style.overflow = this.isContactOpen ? 'hidden' : 'overlay';
        }
      },
      // 문의하기 데이터 보내기
      onSubmit () {
        axios.post('https://formspree.io/mpzwovoy', {
          문의유형: this.contactFilter,
          성명: this.contactName,
          연락처: this.contactPhone,
          이메일: this.contactEmail,
          내용: this.contactContents
        }).then(resp => {
          this.handleAlert();
        }).catch(error => {
          console.log(error);
        })
      },
      handleAlert() {
        this.showAlert = true;
      },
      closeAlert() {
        this.resetContactData();
        this.isContactOpen = false;
        this.isRightBg = false;
        this.showAlert = false;
      },
      resetContactData () {
        this.contactFilter = '';
        this.contactName = '';
        this.contactPhone = '';
        this.contactEmail = '';
        this.contactContents = '';
        this.contactAgree = false;
        this.$refs.inquiryForm.reset();
      }
    }
  }
</script>

<style src="./header.scss" lang="scss" scoped></style>
