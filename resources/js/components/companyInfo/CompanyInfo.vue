<template>
    <div class="CompanyInfo">
        <main-banner />
        <div class="vision">
            <h3>VISION</h3>
            <div class="contents">
                <div>
                    <p>
                        Let's help people
                        <span>Play &amp; Rest Better</span>
                    </p>
                </div>
                <ul>
                    <li>
                        <span>01</span>
                        <p>By making it convenient and accessible</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>
                            By providing Inspiring
                            <br />
                            content on how/where to play
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="brandMission">
            <h3>Brand mission</h3>
            <p>
                개개인 취향과 성향을 기반으로 나만을 위한 취향저격 콘텐츠를
                추천해주는<br />
                여가생활 필수 어플, <span class="point">찜</span>
            </p>
            <div class="wrapper">
                <ul>
                    <li v-for="mission in brandMission" :key="mission.id">
                        <span v-html="`${mission.head}`"></span>
                        <p>
                            {{ mission.description }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="companyProfile">
            <h3>COMPANY PROFILE</h3>
            <div class="wrapper">
                <table>
                    <tr
                        v-for="companyInfo in companyInfos"
                        :key="companyInfo.head"
                    >
                        <th>{{ companyInfo.head }}</th>
                        <td v-html="`${companyInfo.description}`"></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="history">
            <h3>History</h3>
            <div class="wrapper">
                <ul>
                    <li v-for="story in history" :key="story.year">
                        <span>{{ story.year }}</span>
                        <table>
                            <tr
                                v-for="list in story.historyList"
                                :key="list.month"
                            >
                                <td>{{ list.month }}</td>
                                <td>{{ list.description }}</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
        <div class="members">
            <h3>MEMBERS</h3>
            <div class="wrapper">
                <ul>
                    <li v-for="member in members" :key="member.name">
                        <p>
                            <span>{{ member.name }}</span> {{ member.position }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <h3>CONTACT US</h3>
            <div class="wrapper">
                <table>
                    <tr v-for="contact in contactInfo" :key="contact.head">
                        <th>{{ contact.head }}</th>
                        <td>
                            {{ contact.description }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { data } from "./CompanyInfoData";
import MainBanner from "./MainBanner";

export default {
    components: {
        "main-banner": MainBanner
    },
    methods: {},
    data: () => ({
        companyInfos: { ...data.companyProfile },
        members: { ...data.members },
        contactInfo: { ...data.contact },
        brandMission: { ...data.brandMission },
        history: { ...data.history }
    })
};
</script>
<style lang="scss" scoped></style>
