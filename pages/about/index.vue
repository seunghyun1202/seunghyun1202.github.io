<template>
  <div class="about">
<!--    <div class="about__banner" role="banner">-->
<!--      <div class="bg-cover"></div>-->
<!--    </div>-->
    <div class="container">
      <section class="about__body">
        <div class="about__intro">
          <div class="row">
            <div class="col-6">
              <!-- 어바웃 -->
              <div class="about__me">
                <h3>About Me</h3>
                <p class="about__me__text">
                  농구에 푹 빠져 사는 프런트엔드 개발자입니다.
                  웹 개발의 전문가로 일하는만큼 프로의식을 가지고 임하며,
                  다른 사람이 생각하지 못한 부분까지 잡을 수 있도록 끊임없이 생각하며 개발합니다.
                  뷰로 개발하는 것에 관심이 많고 상황에 따라 다양한 방법으로 개발할 줄 압니다.
                  디자인에도 기웃거리며 보기 좋은 웹사이트를 만들기 위해 노력합니다.
                </p>
              </div>

              <!-- 학력 -->
              <div class="about__education">
                <h3>Education</h3>
                <div class="">
                  <ul class="about__list">
                    <template v-for="(list, index) in educationList">
                      <li :key="index">
                        <p class="about__period-list">
                          <span class="about__period">{{list.period}}</span>
                          {{list.title}}
                        </p>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>

              <!-- 커리어 내용 -->
              <div class="about__career">
                <h3>Career</h3>
                <div class="">
                  <ul class="about__list">
                    <template v-for="(list, index) in careerList">
                      <li :key="index">
                        <p class="about__period-list">
                          <span class="about__period">{{list.period}}</span>
                          {{list.title}}
                        </p>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-6">
              <!-- 베네핏 -->
              <div class="about__benefit">
                <h3>Benefit</h3>
                <ul class="about__list about__list__benefit">
                  <li>
                    <p class="about__period-list">
                      <span class="about__period">첫 번째,</span>
                      일정관리가 철저하며 진행상황을 공유해드립니다.
                    </p>
                  </li>
                  <li>
                    <p class="about__period-list">
                      <span class="about__period">두 번째,</span>
                      요청사항을 이행함과 별개로 더 좋은 방향을 찾아 제안드립니다.
                    </p>
                  </li>
                  <li>
                    <p class="about__period-list">
                      <span class="about__period">세 번째,</span>
                      발생 가능성이 있는 문제는 숨기지 않고 공유합니다.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- 프로젝트 -->
              <div class="about__project">
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
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
            </div>
            <div class="col-6">
            </div>
          </div>
        </div>
      </section>
      <section class="about__client">
        <h3>Client</h3>
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
        careerList: [
          {
            'period': '2018.03 ~ 2019.04',
            'title': '윤디자인 / (주)에이아트',
            'detail': '내용'
          },
          {
            'period': '2016.12 ~ 2018.02',
            'title': '(주)이케이네트웍스 / 모둠스튜디오',
            'detail': '내용'
          },
          {
            'period': '2016.06 ~ 2016.11',
            'title': '(주)비전스컴퍼니',
            'detail': '내용'
          },
          {
            'period': '2016.03 ~ 2016.05',
            'title': '(주)아람커뮤니케이션즈 / 인터모션',
            'detail': '내용'
          },
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
        ],
        educationList: [
          {
            'period': '2015.10 ~ 2016.02',
            'title': '[NCS] UI/UX 디자인 실무과정'
          },
          {
            'period': '2009.03 ~ 2015.02',
            'title': '동양미래대학교 / 소프트웨어정보'
          },
          {
            'period': '2006.03 ~ 2009.02',
            'title': '부명정보산업고등학교 / 인터넷정보'
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
