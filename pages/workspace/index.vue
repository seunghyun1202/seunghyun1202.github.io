<template>
  <section class="list__padding-top">
    <div class="container">
      <h2 class="a11y-hidden">포트폴리오 목록</h2>
      <!-- 포트폴리오 리스트 -->
      <ul class="list__filter">
        <li
          v-for="(val, key) in option.getFilterData"
          class="button"
          :class="[key===filterOption? 'active' : '']"
          @click="filter(key)"
        >
          {{key}}
        </li>
      </ul>

      <!-- 포트폴리오 목록 -->
      <isotope
        class="list__group"
        ref="cpt"
        :item-selector="'workspace__list'"
        :list="workDataInfo"
        :options='option'
        @filter="filterOption=arguments[0]"
      >
        <div v-for="(element, index) in workDataInfo" :class='[element.category]'  :key="index">
          <nuxt-link :to="{name: 'workspace-wid', params: {wid: element.id}}">
            <figure
              class="list__thumbnail"
              :style="{ backgroundImage: 'url(' + element.workspaceThumbnail + ')' }"
            ></figure>
            <div class="list__summary">
              <div class="list__title">
                {{element.workspaceName}}
              </div>
            </div>
          </nuxt-link>
        </div>
      </isotope>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    async asyncData() {
      let {data: workspaceList} = await axios.get(process.env.API_SERVER_ADDRESS + '/data/workspace-list.json')
      return {
        workDataInfo: workspaceList.data
      }
    },
    data () {
      return {
        selected: null,
        filterOption: "All",
        option: {
          itemSelector: ".workspace__list",
          getFilterData: {
            "All": function () {
              return true;
            },
            "Brand": function (el) {
              return el.ctg.indexOf('brand') >= 0;
            },
            "E-commerce": function (el) {
              return el.ctg.indexOf('e-commerce') >= 0;
            },
            "Promotion": function (el) {
              return el.ctg.indexOf('promotion') >= 0;
            }
          }
        }
      }
    },
    methods: {
      filter: function(key) {
        this.$refs.cpt.filter(key);
      },
    }
  }
</script>

<style src="./workspace-list.scss" lang="scss" scoped></style>
