"use client";

import MaxWidth from "@/components/MaxWidth";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { privacySections } from "@/data/Privacy.data";


export default function PrivacyPolicyPageContext() {
    return (
        <div className="relative w-full  min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
            <main className="landing bg-background w-full pt-32 py-16 md:py-24 transition-colors duration-300 scroll-mt-32 relative overflow-hidden">
                <MaxWidth>
                    <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">
                        <Heading
                            badgeText="Loud Shark LLC dba Alpha Dezine"

                            align="center"
                        // containerClassName="lg:items-start lg:text-left"

                        >
                            Privacy <span className="text-primary">Policy</span>
                        </Heading>
                        {/* Header Section */}
                        <p className="text-base max-w-prose mx-auto mb-6 w-full text-foreground text-center">At Loud Shark LLC dba Alpha Dezine Ltd, we are committed to protecting the privacy of our customers and clients. This privacy policy outlines how we collect, use, and disclose the personal information of our users. We understand the importance of maintaining the privacy of your information and take great care in ensuring that your personal data is protected.</p>

                        {/* Sections */}
                        <div className="space-y-10">
                            {privacySections.map((section, index) => (
                                <motion.section
                                    key={section.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    className="relative"
                                >
                                    <div className="group relative bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                                        <div className="absolute top-8 left-0 w-1 h-8 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-r-full" />

                                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                            <span className="text-primary font-mono text-sm">0{index + 1}</span>
                                            {section.title}
                                        </h2>
                                        <p className="text-lg text-foreground leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                </motion.section>
                            ))}
                        </div>
                    </div>
                </MaxWidth>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-20 pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-40 -mt-20" />
                </div>
                <div className="absolute bottom-0 left-0 -z-10 opacity-10 dark:opacity-20 pointer-events-none">
                    <div className="w-[400px] h-[400px] bg-royal-400 rounded-full blur-[100px] -ml-20 -mb-20" />
                </div>
            </main>
        </div>
    );
}
