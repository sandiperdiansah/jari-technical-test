'use client';

import Hgroup from '@/components/shared/Hgroup';
import InputGroup from '@/components/shared/input/InputGroup';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section
            className="r-px r-py space-y-8"
            id="contact"
        >
            <Hgroup
                label="Hubungi Kami"
                title="Ingin Berkolaborasi atau Memesan Kopi?"
                description="Kami siap membantu Anda. Silakan hubungi kami untuk pemesanan, kemitraan, atau informasi lebih lanjut."
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.3,
                }}
            >
                <form className="mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-8">
                    <div className="space-y-4">
                        <InputGroup
                            label="Name"
                            name="name"
                            placeholder="Name"
                            autoComplete="on"
                        />

                        <InputGroup
                            label="Email"
                            name="email"
                            placeholder="Email address"
                            autoComplete="on"
                        />

                        <InputGroup
                            label="Phone"
                            name="phone"
                            placeholder="Phone number"
                            autoComplete="on"
                        />
                    </div>

                    <div className="space-y-3">
                        <label
                            htmlFor="message"
                            className="mb-0.5 block font-medium text-gray-600"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="input input-primary h-56 resize-none"
                            placeholder="Message"
                        ></textarea>

                        <div className="ms-auto max-w-3xs">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                aria-label="Send message"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
