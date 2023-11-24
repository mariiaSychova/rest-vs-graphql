import axios from 'axios'
import { apiUrl } from './constants'

const endpointUrl = `${apiUrl}/graphql/data`

export const graphqlAPI = {
    async get() {
        axios.get(endpointUrl)
    },
}