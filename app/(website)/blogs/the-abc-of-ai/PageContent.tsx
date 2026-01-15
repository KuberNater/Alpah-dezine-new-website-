"use client"
import BlogLayout from "@/components/Blogs/BlogLayout";
import { getSeoMeta } from "@/lib/seo";
import { AlertCircleIcon, ArrowRight, ArrowRightIcon, BarChart3, BarChart3Icon, Brain, Building2Icon, CheckCircle2Icon, ClockIcon, Database, FingerprintIcon, GraduationCapIcon, Lock, LockIcon, MessageSquare, QuoteIcon, ShieldCheck, ShieldCheckIcon, ShirtIcon, ShoppingBagIcon, TvIcon, UsersIcon, Workflow, ZapIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, Legend, LabelList } from 'recharts';

function PageContent() {

    const linkData = [
        {
            title: 'The Jargon Trap',
            href: '#intro'
        }, {
            title: '1. The LLM',
            href: '#llm'
        }, {
            title: '2. RAG Systems',
            href: '#rag'
        }, {
            title: '3. AI Agents',
            href: '#agents'
        }, {
            title: 'The Bottom Line',
            href: '#bottom-line'
        }, {
            title: 'Why You Should Care',
            href: '#why-care'
        }, {
            title: 'One More Thing',
            href: '#next-steps'
        }
    ]

    const aiPerformanceData = [
        { name: 'Base LLM', type: 'General', accuracy: 65, color: '#94a3b8' },
        { name: 'RAG Pipeline', type: 'Contextual', accuracy: 88, color: '#3b82f6' },
        { name: 'Agentic System', type: 'Autonomous', accuracy: 94, color: '#8b5cf6' },
        { name: 'Human Expert', type: 'Manual', accuracy: 98, color: '#10b981' },
    ];
    return (
        <>

            <BlogLayout
                headingProps={{
                    decorativeText: "Explained Simply",
                    time: 8,
                    badgeText: "compliance strategy",
                    subtitle: "Demystifying the technical jargon behind the next generation of business automation.",
                    authorName: "Dr. Marcus Webb",
                    date: "Jan 24, 2025",
                    children: (
                        <>
                            The ABC's of AI:
                            <br className="hidden md:block" />
                            LLMs, RAG, and Agents
                        </>
                    )
                }}
                imageProps={{
                    src: '/images/ai-blog.webp',
                    alt: 'Blog 1'
                }}
                links={linkData}
            >
                {/* Executive Summary Box */}
                <div className="bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-xl mb-14">
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                        <ClockIcon size={16} /> Quick Reference
                    </h4>
                    <ul className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {[
                            "LLM: The world-class brain that knows facts but lacks your company's data.",
                            "RAG: The digital library that connects the brain to your specific documents for accuracy.",
                            "Agents: The hands of the system that can actually execute tasks across your apps."
                        ].map((items, index) => (
                            <li key={index} className="flex gap-4 items-start">
                                <span className="text-blue-500 font-bold mt-1.5 leading-none">•</span>
                                <span dangerouslySetInnerHTML={{ __html: items }} />
                            </li>
                        ))}

                    </ul>
                </div>

                {/* Introduction */}
                <div id="intro" className="scroll-mt-32 mb-14">
                    <p className="text-xl md:text-2xl leading-relaxed text-slate-800 dark:text-slate-200 mb-10 first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
                        Today we are going to stop pretending we know what tech bros are talking about on LinkedIn, and finally explain the difference between an LLM, a RAG pipeline, and an AI Agent.
                    </p>

                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8 font-medium">
                        If you have walked into a meeting recently, you've heard the acronyms flying around like confetti.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 italic border-l-2 border-slate-200 pl-6 mb-8">
                        "We need to leverage an LLM, maybe build a RAG pipeline for our proprietary data, and eventually deploy autonomous Agents to handle the workflow."
                    </p>

                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-8">
                        The AI industry is terrible at naming things. They take simple concepts and wrap them in scary tech-speak. So today, we're fixing that using a simple analogy: <span className="font-bold">The New Hire.</span>
                    </p>
                </div>

                {/* Section 1: What is it? */}
                <h2 id="llm" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">1. The LLM (The "Know-It-All" Intern)</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-10">
                    Imagine you hire a fresh intern named <span className="font-bold">Kevin</span>. Kevin is a absolute genius. He has read almost every book, article, and website on the internet. You can ask him to write a poem about corporate taxation in the style of Dr. Seuss, and he’ll do it in seconds.
                </p>

                <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 mb-14">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-xl">Meet Kevin (The LLM):</h3>
                    <ol className="space-y-6">
                        {[
                            "He has read billions of pages (Training Data).",
                            "He understands language, tone, and logic perfectly.",
                            "But Kevin has been living in a dark room for a year. He has no idea what happened this morning.",
                            "If you ask him about your private internal sales figures, he won't know them. But he might make something up to sound smart (Hallucination).",
                            // "The manufacturer makes and sells the hats.",
                            // "Michigan collects checks every quarter."
                        ].map((step, i) => (
                            <li key={i} className="flex gap-4 text-slate-700 dark:text-slate-300 items-start">
                                <div className="p-1 bg-blue-100 dark:bg-blue-900/50 rounded text-blue-600 dark:text-blue-400 mt-1">
                                    <Brain size={16} />
                                </div>
                                <span className="text-lg leading-relaxed">{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-10">
                    In the tech world, Kevin is your Large Language Model (like GPT-4, Claude, or Gemini). He’s the engine, but he’s missing your specific fuel.
                </p>

                {/* Performance Chart */}
                <div className="my-14 bg-slate-50 dark:bg-[#0B1120] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-white/5 shadow-inner">
                    <div className="flex flex-col mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                <BarChart3 size={18} />
                            </div>
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Efficiency Benchmarks</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Accuracy by Architecture</h3>
                            <p className="text-sm text-slate-500">Proprietary data retrieval & task success rates</p>
                        </div>

                    </div>
                    <div className="h-[350px] w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={aiPerformanceData} margin={{ top: 20, right: 10, left: -10, bottom: 5 }} barSize={40}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" vertical={false} opacity={0.1} />
                                <XAxis
                                    dataKey="name"
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    fontWeight={600}
                                    fontFamily="Manrope"
                                    dy={10}
                                />
                                <YAxis
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}%`}
                                    fontFamily="Manrope"
                                    dx={-5}
                                />
                                <RechartsTooltip
                                    cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                                    contentStyle={{
                                        backgroundColor: '#1e293b',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#fff',
                                        fontFamily: 'Manrope',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
                                    }}
                                    itemStyle={{ color: '#fff', fontWeight: 600 }}
                                    formatter={(value: any) => [`${value}%`, 'Accuracy']}
                                    labelStyle={{ color: '#94a3b8', marginBottom: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                                />

                                <Bar dataKey="accuracy" radius={[6, 6, 0, 0]} animationDuration={1500}>
                                    {aiPerformanceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Section 2: RAG */}
                <h2 id="rag" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">2. RAG (The "Open Book" Exam)</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    You realize you can’t trust Kevin with your specific company data. He doesn't know your license agreements, your HR policies, or your historical royalties.
                </p>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    So, you give Kevin a <strong>filing cabinet</strong>. Now, before Kevin answers, you give him a rule: "Don't just guess. Look in this cabinet, pull out the right folder, read it, and THEN answer me."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                            <Database size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Retrieval</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Finding the exact snippet of information in your mountain of PDFs or databases that answers the user's specific query.
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Generation</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Kevin (the LLM) takes those specific facts and uses his world-class brain to write a human-like response that is 100% grounded in truth.
                        </p>
                    </div>
                </div>

                {/* Section 3: AI Agents */}
                <h2 id="agents" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">3. AI Agents (The Intern Who Actually Does Stuff)</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    Now Kevin is smart (LLM) and he has access to your files (RAG). But there is still one major frustration: <strong>Kevin is trapped in the chat box.</strong>
                </p>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    If you say, "Kevin, that refund policy looks great. Please process a refund for our Michigan licensee," Kevin will look at you sadly and say: "I cannot do that. I am just a text generator."
                </p>

                <p className="text-lg text-slate-900 dark:text-white font-bold mb-10 bg-blue-50 dark:bg-blue-900/10 p-4 border-l-4 border-blue-500">
                    This is where AI Agents come in. An Agent is an LLM that has been given arms and hands.
                </p>

                <div className="space-y-6 mb-16">
                    <div className="group flex gap-6 p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 items-start transition-all">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Workflow size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Multi-Step Workflow</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                An agent breaks down your goal into steps: "First I'll find the order, then I'll check the royalty status, then I'll hit the API."
                            </p>
                        </div>
                    </div>

                    <div className="group flex gap-6 p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 items-start transition-all">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Lock size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Tool Permissioning</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                You give the agent the "passwords" (API keys) to your software. It logs in, executes the click, and closes the loop.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: The Bottom Line */}
                <h2 id="bottom-line" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">The Bottom Line</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    The next time someone throws this word salad at you, just remember the Kevin analogy:
                </p>

                <div className="mb-12 bg-slate-50 dark:bg-[#0B1120] rounded-2xl p-8 border border-slate-100 dark:border-white/5">
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-blue-500 rounded-lg text-white">1</div>
                            <span className="text-lg text-slate-700 dark:text-slate-300"><strong>LLM:</strong> The brain. It knows general knowledge, but it might lie.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-indigo-500 rounded-lg text-white">2</div>
                            <span className="text-lg text-slate-700 dark:text-slate-300"><strong>RAG:</strong> The library. It gives the brain the facts it needs to tell the truth.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="p-2 bg-emerald-500 rounded-lg text-white">3</div>
                            <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Agent:</strong> The hands. It takes the brain's decision and actually executes the task.</span>
                        </li>
                    </ul>
                </div>

                <h2 id="why-care" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Why Should You Care?</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    Because this is where business is heading. We are moving from the era of RAG (chatting with our data) to the era of <strong>Agents</strong> (letting AI do our actual chores).
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    A year ago, we marveled at ChatGPT writing poems. Today, companies are building AI agents that can handle customer support tickets end-to-end, research, draft, and send emails, and even automate entire compliance workflows.
                </p>

                <div id="next-steps" className="scroll-mt-32 mt-16 p-6 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-blue-950/30 dark:to-slate-900/50 rounded-2xl border border-slate-700 dark:border-blue-500/20 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3 text-blue-400 font-bold text-xs uppercase tracking-widest">
                                <ShieldCheck size={14} /> One More Thing
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Building "Kevin" is a Headache.</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                Skip the API nightmare. Alpha Dezine builds the custom RAG pipelines and Agentic workflows that secure your proprietary data and automate your grunt work—so you can focus on the big picture.
                            </p>
                            <button className="py-2.5 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                                Talk to an AI Specialist <ArrowRight size={14} />
                            </button>
                        </div>
                        <div className="hidden md:block w-px h-24 bg-slate-700 dark:bg-white/10 mx-2"></div>
                        <div className="md:w-auto text-left min-w-[120px]">
                            <div className="text-4xl font-bold text-white mb-1">95%</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">Reduction in Grunt Work</div>
                        </div>
                    </div>
                </div>

            </BlogLayout>
        </>
    )
}

export default PageContent
