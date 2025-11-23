import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/landing/navbar'
import { Hero } from '../components/landing/hero'
import { Services } from '../components/landing/services'
import { Process } from '../components/landing/process'
import { Blog } from '../components/landing/blog'
import { Newsletter } from '../components/landing/newsletter'
import { Footer } from '../components/landing/footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
