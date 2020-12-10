<template>
    <div>
        <!-- <form class="loginForm">
            <input type="text" :placeholder="item" />
            <input type="text" placeholder="이름" />
            <input type="text" placeholder="이메일" />
            <input type="text" placeholder="휴대폰 번호" />
            <input type="password" placeholder="비밀번호" />
            <button>회원가입</button>
        </form> -->
        <form class="loginForm">
            <div v-for="(item, index) in inputs" :key="index">
                <input :type="item.type" :placeholder="item.place" />
            </div>
            <button>회원가입</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputs: [
                { place: "이름", type: "text" },
                { place: "이메일", type: "text" },
                { place: "휴대폰 번호", type: "text" },
                { place: "비밀번호", type: "password" }
            ]
        };
    }
};
</script>
