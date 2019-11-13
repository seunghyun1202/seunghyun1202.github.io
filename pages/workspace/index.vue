<template>
  <section class="list__padding-top">
    <div class="container">
      <h2 class="a11y-hidden">포트폴리오 목록</h2>
      <ul class="list__group">
        <template v-for="(list, index) in workDataInfo">
          <li class="workspace__list"
              :key="index"
          >
            <nuxt-link :to="{name: 'workspace-wid', params: {wid: index + 1}}">
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
        </template>
      </ul>
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
    }
  }
</script>

<style src="./workspace-list.scss" lang="scss" scoped></style>
