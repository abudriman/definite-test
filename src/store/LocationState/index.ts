import { StateCreator } from 'zustand'
import { GeolocationModel, StoreState } from '../../interfaces'


export const createGeolocationSlice: StateCreator<StoreState,
    [['zustand/devtools', unknown], ['zustand/persist', unknown]],
  [],
  GeolocationModel> = (set) => ({
    position: undefined,
    setPosition: (positionArg:GeolocationPosition | undefined)=> set( (state) => ({position:positionArg})),
  })
