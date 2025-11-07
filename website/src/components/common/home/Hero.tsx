"use client";

import { motion } from "motion/react";

import Dot from "@/components/shared/Dot";
import For from "@/components/shared/For";
import Cofee from "@/components/shared/icons/Cofee";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="r-px grid min-h-screen w-full grid-cols-1 gap-8 pt-8 md:gap-0 lg:-mt-10 lg:grid-cols-[1fr_36%] lg:gap-8 lg:pt-0">
            <div className="flex flex-col items-start justify-center gap-6">
                <motion.hgroup
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.3,
                    }}
                    className="space-y-4"
                >
                    <h1 className="max-w-2xl text-5xl leading-tight font-bold">
                        Temukan Cita Rasa Kopi Terbaik untuk Hari Anda
                    </h1>

                    <p className="text-theme max-w-xl leading-relaxed">
                        Kami menghadirkan kopi pilihan berkualitas dari berbagai daerah
                        nusantara. Nikmati aroma, rasa, dan pengalaman menyeduh kopi
                        dengan karakter yang khas.
                    </p>
                </motion.hgroup>

                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                    className="flex w-full max-w-[330px] items-center justify-start gap-2"
                >
                    <Link
                        href="#products"
                        className="btn btn-primary px-8 py-4"
                        aria-label="signin"
                    >
                        Lihat Produk
                    </Link>
                    <Link
                        href="#contact"
                        className="btn btn-outline px-8 py-4"
                        aria-label="try for free"
                    >
                        Hubungi Kami
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.7,
                    }}
                    className="mt-10 space-y-6"
                >
                    <div className="flex items-center justify-start gap-2">
                        <span className="text-theme inline-block text-sm">
                            Trusted by the best
                        </span>
                        <span className="inline-block h-[1.2px] w-24 bg-gray-600"></span>
                    </div>

                    <ul className="flex flex-wrap items-center justify-start gap-4">
                        <For each={[...Array(3)]}>
                            {() => (
                                <li className="inline-flex items-center justify-center gap-2">
                                    <Cofee className="size-8 text-amber-600" />
                                    <span className="inline-block font-semibold">
                                        Cofee Coding
                                    </span>
                                </li>
                            )}
                        </For>
                    </ul>
                </motion.div>
            </div>

            <div className="relative mt-6 md:pt-14">
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                    className="relative h-[500px] w-full overflow-hidden rounded-sm rounded-tl-[8rem] shadow-xl transition-transform hover:scale-105"
                >
                    <Image
                        src="/cofee.webp"
                        alt="banner"
                        fill
                        sizes="(max-width: 1024px) 100vw, 36vw"
                        className="object-cover object-center"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute -bottom-6 left-0 -z-10 flex w-24 flex-wrap items-center justify-center gap-4 md:bottom-6 lg:bottom-0 lg:-left-10 xl:-bottom-14"
                    aria-hidden="true"
                >
                    <Dot count={25} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
