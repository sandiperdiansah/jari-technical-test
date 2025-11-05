import Dot from '@/components/shared/Dot';
import For from '@/components/shared/For';
import Cofee from '@/components/shared/icons/Cofee';
import { NAVIGATIONS } from '@/constants/data';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="r-px r-py bg-bg-gradient relative space-y-16 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="absolute top-4 right-4 z-10 flex w-10 flex-wrap items-center gap-2"
                    aria-hidden="true"
                >
                    <Dot count={28} />
                </div>

                <hgroup className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 transition-transform hover:scale-105"
                    >
                        <Cofee className="size-14 text-amber-600" />
                        <h4 className="text-3xl font-semibold">Cofee.</h4>
                    </Link>
                    <p className="leading-relaxed text-gray-300">
                        Kopi bukan sekadar minuman, tapi cerita tentang rasa, kehangatan,
                        dan pertemuan. Kami menghadirkan kopi terbaik untuk menemani
                        setiap momenmu.
                    </p>
                </hgroup>

                <div className="space-y-6">
                    <h4 className="text-xl font-medium">Quick Links</h4>
                    <nav
                        className="flex flex-col gap-3 text-gray-400"
                        aria-label="Footer navigation"
                    >
                        <For each={NAVIGATIONS}>
                            {(nav) => (
                                <Link
                                    href={nav.href}
                                    className="transition-colors hover:text-white hover:underline"
                                >
                                    {nav.label}
                                </Link>
                            )}
                        </For>
                    </nav>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xl font-medium">Contact Us</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>
                            <Link
                                href="mailto:hello@ema.com"
                                className="inline-flex items-center gap-2 transition-colors hover:underline"
                            >
                                <span className="inline-block">Email: </span>
                                <span className="inline-block">hallo@ema.com</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="mailto:hello@ema.com"
                                className="inline-flex items-center gap-2 transition-colors hover:underline"
                            >
                                <span className="inline-block">Phone: </span>
                                <span className="inline-block">+1 (123) 456-7890</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Ema. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
