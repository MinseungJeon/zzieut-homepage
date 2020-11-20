<template>
  <div class="Recruit">
    <div class="recruitPageBody">
      <h2>채용중인 분야</h2>
      <div class="recruitContainer">
        <div>
          <ul>
            <li class="title">Product</li>
            <li
              class="serverTeamMenu"
              @click="(e) => e.target.classList.toggle('active')"
            >
              Server
            </li>
            <li
              class="iOSTeamMenu"
              @click="(e) => e.target.classList.toggle('active')"
            >
              iOS
            </li>
            <li
              class="androidTeamMenu"
              @click="(e) => e.target.classList.toggle('active')"
            >
              Android
            </li>
          </ul>
          <ul>
            <li class="title">Data Analysis & Machine Learning</li>
            <li
              class="dataTeamMenu"
              @click="(e) => e.target.classList.toggle('active')"
            >
              Data Scientist
            </li>
          </ul>
        </div>
        <div class="descContainer">
          <div class="serverTeam teams">
            <div class="description">
              <h3>팀 소개</h3>
              <ul>
                <li>
                  찜(찌읏) 서버 팀은 2000만 유저의 트래픽을 견뎌내는 안정적이고
                  확장성 있는 서버를 만듭니다.
                </li>
              </ul>
              <h3>주요업무</h3>
              <ul>
                <li>찜(찌읏)의 백엔드 시스템 개발</li>
              </ul>
              <h3>자격요건</h3>
              <ul>
                <li>잘 하는 프로그래밍 언어가 하나 이상 있으신 분</li>
                <li>새로운 것을 배우고 익히는 것에 두려움이 없으신 분</li>
                <li>책임감이 강하신 분</li>
                <li>빈틈없고 퀄리티 높은 서비스를 만들기 위해 노력하시는 분</li>
              </ul>
              <h3>우대사항</h3>
              <ul>
                <li>확장성 있는 서버 아키텍처에 대한 이해</li>
                <li>AWS 사용 경험</li>
                <li>다양한 국가에서 사용되는 서비스 개발 경험</li>
                <li>Vue 등 Front-end 개발 경험</li>
              </ul>
              <h3>지원방법</h3>
              <p>
                '지원하기'버튼을 눌러서 이력서, 자유로운 형식의 자기소개서(PDF),
                Github ID(필수 아님)을 보내주세요.
              </p>
              <div class="apply">
                <a href="">지원하기</a>
                <p>
                  이름, 나이 연락처, 학력 사항 지원분야는 꼭 적어 주세요. 자기
                  소개서는 자기 자신을 가장 잘 드러낼 수 있는 방법을 택해
                  주세요. "저는 엄격한 아버지와 자상한 어머니 밑에서
                  자라난~"으로 시작하는 형식적인 자기소개는 정중히 사양합니다.
                  문서양식은 PDF만 받습니다.
                </p>
              </div>
            </div>
          </div>
          <div class="iOSTeam teams"></div>
          <div class="androidTeam teams"></div>
          <div class="dataTeam teams"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#Recruit",
  data: {},
  methods: {},
};
</script>
