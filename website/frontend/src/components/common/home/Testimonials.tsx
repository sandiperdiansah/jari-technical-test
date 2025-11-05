'use client';

import Avatar from '@/components/shared/Avatar';
import For from '@/components/shared/For';
import Hgroup from '@/components/shared/Hgroup';
import ChevronLeft from '@/components/shared/icons/ChevronLeft';
import ChevronRight from '@/components/shared/icons/ChevronRight';
import { TESTIMONIALS } from '@/constants/data';
import { motion } from 'motion/react';

const Testimonials = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="testimonials"
        >
            <Hgroup
                label="Testimoni"
                title="Apa Kata Mereka tentang Kopi Kami"
                description="Beberapa ulasan jujur dari pelanggan dan penikmat kopi kami dari berbagai daerah."
            />

            <ul className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    <For each={TESTIMONIALS}>
                        {(testimonial, i) => (
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: 'easeOut',
                                    delay: i * 0.1,
                                }}
                                className="space-y-6 rounded-lg bg-white p-6 shadow-sm transition-all duration-150 hover:shadow-xl dark:bg-gray-800"
                            >
                                <figure className="border-theme flex items-center justify-between border-b pb-3">
                                    <figcaption className="space-y-3">
                                        <h4 className="font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <span className="text-theme block">
                                            {testimonial.role}
                                        </span>
                                    </figcaption>
                                    <Avatar
                                        src="/cofee.webp"
                                        alt="avatar"
                                    />
                                </figure>

                                <blockquote className="text-theme">
                                    {testimonial.message}
                                </blockquote>
                            </motion.li>
                        )}
                    </For>
                }
            </ul>

            <div className="flex items-center justify-end gap-3">
                <button
                    type="button"
                    className="border-theme flex cursor-pointer items-center justify-center rounded-full border p-1 transition hover:scale-105 hover:shadow-md"
                    aria-label="prev testimonials"
                >
                    <ChevronLeft />
                </button>
                <button
                    type="button"
                    className="border-theme flex cursor-pointer items-center justify-center rounded-full border p-1 transition hover:scale-105 hover:shadow-md"
                    aria-label="next testimonials"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
