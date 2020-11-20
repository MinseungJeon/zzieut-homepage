<template>
    <div class="mainBanner">
        <!-- <ul>
            <li
                v-for="img in imgList"
                :key="img.id"
                :style="`transform: translateX(${sliderTranslate})`"
            > -->
        <img :src="`${imgList[currentIndex].imgSrc}`" alt="" />
        <!-- </li>
        </ul> -->
        <p>내가 원하는 그곳을 <span>찜</span>하다.</p>
    </div>
</template>
<script>
export default {
    name: "MainBanner",
    data: () => ({
        currentIndex: 0,
        imgList: [
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
        ]
    }),
    methods: {
        startRotation() {
            setInterval(() => {
                if (this.currentIndex === 3) {
                    this.currentIndex = 0;
                }
                this.currentIndex = this.currentIndex + 1;
            }, 3000);
        }
    }
};
</script>
