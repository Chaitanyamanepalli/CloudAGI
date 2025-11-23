import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export function Newsletter() {
    return (
        <section className="py-24 px-6 bg-zinc-900 dark:bg-zinc-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm mb-6">
                        Stay Ahead of the Curve
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Join the Inner Circle
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Get the latest insights on AI agents, RAG, and LLMs delivered straight to your inbox. Join a community of high-leverage AI builders.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full h-12 pl-12 pr-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-12 px-8 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 group"
                    >
                        Subscribe
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.form>

                <p className="mt-6 text-sm text-zinc-500">
                    No spam. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
