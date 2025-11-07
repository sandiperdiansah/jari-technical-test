"use client";

import NavbarUser from "@/components/common/navbar/NavbarUser";
import For from "@/components/shared/For";
import { NAVIGATIONS } from "@/constants/data";
import { useAppStore } from "@/hooks/useAppStore";
import clsx from "clsx";
import Link from "next/link";
import { useShallow } from "zustand/shallow";

const NavbarLink = () => {
    const [isOpenNavigation, closeNavigation] = useAppStore(
        useShallow((state) => [state.isOpenNavigation, state.closeNavigation]),
    );

    return (
        <nav
            className={clsx(
                "absolute top-full right-0 left-0 z-50 inline-flex w-full flex-col gap-8 bg-white p-6 transition-all duration-300 md:static md:h-auto md:translate-y-0 md:flex-row md:gap-8 md:bg-transparent md:p-0 lg:w-auto dark:bg-gray-900 md:dark:bg-transparent",
                !isOpenNavigation ? "-translate-y-[200%]" : "translate-y-0",
            )}
        >
            <For each={NAVIGATIONS}>
                {(nav) => (
                    <Link
                        href={nav.href}
                        className="transition-transform hover:scale-105"
                        onClick={closeNavigation}
                    >
                        {nav.label}
                    </Link>
                )}
            </For>

            <NavbarUser className="w-2/3 md:hidden" />
        </nav>
    );
};

export default NavbarLink;
