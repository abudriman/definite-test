import axios, { AxiosRequestConfig } from 'axios'

interface NetworkHelper {
    endpoint: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE'
    data?: any,
    signal?: AbortSignal,
    token?: string,
    withCredential?: boolean,
    timeout?: number
}

export const networkHelper = ({
  endpoint, method, data, signal, token, withCredential, timeout
}: NetworkHelper) => {
  const config: AxiosRequestConfig = {
    // baseURL: 'https://mitsubishi.trinix.id/api/frontend', //kena CORS WKAWKWAKAWKAWAWKAWKAWKAWKAWKAWK
    baseURL: 'http://localhost:3002',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    signal,
    ...(timeout && { timeout }),
    ...(withCredential && { withCredentials: withCredential })
  }

  switch (method) {
    case 'POST':
      return axios.post(
        `${endpoint}`,
        data,
        config
      )
    case 'GET':
      return axios.get(
        `${endpoint}${data ? `?${new URLSearchParams(data).toString()}` : ''}`,
        config
      )
    case 'PATCH':
      return axios.patch(
        `${endpoint}`,
        data,
        config
      )
    default:
      // delete
      return axios.delete(
        `${endpoint}`,
        config
      )
  }
}
