<template>
    <div class="registerWrapper">
        <ul class="tabs">
            <li @click="clickTab(1)">로그인</li>
            <li @click="clickTab(2)">회원가입</li>
        </ul>
        <div class="content">{{this.activeId === 1 && <Login />}}</div>
    </div>
</template>

<script>
import Login from "./components/Login";
import Signup from "./components/Signup";

export default {
    components: { Login, Signup },
    data() {
        return {
            activeId: 1
        };
    },
    methods: {
        clickTab(id) {
            this.activeId = id;
        }
    }
};
</script>
