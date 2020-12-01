<template>
    <footer class="Footer">
        <div class="wrapper">
            <span>ZziEut Co.</span>
            <address>
                <ul>
                    <li v-for="data in footerData" :key="data.tile">
                        {{ data.desc }}
                    </li>
                </ul>
            </address>
            <p class="copyright">&copy; Copyright 2020 찌읏</p>
            <ul class="download">
                <li>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.zzieut.meu&hl=ko"
                    >
                        <img src="./playStore_w.png" alt="playstore" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://apps.apple.com/kr/app/%EC%B0%9C-%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B7%B8%EA%B2%83/id1451798919"
                    >
                        <img src="./appStore_w.png" alt="appstore" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
    data: () => ({
        footerData: [
            {
                title: "address",
                desc: "서울시 성북구 동선동 4가 137 지안빌딩 4층"
            },
            {
                title: "tel",
                desc: "070-4905-2942"
            },
            {
                title: "email",
                desc: "kkotkkio@zzieut.com"
            }
        ]
    })
};
</script>
