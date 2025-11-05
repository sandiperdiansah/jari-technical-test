import { create } from 'zustand';

type AppState = {
    isOpenNavigation: boolean;
    isOpenBackdrop: boolean;
    closeNavigation: () => void;
    toggleNavigation: () => void;
    closeBackdrop: () => void;
};

export const useAppStore = create<AppState>((set) => ({
    isOpenNavigation: false,
    isOpenBackdrop: false,

    toggleNavigation: () =>
        set((state) => ({
            ...state,
            isOpenNavigation: !state.isOpenNavigation,
            isOpenBackdrop: !state.isOpenBackdrop,
        })),

    closeNavigation: () =>
        set((state) => ({
            ...state,
            isOpenNavigation: false,
            isOpenBackdrop: false,
        })),

    closeBackdrop: () =>
        set({
            isOpenNavigation: false,
            isOpenBackdrop: false,
        }),
}));
