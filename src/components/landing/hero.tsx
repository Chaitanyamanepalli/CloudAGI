import { motion } from 'motion/react';

export function Hero() {
    return (
        // biome-ignore lint/correctness/useUniqueElementIds: Landing page sections need static IDs for navigation
        <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-black px-6 pt-20 text-center transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 backdrop-blur-sm mb-8">
                        The Future of Digital Innovation
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8"
                >
                    We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Intelligent</span> <br />
                    Cloud Solutions
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12"
                >
                    Transform your business with cutting-edge AI integration, scalable cloud architecture, and premium software development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button type="button" className="h-12 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                        Start Project
                    </button>
                    <button type="button" className="h-12 px-8 rounded-full border border-zinc-200 dark:border-white/20 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm">
                        View Work
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
