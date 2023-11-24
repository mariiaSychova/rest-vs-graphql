import axios from 'axios'
import { apiUrl } from './constants'

const endpointUrl = `${apiUrl}/rest/data`

export const restAPI = {
    async get() {
        axios.get(endpointUrl)
    },
}