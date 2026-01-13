"use client"
import { motion } from 'motion/react'
interface SectionProps {
    title: string
    content: string | string[]
    index: number
}

export const Section: React.FC<SectionProps> = ({ title, content, index }) => {
    return (
        <motion.section
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="relative"
        >
            <div className="group relative bg-background landing p-8 rounded-2xl border border-border  shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="absolute top-8 left-0 w-1 h-8 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-r-full" />

                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="text-primary font-mono text-sm opacity-50">{String(index + 1).padStart(2, '0')}</span>
                    {title}
                </h2>
                {Array.isArray(content) ? (
                    <div className="space-y-4">
                        {content.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className="text-lg text-foreground leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                ) : (
                    <p className="text-lg text-foreground leading-relaxed">
                        {content}
                    </p>
                )}
            </div>
        </motion.section>
    )
}