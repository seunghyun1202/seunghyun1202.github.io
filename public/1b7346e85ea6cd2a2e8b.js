(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0287e77d",content,!0,{sourceMap:!1})},218:function(t,e,n){"use strict";var l=n(211);n.n(l).a},219:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".main-visual[data-v-097a44dc]{width:100%;background:#f2f2f2}.main-visual .swiper-wrapper[data-v-097a44dc]{position:relative;height:100vh}.main-visual .swiper-slide[data-v-097a44dc]{background:beige}.main-visual .swiper-button-prev[data-v-097a44dc]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")!important;opacity:.6;left:30px}@media (max-width:768px){.main-visual .swiper-button-prev[data-v-097a44dc]{left:10px}}.main-visual .swiper-button-next[data-v-097a44dc]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")!important;opacity:.6;right:30px}@media (max-width:768px){.main-visual .swiper-button-next[data-v-097a44dc]{right:10px}}.main-visual .swiper-pagination[data-v-097a44dc]{color:#0047ab;bottom:24px}.main-visual__bg-font[data-v-097a44dc]{width:100%;text-align:center}.main-visual__info[data-v-097a44dc]{font-size:16px;color:#0047ab}.main-visual__wording[data-v-097a44dc]{position:absolute;top:48%;left:0;width:100%;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.main-visual__text[data-v-097a44dc]{font-size:72px;font-weight:500;text-align:center;color:#0047ab;-webkit-transition:.3s;transition:.3s}@media (max-width:768px){.main-visual__text[data-v-097a44dc]{font-size:32px}}.main-visual__info[data-v-097a44dc]{padding-top:20px}",""])},235:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{test:"",swiperOptionMainVisual:{loop:!0,mousewheel:!0,effect:"fade",pagination:{el:".main-visual .swiper-pagination",type:"fraction"},navigation:{nextEl:".main-visual .swiper-button-next",prevEl:".main-visual .swiper-button-prev"}},windowHeight:0}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize),document.querySelector("body").style.overflow="overlay"},methods:{handleResize:function(){this.windowHeight=window.innerHeight,document.querySelector(".swiper-wrapper").style.height=this.windowHeight+"px",document.querySelector("body").style.overflow="hidden"}}},r=(n(218),n(7)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"main-visual"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiperMainVisual",value:t.swiperOptionMainVisual,expression:"swiperOptionMainVisual",arg:"mySwiperMainVisual"}]},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide swiper-slide01"},[n("div",{staticClass:"main-visual__bg"}),t._v(" "),n("div",{staticClass:"main-visual__wording"},[n("h2",[n("nuxt-link",{staticClass:"main-visual__text fira-title",attrs:{to:"/workspace"}},[t._v("Workspace")])],1),t._v(" "),n("p",{staticClass:"main-visual__info"},[t._v("피벗의 작업 공간을 보실 수 있습니다.")])])]),t._v(" "),n("div",{staticClass:"swiper-slide swiper-slide02"},[n("div",{staticClass:"main-visual__bg"}),t._v(" "),n("div",{staticClass:"main-visual__wording position-center"},[n("h2",[n("nuxt-link",{staticClass:"main-visual__text fira-title",attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),n("p",{staticClass:"main-visual__info"},[t._v("피벗이 제공하는 서비스를 보실 수 있습니다.")])])]),t._v(" "),n("div",{staticClass:"swiper-slide swiper-slide03"},[n("div",{staticClass:"main-visual__bg"}),t._v(" "),n("div",{staticClass:"main-visual__wording position-center"},[n("h2",[n("nuxt-link",{staticClass:"main-visual__text fira-title",attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("p",{staticClass:"main-visual__info"},[t._v("피벗에 대해 소개합니다.")])])])]),t._v(" "),n("div",{staticClass:"swiper-pagination"}),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})])])])}),[],!1,null,"097a44dc",null);e.default=component.exports}}]);