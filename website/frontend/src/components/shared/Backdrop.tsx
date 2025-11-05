'use client';

import { BackdropProps } from '@/components/shared/types';
import { useAppStore } from '@/hooks/useAppStore';
import clsx from 'clsx';
import { useShallow } from 'zustand/shallow';

const Backdrop = ({ ...props }: BackdropProps) => {
    const [isOpenBackdrop, closeBackdrop] = useAppStore(
        useShallow((state) => [state.isOpenBackdrop, state.closeBackdrop]),
    );

    if (!isOpenBackdrop) {
        return null;
    }

    return (
        <div
            className={clsx(
                'bg-glass fixed top-0 right-0 bottom-0 left-0 z-40 origin-bottom-left transition',
                isOpenBackdrop
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0',
            )}
            onClick={closeBackdrop}
            aria-label="Backdrop"
            {...props}
        ></div>
    );
};

export default Backdrop;
