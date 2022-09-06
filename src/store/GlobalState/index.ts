import { StateCreator } from 'zustand'
import { StoreState } from '..'

export interface GlobalStateModel {
  showSidebar: boolean;
  toggleSidebar: () => void;
  // showMobileSidebar: boolean;
  // toggleMobileSidebar: (isShow: boolean) => void;
  // currentPage: string;
  // setCurrentPage: (page: string) => void;
  // paginationPageSize: number;
  // setPaginationPageSize: (pageSize: number) => void;
}
export const createGlobalStateSlice: StateCreator<StoreState,
    [['zustand/devtools', unknown], ['zustand/persist', unknown]],
  [],
  GlobalStateModel> = (set) => ({
    showSidebar: true,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
    // showMobileSidebar: false,
    // toggleMobileSidebar: (isShow: boolean) => set((state) => ({ showMobileSidebar: isShow })),
    // currentPage: 'Dashboard',
    // setCurrentPage: (page: string) => set((state) => ({ currentPage: page })),
    // paginationPageSize: 20,
    // setPaginationPageSize: (pageSize: number) => set((state) => ({ paginationPageSize: pageSize })),
  })
