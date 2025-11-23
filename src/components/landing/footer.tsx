import { Link } from '@tanstack/react-router';

export function Footer() {
    return (
        // biome-ignore lint/correctness/useUniqueElementIds: Landing page sections need static IDs
        <footer id="contact" className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-white/10 pt-16 pb-8 px-6 transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
                            <span className="text-xl font-bold text-zinc-900 dark:text-white">CloudAGI</span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-sm">
                            Empowering businesses with next-generation AI and cloud solutions. Building the future, today.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 dark:text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About', href: '#contact' },
                                { name: 'Careers', href: '/' },
                                { name: 'Blog', href: '#blog' },
                                { name: 'Contact', href: '#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 dark:text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} CloudAGI. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Social icons would go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
