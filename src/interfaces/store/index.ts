export interface GlobalStateModel {
    showSidebar: boolean;
    toggleSidebar: () => void;
  }

export interface GeolocationModel {
    position: GeolocationPosition | undefined;
    setPosition: (positionArg: GeolocationPosition | undefined) => void;
}

export type StoreState = GlobalStateModel & GeolocationModel