<template>
    <div class="Menu">
        <ul>
            <li class="title">Product</li>
            <li
                class="teams active"
                name="server"
                @click="
                    e => {
                        eventHandler(e);
                        selectMenu(1);
                    }
                "
            >
                Server
            </li>
            <li
                class="teams"
                @click="
                    e => {
                        eventHandler(e);
                        selectMenu(2);
                    }
                "
            >
                iOS
            </li>
            <li
                class="teams"
                @click="
                    e => {
                        eventHandler(e);
                        selectMenu(3);
                    }
                "
            >
                Android
            </li>
        </ul>
        <ul>
            <li class="title">Data Analysis & Machine Learning</li>
            <li
                class="teams"
                @click="
                    e => {
                        eventHandler(e);
                        selectMenu(4);
                    }
                "
            >
                Data Scientist
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isSelected: "1",
            color: ""
        };
    },
    methods: {
        selectMenu(idx) {
            this.isSelected = idx;
            this.$emit("changeSelected", this.isSelected);
        },
        eventHandler(e) {
            const active = document.querySelectorAll(".active");
            active.forEach(el => {
                el.classList.remove("active");
            });
            e.target.classList.add("active");
        }
    }
};
</script>
