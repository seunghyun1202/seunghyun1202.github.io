<template>
  <div class="workspace">
    <section class="workspace__body">
      <div class="container">
        <!-- 프로젝트 요약 -->
        <div class="workspace__summary">
          <div class="row-table">
            <div class="col-table col-table-5">
              <h1
                class="summary__slogan"
                :class="{workspace__korean: workData.ko}"
                v-html="workData.summarySlogan"
              ></h1>
              <p class="summary__text" v-html="workData.summaryText"></p>
              <ul class="ul-inline workspace__skill">
                <li v-for="(list, index) in workData.useTech" :key="index">{{list}}</li>
              </ul>
              <div class="summary__info">
                <a class="workspace__link" target="_blank" :href="workData.link">사이트 바로가기</a>
              </div>
            </div>
            <div class="col-table col-table-7">
              <div class="workspace__description">
                <h2 class="a11y-hidden">포트폴리오 설명</h2>
                <div class="workspace__overview">
                  <p class="description__title">Overview</p>
                  <p class="description__text" v-text="workData.descText"></p>
                </div>
                <div class="workspace__technic">
                  <p class="description__title">Technical Description</p>
                  <p class="description__text" v-text="workData.techText"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 프로젝트 이미지 -->
        <div class="workspace__detail">
          <h2 class="a11y-hidden">포트폴리오 이미지</h2>
          <div class="workspace__img" v-for="(listImg, index) in workData.contentImg" :key="index">
            <figure class="figure__gallery">
              <img :src="listImg" alt="포트폴리오 이미지">
            </figure>
          </div>
        </div>

        <!-- 버튼 -->
        <div class="workspace__btn-group clear-both">
          <div
            class="float-left workspace__btn"
            v-if="workNumber !== 1"
          >
            <nuxt-link
              :to="{ name: 'workspace-wid', params:{wid:workNumber - 1}}"
            >PREV
            </nuxt-link>
            <div class="line"></div>
          </div>
          <div class="workspace__list">
            <figure>
              <nuxt-link to="/workspace">
                <span class="a11y-hidden">목록 보기</span>
                <div class="workspace__square-group">
                  <div class="workspace__square workspace__square01"></div>
                  <div class="workspace__square workspace__square02"></div>
                  <div class="workspace__square workspace__square03"></div>
                  <div class="workspace__square workspace__square04"></div>
                </div>
              </nuxt-link>
            </figure>
          </div>
          <div
            class="float-right workspace__btn"
            v-if="workNumber !== workDataList"
          >
            <nuxt-link
              :to="{ name: 'workspace-wid', params:{wid:workNumber + 1}}"
            >NEXT
            </nuxt-link>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    async asyncData({context, params}) {
      let {data: workspaceData} = await axios.get(process.env.API_SERVER_ADDRESS + '/data/workspace.json')
      return {
        workNumber: Number(params.wid),
        workDataList: workspaceData.data.length,
        workData: workspaceData.data,
      }
    },
    data () {
      return {
        detailData: {}
      }
    },
    created () {
      let id = this.workNumber;
      let data = {};
      let detail = this.workData.forEach((item) => {
        if (item.id.indexOf(id) >= 0) {
          data = item;
        };
      });
      this.workData = data;
    }
  }
</script>

<style src="./workspace.scss" lang="scss" scoped></style>
