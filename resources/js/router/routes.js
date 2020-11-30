import { asyncComponent } from "./utils";
import store from "../store";

import DefaultHeader from "@/js/components/headers/DefaultHeader";
import { defaults } from "lodash";

function getDefaultHeader(title) {
    return {
        components: {
            DefaultHeader
        },
        render(createElement) {
            return createElement("DefaultHeader", {
                props: {
                    title
                }
            });
        }
    };
}

export default [
    {
        path: "/",
        components: {
            default: asyncComponent("Index")
        },
        meta: {
            needAuth: true
        },
        children: [
            {
                path: "",
                name: "HomeMain",
                components: {
                    default: asyncComponent("main/Index"),
                    header: getDefaultHeader("HomeMain")
                }
            },
            {
                path: `test`,
                name: "Test",
                components: {
                    default: asyncComponent(`main/Test`),
                    header: getDefaultHeader("Test")
                },
                meta: {
                    action: true
                }
            },
            {
                path: "companyInfo",
                name: "CompanyInfo",
                components: {
                    default: asyncComponent("companyInfo/CompanyInfo"),
                    header: getDefaultHeader("CompanyInfo")
                }
            },
            {
                path: `service`,
                name: "Service",
                components: {
                    default: asyncComponent(`service/Service`)
                },
                meta: {
                    action: true
                }
            }
        ]
    }
];
