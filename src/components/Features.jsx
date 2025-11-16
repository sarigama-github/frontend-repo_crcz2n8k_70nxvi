import { Bot, SwitchCamera, Library, Save, Sparkles, Folder, MessageSquareDiff } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'All top models, one place',
    desc: 'Chat with OpenAI, Anthropic, Google, and more in a unified interface.'
  },
  {
    icon: SwitchCamera,
    title: 'Switch mid chat',
    desc: 'Swap models without losing context to compare answers instantly.'
  },
  {
    icon: Library,
    title: 'Prompt library',
    desc: 'Save proven prompts into folders and reuse them anywhere.'
  },
  {
    icon: Save,
    title: 'Save & export responses',
    desc: 'Bookmark the best outputs and export them to Markdown or JSON.'
  },
  {
    icon: MessageSquareDiff,
    title: 'Side‑by‑side compare',
    desc: 'View multiple model replies at once to choose the best.'
  },
  {
    icon: Sparkles,
    title: 'Smart suggestions',
    desc: 'Auto‑improvements for prompts and follow‑up questions.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">Built for deep AI work</h2>
          <p className="mt-4 text-gray-600">Everything you need to explore, compare, and organize AI results — without tab overload.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-rose-400 flex items-center justify-center text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}