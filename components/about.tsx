"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                My coding journey began in late 2016, while I was pursuing my degree in <span className="font-medium">Mechanical Engineering</span>. What started as a hobby turned into a passionate pursuit during the lockdown period when I delved into solving code challenges on platforms like Hackerrank. This exploration led me to fall in love with <span className="font-medium">web development</span>.
            </p>

            <p>
                <span className="italic">Beyond coding</span>, I also write technical articles on dev.to and also find joy in playing chess, watching anime, and learning about the wonders of the universe :). Recently, I've been drawn to <span className="font-medium">blockchain development</span>, and I'm eager to transition into a <span className="font-medium">full-time web3 developer role</span> to further dive into this exciting field.
            </p>

        </motion.section>
    );
}
