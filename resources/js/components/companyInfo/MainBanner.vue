<template>
    <div class="mainBanner">
        <div class="sliderContainer">
            <div
                v-for="(img, index) in imageList"
                :key="img.id"
                :style="{
                    backgroundImage: `url(${img.imgSrc})`,
                    zIndex: `${
                        index === currentIndex ? 3 : index === lastIndex ? 2 : 1
                    }`
                }"
                :class="{ active: index === currentIndex }"
            ></div>
        </div>
        <p>내가 원하는 그곳을 <span>찜</span>하다.</p>
        <ul>
            <li
                v-for="index in imageList.length"
                :key="index"
                :class="{ active: index === currentIndex + 1 }"
                @click="sliderHandler(index - 1)"
            ></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "MainBanner",
    data: () => {
        const imageList = [
            {
                id: 1,
                imgSrc:
                    "https://images.unsplash.com/photo-1580508158643-4bf9f8da03c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
                id: 2,
                imgSrc:
                    "https://images.unsplash.com/photo-1549921613-8db30562bad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 3,
                imgSrc:
                    "https://images.unsplash.com/photo-1516959512470-53955cd40f40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80"
            }
        ];

        return {
            currentIndex: 0,
            lastIndex: imageList.length - 1,
            imageList
        };
    },

    methods: {
        startRotation() {
            this.lastIndex = this.currentIndex;
            this.currentIndex = this.currentIndex + 1;
            if (this.currentIndex >= this.imageList.length) {
                this.currentIndex = 0;
            }
        },

        sliderHandler(idx) {
            console.log(idx);
            this.activeIndex = idx;
            if (idx === 0) {
                this.lastIndex = this.imageList.length - 1;
            }
            if (idx !== 0) {
                this.lastIndex = idx - 1;
            }

            console.log(this.imageList);
            console.log(this.activeIndex);
        }
    },

    mounted() {
        this.setInterval = setInterval(() => {
            this.startRotation();
        }, 3000);
    },

    beforeDestroy() {
        clearInterval(this.setInterval);
    }
};
</script>
