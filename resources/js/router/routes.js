import { asyncComponent } from "./utils";
import store from "../store";

import DefaultHeader from "@/js/components/headers/DefaultHeader";
import DefaultFooter from "@/js/components/footer/Footer";

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

function getDefaultFooter() {
    return {
        components: {
            DefaultFooter
        },
        render(createElement) {
            return createElement("DefaultFooter");
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
                    header: getDefaultHeader("HomeMain"),
                    footer: getDefaultFooter()
                }
            },
            {
                path: `test`,
                name: "Test",
                components: {
                    default: asyncComponent(`main/Test`),
                    header: getDefaultHeader("Test"),
                    footer: getDefaultFooter()
                },
                meta: {
                    action: true
                }
            }
        ]
    }
];
