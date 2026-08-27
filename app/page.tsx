'use client'

import { useState } from 'react'
import { ArrowRight, Check, Clipboard, Code2, Cpu, Globe2, Menu, Mic2, ShieldCheck, Sparkles, X, Zap } from 'lucide-react'
import Link from 'next/link';

const plans = [
  { name: 'Free Trial', hours: '30 Minutes Free', price: '$0', note: 'Try every feature with no commitment.' },
  { name: 'Starter', hours: '2 Hours', price: '$6', note: 'For prototypes and early launches.' },
  { name: 'Growth', hours: '5 Hours', price: '$14', note: 'For teams shipping voice products.', featured: true },
  { name: 'Pro', hours: '25 Hours', price: '$70', note: 'For production workloads at scale.' },
  { name: 'Enterprise', hours: '100 Hours', price: '$275', note: 'For high-volume teams and custom needs.' },
]

const request = `curl -X POST https://api.transvoice.ai/v1/translate \\\n  -H "Authorization: Bearer tv_live_..." \\\n  -H "Content-Type: audio/mpeg" \\\n  --data-binary @meeting.mp3`

export default function Page() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyRequest() {
    await navigator.clipboard.writeText(request)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0f172a]/70 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight"><span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#22c55e] to-[#3b82f6] text-slate-950"><Mic2 className="size-4" /></span>TransVoice AI</a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><a href="#features" className="hover:text-foreground">Features</a><a href="#docs" className="hover:text-foreground">Docs</a><a href="#pricing" className="hover:text-foreground">Pricing</a></nav>
          <div className="hidden md:block"><a href="/dashboard" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#22c55e] to-[#3b82f6] px-4 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5">Get API Key <ArrowRight className="size-4" /></a></div>
          <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="flex flex-col gap-4 border-t border-white/5 px-5 py-5 text-sm text-muted-foreground md:hidden"><a href="#features" onClick={() => setOpen(false)}>Features</a><a href="#docs" onClick={() => setOpen(false)}>Docs</a><a href="#pricing" onClick={() => setOpen(false)}>Pricing</a><a href="/dashboard" className="rounded-lg bg-gradient-to-r from-[#22c55e] to-[#3b82f6] px-4 py-2.5 text-center font-semibold text-slate-950"><Link href="/dashboard">Get API Key</Link></a></div>}
      </header>

      <main id="top">
        <section className="border-b border-white/5"><div className="mx-auto grid max-w-7xl gap-16 px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28"><div><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/25 bg-[#22c55e]/10 px-3 py-1.5 text-xs font-medium text-[#86efac]"><span className="size-1.5 rounded-full bg-[#22c55e]" /> Built for the speed of speech</div><h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">The World&apos;s Fastest <span className="bg-gradient-to-r from-[#22c55e] to-[#3b82f6] bg-clip-text text-transparent">Hybrid Speech API</span></h1><p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-gray-400">Translate live audio with less than 1.5s latency. Whisper transcription, GPT-4o-mini translation, and Azure TTS in one production-ready API.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#22c55e] to-[#3b82f6] px-5 py-3 font-semibold text-slate-950 hover:brightness-110">Start 30-Min Free Trial <ArrowRight className="size-4" /></a><a href="#docs" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[.03] px-5 py-3 font-medium text-gray-200 hover:bg-white/[.06]">Read the Docs <Code2 className="size-4" /></a></div><div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400"><span className="flex items-center gap-2"><Zap className="size-4 text-[#22c55e]" /> &lt; 1.5s latency</span><span className="flex items-center gap-2"><Globe2 className="size-4 text-[#3b82f6]" /> 140+ languages</span><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#22c55e]" /> 99.99% uptime</span></div></div><Demo copied={copied} onCopy={copyRequest} /></div></section>

        <section id="features" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold text-[#22c55e]">Everything you need to ship</p><h2 className="mt-3 text-4xl font-bold tracking-tight">One API. Every voice.</h2><p className="mt-4 leading-7 text-gray-400">Skip the orchestration layer. TransVoice handles the entire audio-to-audio pipeline so your team can focus on the product.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3"><Feature icon={<Cpu />} title="Hybrid intelligence" text="Whisper, GPT-4o-mini, and Azure TTS tuned into a single seamless pipeline." /><Feature icon={<Sparkles />} title="Natural translations" text="Preserve tone, context, and intent across 140+ languages and dialects." /><Feature icon={<ShieldCheck />} title="Production ready" text="Secure API keys, predictable billing, streaming support, and enterprise uptime." /></div></section>

        <section id="docs" className="border-y border-white/5 bg-[#0f172a]/35"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8"><div><p className="text-sm font-semibold text-[#3b82f6]">Developer-first by design</p><h2 className="mt-3 text-4xl font-bold tracking-tight">From audio to translated voice in one request.</h2><p className="mt-4 max-w-lg leading-7 text-gray-400">A familiar REST API with clear responses, low-latency streaming, and SDKs that stay out of your way.</p><div className="mt-8 flex flex-col gap-4 text-sm text-gray-400"><span className="flex items-center gap-3"><Check className="size-4 text-[#22c55e]" /> Streaming and batch endpoints</span><span className="flex items-center gap-3"><Check className="size-4 text-[#22c55e]" /> Webhooks for async processing</span><span className="flex items-center gap-3"><Check className="size-4 text-[#22c55e]" /> Usage analytics from day one</span></div></div><Demo copied={copied} onCopy={copyRequest} /></div></section>

        <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold text-[#22c55e]">Pricing that makes sense</p><h2 className="mt-3 text-4xl font-bold tracking-tight">Simple, Transparent Pricing. No Credit System.</h2><p className="mt-4 leading-7 text-gray-400">Direct hourly billing. Every plan includes the full API and no surprise multipliers.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{plans.map((plan) => <div key={plan.name} className={`relative flex flex-col rounded-xl border p-5 backdrop-blur-md ${plan.featured ? 'border-[#22c55e]/60 bg-[#0f172a]/90 shadow-xl shadow-[#22c55e]/10' : 'border-white/5 bg-[#0f172a]/70'}`}>{plan.featured && <span className="absolute -top-3 left-4 rounded-full bg-gradient-to-r from-[#22c55e] to-[#3b82f6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950">Most popular</span>}<h3 className="font-semibold">{plan.name}</h3><p className="mt-6 text-3xl font-bold tracking-tight">{plan.price}<span className="text-sm font-normal text-gray-500">{plan.price !== '$0' ? '/month' : ''}</span></p><p className="mt-1 font-semibold text-[#86efac]">{plan.hours}</p><p className="mt-4 min-h-12 text-sm leading-6 text-gray-400">{plan.note}</p><a href="/dashboard" className={`mt-auto rounded-lg px-3 py-2.5 text-center text-sm font-semibold ${plan.featured ? 'bg-gradient-to-r from-[#22c55e] to-[#3b82f6] text-slate-950' : 'border border-white/10 text-gray-200 hover:bg-white/[.05]'}`}>Choose plan</a></div>)}</div></section>
      </main>
      <footer className="border-t border-white/5"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2026 TransVoice AI. Built for the speed of speech.</p><div className="flex gap-5"><a href="#features" className="hover:text-gray-200">Features</a><a href="#docs" className="hover:text-gray-200">Docs</a><a href="mailto:hello@transvoice.ai" className="hover:text-gray-200">Contact</a></div></div></footer>
    </div>
  )
}

function Demo({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  return <div className="overflow-hidden rounded-xl border border-white/10 bg-[#020617] shadow-2xl shadow-[#3b82f6]/10"><div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><div className="flex items-center gap-2 text-xs text-gray-500"><span className="flex gap-1"><i className="size-2 rounded-full bg-red-400" /><i className="size-2 rounded-full bg-yellow-400" /><i className="size-2 rounded-full bg-green-400" /></span> translate.sh</div><button onClick={onCopy} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-200" aria-label="Copy API request"><Clipboard className="size-3.5" />{copied ? 'Copied' : 'Copy'}</button></div><pre className="overflow-x-auto p-5 text-xs leading-6 text-gray-300"><code><span className="text-[#22c55e]">$</span> {request}</code></pre><div className="border-t border-white/10 p-5 text-xs leading-6"><span className="text-[#22c55e]">200 OK</span>{'\n'}<span className="text-gray-500">{'{'} </span><span className="text-[#60a5fa]">&quot;translation&quot;</span><span className="text-gray-500">: </span><span className="text-[#86efac]">&quot;Good morning, how are you?&quot;</span><span className="text-gray-500">,{'\n'}  </span><span className="text-[#60a5fa]">&quot;language&quot;</span><span className="text-gray-500">: </span><span className="text-[#86efac]">&quot;en-US&quot;</span>{'\n'}<span className="text-gray-500">{' }'}</span></div></div>
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="rounded-xl border border-white/5 bg-[#0f172a]/70 p-6 backdrop-blur-md"><div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#22c55e]/20 to-[#3b82f6]/20 text-[#86efac] [&>svg]:size-5">{icon}</div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-400">{text}</p></div> }
