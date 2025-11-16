import { Menu, MessageSquare, Library, Save, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-rose-400" />
          <span className="font-semibold text-gray-900">OmniChat AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#how" className="hover:text-gray-900 transition">How it works</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-block px-3 py-2 text-sm text-gray-700 hover:text-gray-900">Sign in</a>
          <a href="#cta" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm shadow hover:shadow-md hover:-translate-y-0.5 transition">
            <Sparkles className="h-4 w-4" /> Get started
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-black/5" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}