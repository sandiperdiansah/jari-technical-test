'use client';

import TextAlignJustify from '@/components/shared/icons/TextAlignJustify';
import X from '@/components/shared/icons/X';
import { useAppStore } from '@/hooks/useAppStore';
import { useShallow } from 'zustand/shallow';

const NavbarToggleButton = () => {
    const [isOpenNavigation, toggleNavigation] = useAppStore(
        useShallow((state) => [state.isOpenNavigation, state.toggleNavigation]),
    );

    return (
        <button
            type="button"
            className="cursor-pointer transition"
            aria-label="toggle navigation"
            onClick={toggleNavigation}
        >
            {!isOpenNavigation ? <TextAlignJustify /> : <X />}
        </button>
    );
};

export default NavbarToggleButton;
