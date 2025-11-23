import { motion } from 'motion/react';
import { Bot, Cloud, Code2, Database, Globe, Shield } from 'lucide-react';

const services = [
    {
        icon: Bot,
        title: 'AI Integration',
        description: 'Leverage the power of Large Language Models and custom AI solutions to automate and enhance your business processes.',
    },
    {
        icon: Cloud,
        title: 'Cloud Architecture',
        description: 'Scalable, secure, and cost-effective cloud infrastructure design and management on AWS, Azure, or GCP.',
    },
    {
        icon: Code2,
        title: 'Custom Development',
        description: 'Tailor-made software solutions built with modern technologies to meet your specific business requirements.',
    },
    {
        icon: Database,
        title: 'Data Engineering',
        description: 'Robust data pipelines and warehousing solutions to turn your raw data into actionable insights.',
    },
    {
        icon: Shield,
        title: 'Cybersecurity',
        description: 'Comprehensive security assessments and implementation to protect your digital assets and user data.',
    },
    {
        icon: Globe,
        title: 'Web3 Solutions',
        description: 'Blockchain development and decentralized application (dApp) creation for the next generation of the web.',
    },
    {
        icon: Bot, // Placeholder for more services if needed
        title: 'Consulting',
        description: 'Expert advice on digital transformation strategies to keep your business competitive.',
    },
];

export function Services() {
    return (
        // biome-ignore lint/correctness/useUniqueElementIds: Landing page sections need static IDs
        <section id="services" className="bg-zinc-50 dark:bg-black py-24 px-6 relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400 text-lg"
                    >
                        We deliver comprehensive digital solutions to help you stay ahead in a rapidly evolving technological landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 6).map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 shadow-sm dark:shadow-none transition-all"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
