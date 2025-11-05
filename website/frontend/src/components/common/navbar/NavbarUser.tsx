'use client';

import Avatar from '@/components/shared/Avatar';
import { useAppStore } from '@/hooks/useAppStore';
import clsx from 'clsx';
import Link from 'next/link';

const user = true;

const NavbarUser = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const closeNavigation = useAppStore((state) => state.closeNavigation);

    return (
        <div
            {...props}
            className={clsx('flex items-center justify-start', className)}
        >
            {user ? (
                <Link
                    href="#products"
                    className="btn btn-primary"
                    aria-label="to signin"
                    onClick={closeNavigation}
                >
                    Lihat Produk
                </Link>
            ) : (
                <div className="flex items-center justify-center gap-2">
                    <Avatar
                        src="/cofee.webp"
                        alt="avatar"
                        size="sm"
                    />
                    <span className="inline-block text-sm font-medium md:hidden">
                        John Doe
                    </span>
                </div>
            )}
        </div>
    );
};

export default NavbarUser;
