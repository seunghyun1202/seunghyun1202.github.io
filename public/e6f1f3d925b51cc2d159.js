(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(t,e,o){var content=o(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("d3f3d69c",content,!0,{sourceMap:!1})},206:function(t,e,o){"use strict";var n=o(197);o.n(n).a},207:function(t,e,o){(t.exports=o(15)(!1)).push([t.i,".list__padding-top[data-v-e2812c3e]{padding-top:160px;padding-bottom:80px}@media (max-width:768px){.list__padding-top[data-v-e2812c3e]{padding-top:120px;padding-bottom:60px}}.list__group[data-v-e2812c3e]{font-size:0}.workspace__list[data-v-e2812c3e]{position:relative;display:inline-block;width:50%;border:1px solid #fff}@media (max-width:768px){.workspace__list[data-v-e2812c3e]{width:100%;border:none;margin-bottom:2px}}.workspace__list .list__thumbnail[data-v-e2812c3e]{padding-bottom:100%;background-size:contain;background-position:50%}.workspace__list .list__summary[data-v-e2812c3e]{z-index:20;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.65);width:100%;height:100%;color:#efefef;text-align:center;padding-top:46.2%;box-sizing:border-box;opacity:0;transition:opacity .3s ease-out;-webkit-transition:opacity .3s ease-out;-moz-transition:opacity .3s ease-out}@media (max-width:768px){.workspace__list .list__summary[data-v-e2812c3e]{transition:none;-webkit-transition:none;-moz-transition:none;opacity:1;padding-top:0;top:0;height:auto;background-color:transparent;background-color:initial}}.workspace__list .list__summary .list__title[data-v-e2812c3e]{color:#fff;font-size:22px;transform:translate3d(0,-10px,0);-webkit-transform:translate3d(0,-10px,0);-moz-transform:translate3d(0,-10px,0);opacity:0;-webkit-transition:opacity .5s ease-out .3s,-webkit-transform .5s ease-out .2s;transition:opacity .5s ease-out .3s,-webkit-transform .5s ease-out .2s;transition:transform .5s ease-out .2s,opacity .5s ease-out .3s;transition:transform .5s ease-out .2s,opacity .5s ease-out .3s,-webkit-transform .5s ease-out .2s;-webkit-transition:-webkit-transform .5s ease-out .2s,opacity .5s ease-out .3s;-moz-transition:-moz-transform .5s ease-out .2s,opacity .5s ease-out .3s}@media (max-width:768px){.workspace__list .list__summary .list__title[data-v-e2812c3e]{font-size:16px;opacity:1;transform:translateZ(0);-moz-transform:translateZ(0);-webkit-transform:translateZ(0);padding-top:16px;padding-left:16px;text-align:left;color:#000}}.workspace__list:hover .list__summary[data-v-e2812c3e]{opacity:1}.workspace__list:hover .list__summary .list__title[data-v-e2812c3e]{opacity:1;transform:translateZ(0);-webkit-transform:translateZ(0);-moz-transform:translateZ(0)}",""])},219:function(t,e,o){"use strict";o.r(e);o(43);var n,r=o(5),c=o(81),l=o.n(c),d={asyncData:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://seunghyun1202.github.io/data/workspace-list.json");case 2:return e=t.sent,o=e.data,t.abrupt("return",{workDataInfo:o.data});case 5:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},_=(o(206),o(7)),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"list__padding-top"},[o("div",{staticClass:"container"},[o("h2",{staticClass:"a11y-hidden"},[t._v("포트폴리오 목록")]),t._v(" "),o("ul",{staticClass:"list__group"},[t._l(t.workDataInfo,(function(e,n){return[o("li",{key:n,staticClass:"workspace__list"},[o("nuxt-link",{attrs:{to:{name:"workspace-wid",params:{wid:n+1}}}},[o("figure",{staticClass:"list__thumbnail",style:{backgroundImage:"url("+e.workspaceThumbnail+")"}}),t._v(" "),o("div",{staticClass:"list__summary"},[o("div",{staticClass:"list__title"},[t._v("\n                "+t._s(e.workspaceName)+"\n              ")])])])],1)]}))],2)])])}),[],!1,null,"e2812c3e",null);e.default=component.exports}}]);