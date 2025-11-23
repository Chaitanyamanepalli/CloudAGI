import { motion } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Blog', href: '#blog' },
        { name: 'About', href: '#contact' }, // Mapping About to Contact/Footer for now or create a section
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-md transition-colors duration-300"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
                        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                            CloudAGI
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>

                        <button className="rounded-full bg-black dark:bg-white px-5 py-2 text-sm font-semibold text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-colors"
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <button
                            className="text-zinc-900 dark:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-black"
                >
                    <div className="flex flex-col space-y-4 p-6">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="w-full rounded-full bg-black dark:bg-white py-3 text-sm font-semibold text-white dark:text-black">
                            Get Started
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
