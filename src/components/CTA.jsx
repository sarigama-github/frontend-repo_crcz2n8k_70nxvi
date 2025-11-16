export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-72 w-72 bg-gradient-to-tr from-purple-500 via-blue-500 to-rose-400 rounded-full blur-3xl opacity-30" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center relative">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Start chatting with every model today</h3>
              <p className="mt-3 text-gray-300">Create your prompt library, compare replies, and save the best responses — all in one place.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition">Create account</a>
              <a href="/test" className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">Check backend</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}