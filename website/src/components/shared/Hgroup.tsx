"use client";

import { HgroupProps } from "@/components/shared/types";
import { motion } from "motion/react";

const Hgroup = ({ label, title, description, ...props }: HgroupProps) => {
    return (
        <hgroup
            {...props}
            className="space-y-2"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-1 text-xl font-medium text-amber-600"
            >
                {label}
            </motion.h2>

            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl text-4xl leading-tight font-bold"
            >
                {title}
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-theme mt-4 max-w-xl leading-relaxed"
            >
                {description}
            </motion.p>
        </hgroup>
    );
};

export default Hgroup;
