import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';

const posts = [
    {
        title: "Context-Aware AI Coworker",
        description: "Exploring xAI Grok 4.1 Fast and the Agent Tools API for building smarter, context-aware AI assistants.",
        date: "Nov 22, 2025",
        category: "AI Agents",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Google's Gemini 3 and Agentic AI IDE",
        description: "A deep dive into Manus Browser Operator and how Gemini Agent executes tasks autonomously.",
        date: "Nov 20, 2025",
        category: "LLMs",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Open-Source Full-stack Agentic RAG",
        description: "Building with Google Code Wiki for up-to-date code wikis and leveraging Grok 4.1 by xAI.",
        date: "Nov 18, 2025",
        category: "RAG",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Open Source Human-like Memory",
        description: "Implementing Structured RAG to fix blindspots and exploring the capabilities of OpenAI GPT 5.1.",
        date: "Nov 15, 2025",
        category: "Research",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Google ADK Visual Agent Builder",
        description: "How to run 100 Large Models on a single GPU and integrate with Replit AI for seamless development.",
        date: "Nov 12, 2025",
        category: "Development",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Vision RAG - No OCR, No Database",
        description: "NotebookLM gets 8x context window increase. Exploring LangChain DeepAgents CLI for vision tasks.",
        date: "Nov 10, 2025",
        category: "Vision AI",
        image: "https://images.unsplash.com/photo-1535378437327-b71494669e9d?q=80&w=1000&auto=format&fit=crop"
    }
];

export function Blog() {
    return (
        <section id="blog" className="py-24 px-6 bg-zinc-50 dark:bg-black transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4"
                        >
                            Latest Insights
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl"
                        >
                            Deep dives into AI agents, RAG architectures, and the future of software development.
                        </motion.p>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 text-zinc-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        View all articles
                        <ArrowRight className="h-4 w-4" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[16/10]">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-black/80 text-zinc-900 dark:text-white rounded-full backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 flex-grow">
                                {post.description}
                            </p>

                            <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform">
                                Read Article
                                <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        View all articles
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
