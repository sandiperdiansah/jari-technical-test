'use client';

import For from '@/components/shared/For';
import Hgroup from '@/components/shared/Hgroup';
import { FAQS } from '@/constants/data';
import { motion } from 'motion/react';

const Faq = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="faq"
        >
            <Hgroup
                label="FAQ"
                title="Pertanyaan yang Sering Diajukan"
                description="Beberapa jawaban yang mungkin membantu Anda sebelum melakukan pemesanan."
            />

            <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
                <For each={FAQS}>
                    {(faq, i) => (
                        <motion.details
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeOut',
                                delay: i * 0.1,
                            }}
                            className="group border-theme border-b pb-3"
                        >
                            <summary className="ms-4 cursor-pointer list-outside font-medium">
                                {faq.question}
                            </summary>
                            <p className="text-theme p-4">{faq.answer}</p>
                        </motion.details>
                    )}
                </For>
            </div>
        </section>
    );
};

export default Faq;
