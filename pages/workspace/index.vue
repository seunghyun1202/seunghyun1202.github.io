<template>
  <section class="list__padding-top">
    <div class="container">
      <h2 class="a11y-hidden">포트폴리오 목록</h2>
      <!-- 목록 -->
      <ul class="list__filter">
        <template v-for="(list, index) in workFilter">
          <li
            :key="index"
            @click="handleList(index)"
            :class="{'active': isActive(index)}"
          >{{list}}</li>
        </template>
      </ul>

      <!-- 리스트 -->
      <div class="">
        <transition name="empty">
          <template v-if="workDataInfo.length === 0">
            <p class="list__empty">목록이 없습니다.</p>
          </template>
        </transition>
          <template>
            <ul class="list__group">
              <transition-group name="list">
                <li
                  v-for="(list, index) in workDataInfo"
                  class="workspace__list"
                  :key="index"
                >
                  <nuxt-link :to="{name: 'workspace-wid', params: {wid: list.id}}">
                    <figure
                      class="list__thumbnail"
                      :style="{ backgroundImage: 'url(' + list.workspaceThumbnail + ')' }"
                    ></figure>
                    <div class="list__summary">
                      <div class="list__title">
                        {{list.workspaceName}}
                      </div>
                    </div>
                  </nuxt-link>
                </li>
              </transition-group>
            </ul>
          </template>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    async asyncData() {
      let {data: workspaceList} = await axios.get(process.env.API_SERVER_ADDRESS + '/data/workspace-list.json')
      return {
        workDataInfo: workspaceList.data,
        workFilter: [
          'All',
          'Brand',
          'E-commerce',
          'Promotion'
        ],
        flag: 0,
      }
    },
    created () {
      this.isActive(0);
    },
    methods: {
      isActive (index) {
        if(this.flag === index) {
          return true;
        } else {
          return false;
        }
      },
      handleList (type) {
        if (this.flag !== type) {
          switch (type) {
            case 0: {
              this.callAllData();
              this.flag = type;
              break;
            }
            case 1: {
              this.callBrandData();
              this.flag = type;
              break;
            }
            case 2: {
              this.callEcommerceData();
              this.flag = type;
              break;
            }
            default: {
              this.callPoromotionData();
              this.flag = type;
              break;
            }
          }
        }
      },
      callAllData () {
        axios.get(process.env.API_SERVER_ADDRESS + '/data/workspace-list.json').then((resp) => {
          this.workDataInfo = resp.data.data;
        });
      },
      callBrandData () {
        axios.get(process.env.API_SERVER_ADDRESS + '/data/workspace-list.json').then((resp) => {
          let brand = [];
          for (let i=0; i < resp.data.data.length; i++) {
            if (resp.data.data[i].ctg.indexOf('brand') >= 0) {
              brand.push(resp.data.data[i]);
            }
          }
          this.workDataInfo = brand;
        });
      },
      callEcommerceData () {
        axios.get(process.env.API_SERVER_ADDRESS + '/data/workspace-list.json').then((resp) => {
          let data = [];
          for (let i=0; i < resp.data.data.length; i++) {
            if (resp.data.data[i].ctg.indexOf('e-commerce') >= 0) {
              data.push(resp.data.data[i]);
            }
          }
          this.workDataInfo = data;
        });
      },
      callPoromotionData () {
        axios.get(process.env.API_SERVER_ADDRESS + '/data/workspace-list.json').then((resp) => {
          let data = [];
          for (let i=0; i < resp.data.data.length; i++) {
            if (resp.data.data[i].ctg.indexOf('promotion') >= 0) {
              data.push(resp.data.data[i]);
            }
          }
          this.workDataInfo = data;
        });
      }
    }
  }
</script>

<style src="./workspace-list.scss" lang="scss" scoped></style>
