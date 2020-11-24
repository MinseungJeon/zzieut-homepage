<template>
    <li>
        <img :src="member.imgSrc" />
        <p>
            <span>{{ member.name }}</span> {{ member.position }}
        </p>
    </li>
</template>
<script>
export default {
    name: "MembersCard",
    props: ["member"]
};
</script>
