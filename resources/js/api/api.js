import axios from 'axios'
import config from '../config'
import applyUrlTemplate from './applyUrlTemplate'
import applyDefaultParams from './applyDefaultParams'
import { applyCacheResuest, applyCacheResponse } from './cache'

import normalizeAxiosError, {
    SERVER_ERROR,
    TIMEOUT_ERROR,
    NETWORK_ERROR,
    CLIENT_ERROR,
    UNAUTH_ERROR
} from './normalizeAxiosError'

const API_TIMEOUT = 30000 // 30s

const api = axios.create({
    baseURL: getBaseUrl(),
    timeout: API_TIMEOUT,
    withCredentials: false,
})
function getBaseUrl () {
    return config.apiBaseUrl
}

api.interceptors.request.use(applyCacheResuest)
api.interceptors.request.use(applyUrlTemplate)
api.interceptors.request.use(applyDefaultParams)
api.interceptors.response.use(applyCacheResponse)
api.interceptors.response.use(null, normalizeAxiosError)
api.interceptors.response.use(null, function (err) {
    if (err.code === TIMEOUT_ERROR || err.code === NETWORK_ERROR) {
    }
    if (err.code === UNAUTH_ERROR) {
    }
    if (err.code === SERVER_ERROR) {
    }
    if (err.code === CLIENT_ERROR) {
    }
    return Promise.reject(err)
})

export default api
