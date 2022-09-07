import { StateCreator } from 'zustand'
import { GlobalStateModel, StoreState } from '../../interfaces'


export const createGlobalStateSlice: StateCreator<StoreState,
    [['zustand/devtools', unknown], ['zustand/persist', unknown]],
  [],
  GlobalStateModel> = (set) => ({
    showSidebar: true,
    toggleSidebar: () => set((state) => ({ showSidebar: state.showSidebar })),
  })
