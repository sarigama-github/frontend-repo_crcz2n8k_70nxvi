import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-gray-700 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-rose-400" />
              Talk to the leading AI models — together
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
              One chat. Every model.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Switch models mid-conversation, compare answers side‑by‑side, and build a personal prompt library. Save, search, and share the best AI responses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-gray-900 hover:bg-black transition shadow">
                Try it free
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition">
                See features
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">No credit card needed • Export your data anytime</div>
          </div>
          <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}