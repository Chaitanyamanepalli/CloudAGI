import { motion } from 'motion/react';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We dive deep into your business goals and technical requirements to build a solid foundation.',
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'Our experts design a comprehensive roadmap and architecture tailored to your specific needs.',
    },
    {
        number: '03',
        title: 'Development',
        description: 'We build your solution using agile methodologies, ensuring transparency and rapid delivery.',
    },
    {
        number: '04',
        title: 'Launch',
        description: 'We deploy your solution with rigorous testing and provide ongoing support for optimal performance.',
    },
];

export function Process() {
    return (
        // biome-ignore lint/correctness/useUniqueElementIds: Landing page sections need static IDs
        <section id="process" className="bg-white dark:bg-zinc-950 py-24 px-6 transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
                    >
                        How We Work
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="text-6xl font-bold text-zinc-200 dark:text-white/5 mb-4 select-none transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {step.description}
                            </p>
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 right-0 w-full h-[1px] bg-gradient-to-r from-zinc-200 to-transparent dark:from-white/10 translate-x-1/2 -z-10" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
