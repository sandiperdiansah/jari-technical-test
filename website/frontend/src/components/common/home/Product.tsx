'use client';

import For from '@/components/shared/For';
import Hgroup from '@/components/shared/Hgroup';
import { PRODUCTS } from '@/constants/data';
import { motion } from 'motion/react';
import Image from 'next/image';

const Product = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="products"
        >
            <Hgroup
                label="Produk Kami"
                title="Nikmati Kopi dengan Kualitas Terbaik"
                description="Kami menghadirkan berbagai pilihan kopi dengan karakter dan cita rasa khas dari berbagai daerah. Temukan kopi favorit Anda."
            />

            <ul className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                <For each={PRODUCTS}>
                    {(product, i) => (
                        <motion.li
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeOut',
                                delay: i * 0.1,
                            }}
                            className="flex flex-col rounded-md bg-white shadow-sm transition hover:scale-105 hover:shadow-xl dark:bg-gray-800"
                        >
                            <div className="relative h-56 w-full overflow-hidden rounded-t-md">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    priority
                                    sizes="224px"
                                    className="object-cover object-center"
                                />
                            </div>

                            <div className="space-y-3 p-6">
                                <h4 className="text-lg font-medium">{product.title}</h4>
                                <p className="text-theme leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </motion.li>
                    )}
                </For>
            </ul>
        </section>
    );
};

export default Product;
