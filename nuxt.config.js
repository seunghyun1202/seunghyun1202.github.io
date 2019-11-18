module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // HTML 주 언어 설정
    htmlAttrs: {
      lang: 'ko_KR',
    },
    title: 'Lim SeungHyun WebSite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SeungHyun Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css' }, // Default KOR Fonts
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' }, // Default ENG Fonts
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Raleway:400,500,600,700&display=swap' }, // ENG Element Fonts
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed:400,500&display=swap'} // ENG HeadLine
    ]
  },
  /*
  ** Global SCSS
  */
  css: [
    {src: '~/assets/scss/app.scss', lang: 'scss'}
  ],
  /*
  ** Global Variables
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      '~/assets/scss/variables.scss'
    ]
  },
  // API 주소 전역 선언
  env: {
    // API_SERVER_ADDRESS: 'http://172.30.1.54:3333' // 테스트
    API_SERVER_ADDRESS: 'https://seunghyun1202.github.io' // 테스트
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  /*
  ** Build configuration
  */
  build: {
    // npm run generate 할 때 _Nuxt가 아닌 곳에 파일 모아줌.
    publicPath: '/public/',
    vendor: [
      'axios'
    ],
  },
  plugins: [
    {src: '~/plugins/vue-awesome-swiper.js', ssr: false},
  ]
}
