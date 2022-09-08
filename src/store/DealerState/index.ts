import { StateCreator } from 'zustand'
import { Dealer, DealerModel, PaginationResponse, StoreState } from '../../interfaces'
import { networkHelper } from '../../utils'


export const createDealerSlice: StateCreator<StoreState,
    [['zustand/devtools', unknown], ['zustand/persist', unknown]],
  [],
  DealerModel> = (set, get) => ({
    nextPage:null,
    dealers: [],
    provinces: [],
    keyword: undefined,
    setDealers: (payload)=> set( (state) => ({dealers:payload})),
    getDealers: (latlong, keyword) => {

      if (!get().provinces.find(item => item.name === keyword) && keyword) {
        // not undefined & not inside provinces
        return
      }
      //unfiltered => latlong undefined, keyword undefined
      //geo => latlong value, keyword undefined
      //keyword => latlong undefined, keyword value
      console.log('getDealers', latlong, keyword)
      networkHelper({
        endpoint: '/search-dealers',
        method: 'GET',
        data: {
          ...(latlong && { latlong: latlong }),
          ...(keyword && { keyword: keyword }),
          page: 1,
          limit: 9
        },
        timeout: 10000
      }).then(res => {
        if (res.status === 200) {
          set((state) => ({
            dealers: res.data.data,
            nextPage: (res.data as PaginationResponse<Dealer>).next_page_url
          }))
        }
      })
    },
    setKeyword: (payload) => set((state) => ({ keyword: payload })),
    getProvince: () => {
      networkHelper({
        endpoint: '/get-provinces',
        method: 'GET',
        timeout: 10000
      }).then(res => {
        if (res.status === 200) {
          set((state) => ({provinces: res.data}))
        }
      })
    },
    getNextPage: () => {
      const nextUrl = get().nextPage
      if (!nextUrl) {
        return
      }
      networkHelper({
        endpoint: '/search-dealers'+nextUrl,
        method: 'GET',
        timeout: 10000
      }).then(res => {
        if (res.status === 200) {
          set((state) => ({
            dealers: [...state.dealers, ...(res.data.data as Dealer[])],
            nextPage: (res.data as PaginationResponse<Dealer>).next_page_url
          }))
        }
      })
    },
  })
