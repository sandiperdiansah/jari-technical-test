"use client";

import ContactForm from "@/components/common/home/ContactForm";
import Hgroup from "@/components/shared/Hgroup";
import { motion } from "framer-motion";

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
                    ease: "easeOut",
                    delay: 0.3,
                }}
            >
                <ContactForm />
            </motion.div>
        </section>
    );
};

export default Contact;
