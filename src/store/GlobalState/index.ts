import { StateCreator } from 'zustand'
import { GlobalStateModel, StoreState } from '../../interfaces'


export const createGlobalStateSlice: StateCreator<StoreState,
    [['zustand/devtools', unknown], ['zustand/persist', unknown]],
  [],
  GlobalStateModel> = (set) => ({
    showModal: true,
    selectedId: -1,
    toggleModal: () => set((state) => ({ showModal: !state.showModal })),
    setSelectedId: (payload:number) => set((state) => ({ selectedId: payload })),

  })
