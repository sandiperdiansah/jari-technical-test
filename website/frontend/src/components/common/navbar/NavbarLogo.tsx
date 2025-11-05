'use client';

import Cofee from '@/components/shared/icons/Cofee';
import { useAppStore } from '@/hooks/useAppStore';
import Link from 'next/link';

const NavbarLogo = () => {
    const closeNavigation = useAppStore((state) => state.closeNavigation);

    return (
        <Link
            href="/"
            className="group inline-flex items-center justify-center gap-1"
            onClick={closeNavigation}
        >
            <Cofee
                className="size-8 animate-bounce text-amber-600"
               
            />
            <span className="inline-block text-xl font-medium transition-transform group-hover:scale-105">
                Cofee.
            </span>
        </Link>
    );
};

export default NavbarLogo;
