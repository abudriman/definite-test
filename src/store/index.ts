import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { StoreState } from '../interfaces'
import {createGlobalStateSlice } from './GlobalState'
import { createGeolocationSlice } from './LocationState'

// union for each slice


export const useStore = create<StoreState>()(
  devtools(
    persist(
      (...a) => ({
        ...createGlobalStateSlice(...a),
        ...createGeolocationSlice(...a),
      }),
      {
        name: 'definite-test-store',
      }
    )
  )
)
