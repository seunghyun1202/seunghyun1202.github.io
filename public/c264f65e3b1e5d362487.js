(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{214:function(t,o,e){var content=e(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("43a52407",content,!0,{sourceMap:!1})},224:function(t,o,e){"use strict";var n=e(214);e.n(n).a},225:function(t,o,e){(t.exports=e(15)(!1)).push([t.i,'.list__padding-top[data-v-b8d9b8a4]{padding-top:160px;padding-bottom:80px}@media (max-width:768px){.list__padding-top[data-v-b8d9b8a4]{padding-top:120px;padding-bottom:60px}}.list__filter[data-v-b8d9b8a4]{display:table;margin:0 auto;padding-bottom:30px}.list__filter li[data-v-b8d9b8a4]{position:relative;display:inline-block;margin-right:20px;cursor:pointer;padding:0 6px}@media (max-width:768px){.list__filter li[data-v-b8d9b8a4]{margin-right:10px}}.list__filter li.active[data-v-b8d9b8a4]:after{position:absolute;top:50%;left:0;display:block;content:"";width:100%;height:1px;background:#161616}.list__filter li[data-v-b8d9b8a4]:last-child{margin-right:0}.list__group[data-v-b8d9b8a4]{font-size:0}.workspace__list[data-v-b8d9b8a4]{position:relative;display:inline-block;width:50%}@media (max-width:768px){.workspace__list[data-v-b8d9b8a4]{width:100%}}.workspace__list .list__thumbnail[data-v-b8d9b8a4]{padding-bottom:65%;background-size:contain;background-position:50%;background-repeat:no-repeat}.workspace__list .list__summary[data-v-b8d9b8a4]{z-index:20;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.65);width:100%;height:100%;color:#efefef;text-align:center;padding-top:30%;box-sizing:border-box;opacity:0;transition:opacity .3s ease-out;-webkit-transition:opacity .3s ease-out;-moz-transition:opacity .3s ease-out}@media (max-width:768px){.workspace__list .list__summary[data-v-b8d9b8a4]{transition:none;-webkit-transition:none;-moz-transition:none;opacity:1;padding-top:0;top:0;height:auto;background-color:transparent;background-color:initial}}.workspace__list .list__summary .list__title[data-v-b8d9b8a4]{color:#fff;font-size:22px;transform:translate3d(0,-10px,0);-webkit-transform:translate3d(0,-10px,0);-moz-transform:translate3d(0,-10px,0);opacity:0;-webkit-transition:opacity .5s ease-out .3s,-webkit-transform .5s ease-out .2s;transition:opacity .5s ease-out .3s,-webkit-transform .5s ease-out .2s;transition:transform .5s ease-out .2s,opacity .5s ease-out .3s;transition:transform .5s ease-out .2s,opacity .5s ease-out .3s,-webkit-transform .5s ease-out .2s;-webkit-transition:-webkit-transform .5s ease-out .2s,opacity .5s ease-out .3s;-moz-transition:-moz-transform .5s ease-out .2s,opacity .5s ease-out .3s}@media (max-width:768px){.workspace__list .list__summary .list__title[data-v-b8d9b8a4]{font-size:16px;opacity:1;transform:translateZ(0);-moz-transform:translateZ(0);-webkit-transform:translateZ(0);padding-top:16px;padding-left:16px;text-align:left;color:#161616}}.workspace__list:hover .list__summary[data-v-b8d9b8a4]{opacity:1}.workspace__list:hover .list__summary .list__title[data-v-b8d9b8a4]{opacity:1;transform:translateZ(0);-webkit-transform:translateZ(0);-moz-transform:translateZ(0)}.list-enter[data-v-b8d9b8a4]{opacity:0!important}.list-enter-active[data-v-b8d9b8a4]{-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}',""])},231:function(t,o,e){"use strict";e.r(o);e(44);var n,r=e(5),l=e(84),d=e.n(l),c={asyncData:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var o,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://seunghyun1202.github.io/data/workspace-list.json");case 2:return o=t.sent,e=o.data,t.abrupt("return",{workDataInfo:e.data});case 5:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)}),created:function(){var t=this.workDataInfo;t.sort((function(a,b){return a.id<b.id?-1:a.id>b.id?1:0})),this.workDataInfo=t},data:function(){return{selected:null,filterOption:"All",option:{itemSelector:".workspace__list",getFilterData:{All:function(){return!0},Brand:function(t){return t.ctg.indexOf("brand")>=0},"E-commerce":function(t){return t.ctg.indexOf("e-commerce")>=0},Promotion:function(t){return t.ctg.indexOf("promotion")>=0}}}}},methods:{filter:function(t){this.$refs.cpt.filter(t)}}},_=(e(224),e(7)),component=Object(_.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"list__padding-top"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"a11y-hidden"},[t._v("포트폴리오 목록")]),t._v(" "),e("ul",{staticClass:"list__filter"},t._l(t.option.getFilterData,(function(o,n){return e("li",{class:[n===t.filterOption?"active":""],on:{click:function(o){return t.filter(n)}}},[t._v("\n        "+t._s(n)+"\n      ")])})),0),t._v(" "),e("isotope",{ref:"cpt",staticClass:"list__group",attrs:{"item-selector":"workspace__list",list:t.workDataInfo,options:t.option},on:{filter:function(o){t.filterOption=arguments[0]}}},t._l(t.workDataInfo,(function(element,o){return e("div",{key:o},[e("nuxt-link",{attrs:{to:{name:"workspace-wid",params:{wid:element.id}}}},[e("figure",{staticClass:"list__thumbnail",style:{backgroundImage:"url("+element.workspaceThumbnail+")"}}),t._v(" "),e("div",{staticClass:"list__summary"},[e("div",{staticClass:"list__title"},[t._v("\n              "+t._s(element.workspaceName)+"\n            ")])])])],1)})),0)],1)])}),[],!1,null,"b8d9b8a4",null);o.default=component.exports}}]);