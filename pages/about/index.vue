<template>
  <div class="about">
    <div class="container">
      <section class="about__body">
        <div class="about__intro">
          <!-- 어바웃 -->
          <header class="about__header">
            <h1>
              pivot play<br>
              for your goals.
            </h1>
            <p>
              피벗pivot은 농구에서 <span class="about__marker">한 발을 중심 축으로 하여 몸의 방향을 회전하는 것</span>을 뜻합니다.<br>
              농구 경기 중 가장 치열한 골 밑에서 피벗 플레이를 얼마나 잘하느냐에 따라 득점 성공률이 달라집니다.
              <br><br>
              저희 피벗은 <span class="about__marker02">사용자를 중심으로 클라이언트의 방향성에 맞춰 프로젝트를 유연하게 진행</span>합니다.<br>
              클라이언트가 사업 목표를 달성할 수 있도록 최고의 '피벗 플레이'를 펼치겠습니다.
            </p>
          </header>
          <div class="about__values">
            <ul class="values__ul">
              <template v-for="(list, index) in valueList">
                <li :key="index">
                  <h3>{{list}}</h3>
                </li>
              </template>
            </ul>
          </div>
<!--          <div class="about__skills">-->
<!--            <h2>pivot skills</h2>-->
<!--            <ul class="skills__ul">-->
<!--              <template v-for="(list, index) in skillList">-->
<!--                <li :key="index">-->
<!--                  <div class="">-->
<!--                    <header>-->
<!--                      <i :class="list.class"></i>-->
<!--                    </header>-->
<!--                    <div class="">-->
<!--                      <h3>-->
<!--                        {{list.name}}-->
<!--                      </h3>-->
<!--                      <p v-html="list.desc"></p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </li>-->
<!--              </template>-->
<!--            </ul>-->
<!--          </div>-->
          <!-- 프로젝트 -->
          <!-- div class="about__project">
            <h3>External Project</h3>
            <div class="">
              <ul class="about__list">
                <template v-for="(list, index) in projectList">
                  <li :key="index">
                    <p>
                      <span>{{list.year}}</span>
                      {{list.title}}
                    </p>
                  </li>
                </template>
              </ul>
            </div>
          </div -->
        </div>
      </section>
      <section class="about__client">
        <h2>Client</h2>
        <ul>
          <template v-for="(logo, index) in clientList">
          <li :key="index">
            <figure
              :style="{ backgroundImage: 'url(' + logo + ')' }"
            >
              <span class="a11y-hidden">로고 이미지 {{index + 1}}</span>
            </figure>
          </li>
          </template>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        clientList: [
          '/img/client/logo01.png',
          '/img/client/logo02.png',
          '/img/client/logo03.png',
          '/img/client/logo04.png',
          '/img/client/logo05.png',
          '/img/client/logo06.png',
          '/img/client/logo07.png',
          '/img/client/logo08.png',
          '/img/client/logo09.png',
          '/img/client/logo10.png',
          '/img/client/logo11.png',
          '/img/client/logo12.png'
        ],
        valueList: [
          'Communication',
          'Professional',
          'Challenge',
          'Teamwork'
        ],
        skillList: [
          {
            class: "ti-pencil-alt",
            name: "Management",
            desc: "프로젝트가 완료될 때까지<br>주도적으로 진행합니다."
          },
          {
            class: "ti-palette",
            name: "Design",
            desc: "UX/UI 중심의<br>디자인을 합니다."
          },
          {
            class: "ti-html5",
            name: "Development",
            desc: "디자인과 사용자 중심의<br>개발을 합니다."
          },
          {
            class: "ti-wordpress",
            name: "Wordpress",
            desc: "워드프레스를 활용한<br>개발이 가능합니다."
          },
          {
            class: "ti-widget",
            name: "Solution",
            desc: "카페24, 그누보드 등 솔루션<br>개발이 가능합니다."
          },
          {
            class: "ti-settings",
            name: "Maintenance",
            desc: "운영 중인 웹사이트를<br>더욱 개선시킵니다."
          }
        ],
        projectList: [
          {
            'year': '2019',
            'title': '위메이드 토큰 거래소 제작'
          },
          {
            'year': '2019',
            'title': '디카르고 물류관리 홈페이지 제작'
          },
          {
            'year': '2019',
            'title': '시대종합공사 홈페이지 제작'
          },
          {
            'year': '2019',
            'title': '박스오블리스 쇼핑몰 제작'
          },
          {
            'year': '2019',
            'title': '델레오코리아 관리자 페이지 제작'
          },
          {
            'year': '2017',
            'title': '리서치하우스봄 홈페이지 제작'
          },
          {
            'year': '2017',
            'title': '부천광림교회 홈페이지 제작'
          },
          {
            'year': '2017',
            'title': 'SK텔링크 관리자 페이지 제작'
          },
          {
            'year': '2017',
            'title': '슬림코치 쇼핑몰 제작'
          },
          {
            'year': '2017',
            'title': '더블다운 쇼핑몰 제작'
          },
          {
            'year': '2017',
            'title': '산마르코주얼리 쇼핑몰 제작'
          },
          {
            'year': '2017',
            'title': '(주)신화마이스터 홈페이지 제작'
          },
          {
            'year': '2017',
            'title': '드보르망 쇼핑몰 제작'
          }
        ]
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style src="./about.scss" lang="scss" scoped></style>
