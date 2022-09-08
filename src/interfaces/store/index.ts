import { Dealer, Province } from '..'

export interface GlobalStateModel {
    showModal: boolean;
    selectedId: number;
    toggleModal: () => void;
    setSelectedId: (payload:number) => void;
  }

export interface GeolocationModel {
    position: GeolocationPosition | undefined;
    setPosition: (positionArg: GeolocationPosition | undefined) => void;
}

export interface DealerModel {
  nextPage:string|undefined|null
  dealers: Dealer[];
  provinces: Province[];
  keyword: string|undefined;
  setDealers: (payload: Dealer[]) => void;
  getDealers: (latlong?: string, keyword?: string) => void;
  setKeyword: (payload: string | undefined) => void;
  getProvince: () => void;
  getNextPage: () => void;
}

export type StoreState =
  GlobalStateModel &
  GeolocationModel &
  DealerModel