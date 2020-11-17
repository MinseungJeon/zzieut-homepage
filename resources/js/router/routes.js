import { asyncComponent } from './utils'
import store from '../store'

import DefaultHeader from '@/js/components/headers/DefaultHeader'

function getDefaultHeader (title) {
    return {
        components: {
            DefaultHeader
        },
        render (createElement) {
            return createElement('DefaultHeader', {
                props: {
                    title
                }
            })
        }
    }
}

export default [
    {
        path: '/',
        components: {
            default:asyncComponent('Index')
        },
        meta: {
            needAuth: true
        },
        children: [
            {
                path: '',
                name: 'HomeMain',
                components:  {
                    default: asyncComponent('main/Index'),
                    header: getDefaultHeader('HomeMain')
                },
            },
            {
                path: `test`,
                name: 'Test',
                components: {
                    default: asyncComponent(`main/Test`),
                    header: getDefaultHeader('Test')
                },
                meta: {
                    action: true
                }
            },
        ]
    }
]