<template>
    <form class="loginForm">
        <svg id="figure" viewBox="0 0 120 120">
            <path
                d="M0,150 C0,65 120,65 120,150"
                fill="
                #FAF4E8"
                stroke="black"
                stroke-width="2"
            />
            <circle
                cx="60"
                cy="60"
                r="40"
                fill="#FAF4E8"
                stroke="#000"
                stroke-width="2"
            />
            <g class="eyes">
                <circle :cx="leftEye.x" :cy="leftEye.y" r="5" fill="#000" />
                <circle :cx="rightEye.x" :cy="rightEye.y" r="5" fill="#000" />
            </g>
        </svg>
        <input
            v-model="email"
            type="text"
            placeholder="email"
            @input="adjustLocation"
        />
        <input type="password" placeholder="Password" @click="checkClicked" />
        <button>로그인</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            leftEye: { x: 44, y: 55 },
            rightEye: { x: 76, y: 55 },
            isClicked: false
        };
    },
    methods: {
        adjustLocation() {
            const { length } = this.email;
            // if (length === 0) {
            //     this.leftEye.y = 55;
            //     this.leftEye.x = 44;
            //     this.rightEye.y = 55;
            //     this.rightEye.x = 76;
            // }
            if (0 < length < 12) {
                this.leftEye.y = 63 + this.email.length;
                this.leftEye.x = 40 + this.email.length / 2;
                this.rightEye.y = 63 + this.email.length;
                this.rightEye.x = 72 + this.email.length / 2;
            }
            if (length > 12) {
                this.leftEye.y = 63 + this.email.length / 2;
                this.leftEye.x = 40 + this.email.length;
                this.rightEye.y = 63 + this.email.length / 2;
                this.rightEye.x = 72 + this.email.length;
            }
        },
        checkClicked() {
            this.isClicked = true;
            this.rightEye.x = 76;
            this.leftEye.x = 76;
        }
    }
};
</script>
