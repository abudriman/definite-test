import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { GlobalStateModel, createGlobalStateSlice } from './GlobalState'

// union for each slice
export type StoreState = GlobalStateModel 

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (...a) => ({
        ...createGlobalStateSlice(...a),
      }),
      {
        name: 'react-dashboard-store',
      }
    )
  )
)
