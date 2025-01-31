import { create } from 'zustand';

interface IHamburgerStore {
  isHamburgerMenuOpen: boolean;
  toggleHamburgerMenu: () => void;
}

export const useHamburgerStore = create<IHamburgerStore>((set) => ({
  isHamburgerMenuOpen: false,
  toggleHamburgerMenu: () =>
    set((state) => ({
      isHamburgerMenuOpen: !state.isHamburgerMenuOpen,
    })),
}));
