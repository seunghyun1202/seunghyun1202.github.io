<template>
  <div class="service">
    <div class="container-small">
      <div class="page-title">
        <h2 class="">설계 방법</h2>
        <span>웹사이트 제작에 필요한 단계를 설명합니다.</span>
      </div>
      <ul class="service__process">
        <li class="row">
          <div class="col-6">
            <figure class="service__thumbnail service__thumbnail01"></figure>
          </div>
          <div class="col-6">
            <div class="service__contents">
              <div class="service__header">
                <span class="number">01</span>
                <h3 class="title">사전미팅</h3>
                <span class="hash">#Clishe</span>
                <span class="hash">#Needs</span>
                <span class="hash">#Contract</span>
              </div>
              <p class="service__wording">
                클라이언트의 요구사항이 가장 중요하다는 것을 알고 있기 때문에 사전 미팅은 무조건 1회 이상 진행합니다.
                한번 만드시는 웹 사이트가 만족할 수 있는 수준으로 제작되는 첫 번째 단계입니다.
              </p>
            </div>
          </div>
        </li>
        <li class="row flex-reverse">
          <div class="col-6">
            <div class="service__contents">
              <div class="service__header">
                <span class="number">02</span>
                <h3 class="title">정보수집</h3>
                <span class="hash">#Concept</span>
                <span class="hash">#Reference</span>
                <span class="hash">#Research</span>
              </div>
              <p class="service__wording">
                클라이언트의 컨셉과 정의를 디자인에 잘 녹여낼 수 있도록 정보를 수집합니다.
              </p>
            </div>
          </div>
          <div class="col-6">
            <figure class="service__thumbnail service__thumbnail02"></figure>
          </div>
        </li>
        <li class="row">
          <div class="col-6">
            <figure class="service__thumbnail service__thumbnail04"></figure>
          </div>
          <div class="col-6">
            <div class="service__contents">
              <div class="service__header">
                <span class="number">03</span>
                <h3 class="title">전략수립</h3>
                <span class="hash">#Schedule</span>
                <span class="hash">#Process</span>
              </div>
              <p class="service__wording">
                임시 콘텐츠를 기반으로 소통한 결과를 토대로 주요 목표를 달성할 수 있도록 전략을 수립합니다.
              </p>
            </div>
          </div>
        </li>
        <li class="row flex-reverse">
          <div class="col-6">
            <div class="service__contents">
              <div class="service__header">
                <span class="number">04</span>
                <h3 class="title">와이어프레임</h3>
                <span class="hash">#Sample</span>
                <span class="hash">#Opinion</span>
                <span class="hash">#Communication</span>
              </div>
              <p class="service__wording">
                해당 정보들을 취합하여 시각적으로 확인하실 수 있도록 임시 콘텐츠를 만듭니다. 이 단계에서 수정 및 보완이 이루어집니다.
              </p>

              <nuxt-link class="service__btn" to="/service/guide">Style Guide</nuxt-link>
            </div>
          </div>
          <div class="col-6">
            <figure class="service__thumbnail service__thumbnail03"></figure>
          </div>
        </li>
        <li class="row">
          <div class="col-6">
            <figure class="service__thumbnail service__thumbnail05"></figure>
          </div>
          <div class="col-6">
            <div class="service__contents">
              <div class="service__header">
                <span class="number">05</span>
                <h3 class="title">디자인</h3>
                <span class="hash">#UX/UI</span>
                <span class="hash">#Visual</span>
              </div>
              <p class="service__wording">
                지금까지 모인 컨셉과 정보 등 무형의 정의를 시각적으로 표현합니다.
              </p>
            </div>
          </div>
        </li>
        <li class="row flex-reverse">
          <div class="col-6">
            <div class="service__contents">
              <div class="service__header">
                <span class="number">06</span>
                <h3 class="title">개발</h3>
                <span class="hash">#supplement</span>
                <span class="hash">#Function</span>
                <span class="hash">#UX/UI</span>
              </div>
              <p class="service__wording">
                디자인 된 시각적 요소들을 코딩을 통해 웹 사이트로 구축합니다.
              </p>
            </div>
          </div>
          <div class="col-6">
            <figure class="service__thumbnail service__thumbnail06"></figure>
          </div>
        </li>
        <li class="row">
          <div class="col-6">
            <figure class="service__thumbnail service__thumbnail07"></figure>
          </div>
          <div class="col-6">
            <div class="service__contents">
              <div class="service__header">
                <span class="number">07</span>
                <h3 class="title">기타 서비스</h3>
                <span class="hash">#Operation</span>
                <span class="hash">#Maintenance</span>
                <span class="hash">#Seo</span>
              </div>
              <p class="service__wording">
                웹 사이트 구축 이후 버그나 의도와 다르게 만들어진 부분은 A/S 해드립니다.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style src="./service.scss" scoped lang="scss"></style>
