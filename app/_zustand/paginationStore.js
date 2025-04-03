import { create } from "zustand";

export const usePaginationStore = create((set) => ({
    page: 1,
    incrementPage: () => {
        set((state) => ({ page: state.page + 1 }));
    },
    decrementPage: () => {
        set((state) => ({ page: state.page > 1 ? state.page - 1 : 1 }));
    },
}));
