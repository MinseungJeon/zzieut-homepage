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
                            v-on:click="visible = !visible"
                        >
                            Server
                        </li>
                        <li class="iOSTeamMenu" v-on:click="clickEvent">iOS</li>
                        <li class="androidTeamMenu" v-on:click="clickEvent">
                            Android
                        </li>
                    </ul>
                    <ul>
                        <li class="title">Data Analysis & Machine Learning</li>
                        <li class="dataTeamMenu" v-on:click="clickEvent">
                            Data Scientist
                        </li>
                    </ul>
                </div>
                <div class="descContainer">
                    <div class="serverTeam teams" v-show="visible">
                        <div class="description">
                            <h3>팀 소개</h3>
                            <ul>
                                <li>
                                    찜(찌읏) 서버 팀은 2000만 유저의 트래픽을
                                    견뎌내는 안정적이고 확장성 있는 서버를
                                    만듭니다.
                                </li>
                            </ul>
                            <h3>주요업무</h3>
                            <ul>
                                <li>찜(찌읏)의 백엔드 시스템 개발</li>
                            </ul>
                            <h3>자격요건</h3>
                            <ul>
                                <li>
                                    잘 하는 프로그래밍 언어가 하나 이상 있으신
                                    분
                                </li>
                                <li>
                                    새로운 것을 배우고 익히는 것에 두려움이
                                    없으신 분
                                </li>
                                <li>책임감이 강하신 분</li>
                                <li>
                                    빈틈없고 퀄리티 높은 서비스를 만들기 위해
                                    노력하시는 분
                                </li>
                            </ul>
                            <h3>우대사항</h3>
                            <ul>
                                <li>확장성 있는 서버 아키텍처에 대한 이해</li>
                                <li>AWS 사용 경험</li>
                                <li>
                                    다양한 국가에서 사용되는 서비스 개발 경험
                                </li>
                                <li>Vue 등 Front-end 개발 경험</li>
                            </ul>
                            <h3>지원방법</h3>
                            <p>
                                '지원하기'버튼을 눌러서 이력서, 자유로운 형식의
                                자기소개서(PDF), Github ID(필수 아님)을
                                보내주세요.
                            </p>
                            <div class="apply">
                                <a href="">지원하기</a>
                                <p>
                                    이름, 나이 연락처, 학력 사항 지원분야는 꼭
                                    적어 주세요. 자기 소개서는 자기 자신을 가장
                                    잘 드러낼 수 있는 방법을 택해 주세요. "저는
                                    엄격한 아버지와 자상한 어머니 밑에서
                                    자라난~"으로 시작하는 형식적인 자기소개는
                                    정중히 사양합니다. 문서양식은 PDF만
                                    받습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="iOSTeam teams" v-if="(visible = !visible)">
                        <div class="description">
                            <h3>팀 소개</h3>
                            <ul>
                                <li>
                                    찜(찌읏) 아이폰 팀은 어느 곳보다도 난이도
                                    있고, 큰 규모의 앱을 만듭니다.
                                </li>
                                <li>
                                    찜(찌읏) 아이폰 앱은 아래의 기술들로
                                    만들어집니다.
                                    <ul>
                                        <li>
                                            AFNetworking, Mantle, Typhoon,
                                            Expecta, OCMock, thrift, Alamofire,
                                            SnapKit, pop 등의 다양한 오픈소스를
                                            앱 곳곳에서 적극적으로 활용
                                        </li>
                                        <li>
                                            Objective-C, Swift를 기반으로 하고
                                            각종 스크립트 언어 사용
                                        </li>
                                        <li>VIPER 아키텍쳐 적용</li>
                                        <li>
                                            Github을 활용한 소스코드 및 이슈
                                            관리
                                        </li>
                                        <li>Jenkins를 활용한 지속적 통합</li>
                                        <li>
                                            다양한 광고 플랫폼과 버그 수집 툴
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h3>중요업무</h3>
                            <ul>
                                <li>찜(찌읏)의 iOS 클라이언트 개발</li>
                                <li>
                                    2000만 유저와 직접 소통하는 감성적인 앱
                                    서비스를 개발
                                </li>
                                <li>기획, 디자인, 사업개발 팀과의 협업</li>
                            </ul>

                            <h3>자격요건</h3>
                            <ul>
                                <li>새로운 것을 배우고 싶으신 분</li>
                                <li>
                                    자신의 작업에 대한 책임감이 강하고 자부심이
                                    있으신 분
                                </li>
                                <li>
                                    Framework에 대한 이해를 바탕으로 완벽한
                                    제품을 위해 장인 정신을 발휘하실 분
                                </li>
                                <li>개발 실무 경험이 있으신 분</li>
                            </ul>
                            <h3>우대사항</h3>
                            <ul>
                                <li>프론트엔드 아키텍쳐에 대한 이해</li>
                                <li>
                                    Swift 또는 Objective-C에 대한 지식 및 경험
                                </li>
                                <li>앱 출시 경험</li>
                            </ul>
                            <h3>지원방법</h3>
                            <p>
                                '지원하기'버튼을 눌러서 이력서, 자유로운 형식의
                                자기소개서(PDF), Github ID(필수 아님)을
                                보내주세요.
                            </p>
                            <div class="apply">
                                <a href="">지원하기</a>
                                <p>
                                    이름, 나이 연락처, 학력 사항 지원분야는 꼭
                                    적어 주세요. 자기 소개서는 자기 자신을 가장
                                    잘 드러낼 수 있는 방법을 택해 주세요. "저는
                                    엄격한 아버지와 자상한 어머니 밑에서
                                    자라난~"으로 시작하는 형식적인 자기소개는
                                    정중히 사양합니다. 문서양식은 PDF만
                                    받습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="androidTeam teams">
                        <div class="description">
                            <h3>팀 소개</h3>
                            <ul>
                                <li>
                                    찜(찌읏) 안드로이드 팀은 어느 곳보다도
                                    난이도 있고 복잡한, 큰 규모의 앱을 만들어
                                    낸다는 것에 강한 자부심을 느낍니다.
                                </li>
                                <li>
                                    찜(찌읏) 안드로이드 앱은 아래의 기술들로
                                    만들어집니다.
                                    <ul>
                                        <li>
                                            Firebase, RxJava, Retrofit, Dagger,
                                            Glide, Fresco, ButterKnife, Jackson,
                                            Guava, Thrift, Netty, Mockito,
                                            ThreeTen, TotallyLazy, FFmpeg 등의
                                            다양한 오픈소스를 앱 곳곳에서
                                            적극적으로 활용
                                        </li>
                                        <li>
                                            APT 및 스크립트를 활용한 소스코드
                                            자동 생성
                                        </li>
                                        <li>
                                            Github을 활용한 소스코드 및 이슈
                                            관리
                                        </li>
                                        <li>Jenkins를 활용한 지속적 통합</li>
                                        <li>
                                            다양한 광고 플랫폼과 버그 수집 툴
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h3>중요업무</h3>
                            <ul>
                                <li>찜(찌읏)의 안드로이드 클라이언트 개발</li>
                                <li>
                                    2000만 유저와 직접 소통하는 감성적인 앱
                                    서비스를 개발
                                </li>
                            </ul>
                            <h3>자격요건</h3>
                            <ul>
                                <li>
                                    새로운 기술을 배우고 과거의 코드를 개선하는
                                    데에 재미를 느끼거나 의욕이 강하신 분
                                </li>
                                <li>
                                    Android Framework와 각종 오픈소스의 내부를
                                    과감하게 파헤칠 수 있으신 분
                                </li>
                                <li>
                                    제품, 혹은 개발에 대한 의견을 거리낌없이
                                    공유하시는 분
                                </li>
                                <li>
                                    자신의 작업에 대한 책임감이 강하고 자부심이
                                    있으신 분
                                </li>
                                <li>
                                    구글 서비스 및 Android 기기 사용이 익숙하신
                                    분
                                </li>
                                <li>Java에 대한 지식 및 경험이 있으신 분</li>
                            </ul>
                            <h3>우대사항</h3>
                            <ul>
                                <li>찜(찌읏) 안드로이드 버전을 쓰고 계신 분</li>
                                <li>
                                    MVP, MVVM 등의 코드 아키텍쳐 및 테스트
                                    자동화에 대한 이해가 있으신 분
                                </li>
                                <li>
                                    RxJava2를 비롯한 찜(찌읏)에 포함된 오픈소스
                                    라이브러리들을 적극적으로 활용해 보신 분
                                </li>
                                <li>
                                    채팅, 동영상 처리, 음성 및 영상 통화 개발
                                    경험
                                </li>
                                <li>NDK 개발 경험</li>
                                <li>Android Wear 개발 경험</li>
                                <li>
                                    안드로이드 앱들을 디컴파일 해서 분석을
                                    시도해 본 분
                                </li>
                                <li>Kotlin으로 앱을 제작해 보신 분</li>
                                <li>
                                    아이폰 혹은 타 모바일 플랫폼에서의 개발 경험
                                </li>
                            </ul>
                            <h3>지원방법</h3>
                            <p>
                                '지원하기'버튼을 눌러서 이력서, 자유로운 형식의
                                자기소개서(PDF), Github ID(필수 아님)을
                                보내주세요.
                            </p>
                            <div class="apply">
                                <a href="">지원하기</a>
                                <p>
                                    이름, 나이 연락처, 학력 사항 지원분야는 꼭
                                    적어 주세요. 자기 소개서는 자기 자신을 가장
                                    잘 드러낼 수 있는 방법을 택해 주세요. "저는
                                    엄격한 아버지와 자상한 어머니 밑에서
                                    자라난~"으로 시작하는 형식적인 자기소개는
                                    정중히 사양합니다. 문서양식은 PDF만
                                    받습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="dataTeam teams">
                        <div class="description">
                            <h3>팀 소개</h3>
                            <ul>
                                <li>
                                    찜(찌읏) 데이터 팀은 2000만 유저가
                                    만들어내는 로그에 대한 이해를 바탕으로
                                    회사와 제품의 미래 방향성을 제시합니다
                                </li>
                            </ul>
                            <h3>주요업무</h3>
                            <ul>
                                <li>찜(찌읏)의 데이터 분석</li>
                                <li>
                                    찜(찌읏)의 누적된 데이터를 이용한 새로운
                                    비지니스 모델 탐색
                                </li>
                                <li>
                                    찜(찌읏)의 에서 사용되고 있는 AdNetwork
                                    최적화 및 운영
                                </li>
                                <li>
                                    찜(찌읏)의 서버와 클라이언트의 로그 수집과
                                    정제, 분석 과정 전반에 대한 방향 제시
                                </li>
                            </ul>
                            <h3>자격요건</h3>
                            <ul>
                                <li>
                                    Spark, MapReduce, R, Zeppelin 등을 이용한
                                    분석 경험
                                </li>
                                <li>
                                    모바일/웹 서비스 전반의 구동방식에 대한 이해
                                </li>
                            </ul>
                            <h3>우대사항</h3>
                            <ul>
                                <li>대용량 데이터를 처리한 경험이 있으신 분</li>
                                <li>
                                    수학적 감각 혹은 통계적 지식 기반이 있으신
                                    분
                                </li>
                                <li>
                                    NLP, Machine Learning 쪽 경험이 있으신 분
                                </li>
                                <li>
                                    비지니스적인 관점과 개발적인 관점을 잘
                                    조화시키실 수 있으신 분
                                </li>
                                <li>AWS 사용 경험</li>
                            </ul>
                            <h3>지원방법</h3>
                            <p>
                                '지원하기'버튼을 눌러서 이력서, 자유로운 형식의
                                자기소개서(PDF), Github ID(필수 아님)을
                                보내주세요.
                            </p>
                            <div class="apply">
                                <a href="">지원하기</a>
                                <p>
                                    이름, 나이 연락처, 학력 사항 지원분야는 꼭
                                    적어 주세요. 자기 소개서는 자기 자신을 가장
                                    잘 드러낼 수 있는 방법을 택해 주세요. "저는
                                    엄격한 아버지와 자상한 어머니 밑에서
                                    자라난~"으로 시작하는 형식적인 자기소개는
                                    정중히 사양합니다. 문서양식은 PDF만
                                    받습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: "#Recruit",
    data: {
        type: [1, 2, 3]
    },
    methods: {
        clickEvent(e) {
            alert(e);
        }
    }
};
</script>
