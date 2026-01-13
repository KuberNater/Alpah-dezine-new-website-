"use client"
import BlogLayout from "@/components/Blogs/BlogLayout";
import { getSeoMeta } from "@/lib/seo";
import { AlertCircleIcon, ArrowRightIcon, BarChart3Icon, Building2Icon, CheckCircle2Icon, ClockIcon, FingerprintIcon, GraduationCapIcon, LockIcon, QuoteIcon, ShieldCheckIcon, ShirtIcon, ShoppingBagIcon, TvIcon, UsersIcon, ZapIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

function PageContent() {

    const linkData = [
        {
            title: 'Introduction',
            href: '#intro'
        }, {
            title: 'What is Collegiate Licensing?',
            href: '#mechanics'
        }, {
            title: 'The 4 Ingredients',
            href: '#ingredients'
        }, {
            title: 'The Players',
            href: '#players'
        }, {
            title: 'Barriers to Entry',
            href: '#barriers'
        }, {
            title: 'Trends & Future',
            href: '#trends'
        }, {
            title: 'The Bottom Line',
            href: '#bottom-line'
        }
    ]
    const revenueData = [
        { name: 'Texas', full: 'Univ. of Texas', revenue: 15.0, color: '#bf5700' },
        { name: 'Alabama', full: 'Univ. of Alabama', revenue: 12.0, color: '#9e1b32' },
        { name: 'Ohio St', full: 'Ohio State', revenue: 10.5, color: '#bb0000' },
        { name: 'Michigan', full: 'Michigan', revenue: 10.2, color: '#00274c' },
        { name: 'Notre Dame', full: 'Notre Dame', revenue: 10.0, color: '#0c2340' },
    ];
    return (
        <>

            <BlogLayout
                headingProps={{
                    decorativeText: "London Sports Shop",
                    time: 8,
                    badgeText: "compliance strategy",
                    subtitle: "Licensors are becoming more aggressive with data-driven audits. Here is your checklist to stay audit-ready 365 days a year.",
                    authorName: "Johun Doe",
                    date: "Oct 12, 2024",
                    children: (
                        <>
                            Why You Won't Find
                            <br className="hidden md:block" />
                            Oxford University T-Shirts
                            <br className="hidden md:block" />
                            at a
                        </>
                    )
                }}
                imageProps={{
                    src: '/images/blog1.webp',
                    alt: 'Blog 1'
                }}
                links={linkData}
            >
                {/* Executive Summary Box */}
                <div className="bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-xl mb-14">
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                        <ClockIcon size={16} /> Key Takeaways
                    </h4>
                    <ul className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {[
                            "The US collegiate licensing market is a $6B+ industry, virtually non-existent in Europe.",
                            "Success relies on four unique ingredients: Identity, Sports Business, Alumni Loyalty, and Professional Organization.",
                            "NIL (Name, Image, Likeness) is creating a new \"gold rush\" for personalized merchandise."
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
                        Picture this: Now imagine you're at Heathrow Airport in London. You'll see Manchester United jerseys. Liverpool scarves. Arsenal jackets. But Oxford University hoodies? Cambridge sweatshirts?
                    </p>

                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8 font-medium">
                        It will be akin to finding a unicorn.
                    </p>

                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-8">
                        Here's the weird part: Both countries have prestigious universities. Both have sports-crazy populations. So why does America have a $6+ billion industry built on selling university-branded merchandise, while the rest of the world simply... doesn't? Let's dig in.
                    </p>
                </div>

                {/* Section 1: What is it? */}
                <h2 id="mechanics" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">What is Collegiate Licensing?</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-10">
                    Think of it like a franchise model, but for logos. A university owns valuable intellectual property: its name, logo, mascot, colors, and even specific phrases (looking at you, "Hook 'Em Horns"). Instead of keeping this locked away, they license it out to manufacturers who want to slap these symbols on everything from t-shirts to toilet paper. <span className="italic text-slate-500">Well, maybe not toilet paper. But you get the idea.</span>
                </p>

                <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 mb-14">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-xl">Here's how it works:</h3>
                    <ol className="space-y-6">
                        {[
                            "A company (let's say a hat manufacturer) wants to make University of Michigan caps.",
                            "They apply to Michigan (or more likely, to Michigan's licensing agency).",
                            "If approved, they pay an upfront fee and agree to pay royalties—usually 8-12% of wholesale price.",
                            "Michigan reviews and approves every single design.",
                            "The manufacturer makes and sells the hats.",
                            "Michigan collects checks every quarter."
                        ].map((step, i) => (
                            <li key={i} className="flex gap-4 text-slate-700 dark:text-slate-300 items-start">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-extrabold mt-0.5">{i + 1}</span>
                                <span className="text-lg leading-relaxed">{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-10">
                    It's passive income for universities, and it's substantial. The University of Texas makes over $15 million annually just from licensing. Alabama? $12 million. Ohio State, Michigan, Notre Dame? All over $10 million each. Over 200 universities in the US each pull in more than $1 million yearly just from letting companies use their logos.
                </p>

                {/* Chart Section */}
                <div className="my-14 bg-slate-50 dark:bg-[#0B1120] rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-white/5 shadow-inner">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Top Earners (Estimated)</h3>
                            <p className="text-sm text-slate-500">Annual Licensing Royalties (USD Millions)</p>
                        </div>
                        <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                            <BarChart3Icon size={20} />
                        </div>
                    </div>
                    <div className="h-[350px] w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData} margin={{ top: 20, right: 10, left: -10, bottom: 5 }} barSize={40}>
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
                                    tickFormatter={(value) => `$${value}M`}
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
                                    formatter={(value: number | undefined) => [`$${value} Million`, 'Revenue']}
                                    labelStyle={{ color: '#94a3b8', marginBottom: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                                />
                                <Legend
                                    verticalAlign="top"
                                    height={36}
                                    iconType="circle"
                                    wrapperStyle={{ paddingBottom: '20px' }}
                                    formatter={(value) => <span className="text-slate-600 dark:text-slate-400 font-bold text-xs uppercase tracking-wider ml-2">Royalties (Est.)</span>}
                                />
                                <Bar dataKey="revenue" radius={[6, 6, 0, 0]} animationDuration={1500}>
                                    {revenueData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Section 2: The Ingredients */}
                <h2 id="ingredients" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">The 4 Ingredients</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-10">
                    Why does this work in the US and nowhere else? It requires a perfect storm. Remove any one, and the recipe fails.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                            <UsersIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. The Tribe</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            College isn't just school—it's identity. You don't just attend Alabama; you become a Crimson Tide fan. This doesn't happen with commuter schools in Europe.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                            <TvIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Sports as Big Business</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            NCAA football viewership rivals the NFL. No eyeballs = no merchandise demand. The UK has no primetime Saturday games for university rugby.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                            <GraduationCapIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. The Alumni Network</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            A customer base that literally renews itself annually and maintains loyalty for life. 20M+ students, all potential buyers for decades.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                            <Building2Icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Organization</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Agencies like CLC (Learfield) professionalize the chaos. They vet thousands of applicants and collect royalties so universities don't have to.
                        </p>
                    </div>
                </div>

                {/* Section 3: The Players */}
                <h2 id="players" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Who's making all this stuff?</h2>

                <div className="space-y-6 mb-16">
                    <div className="flex gap-6 p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 items-start">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
                            <ShirtIcon size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Apparel Monarchs</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                <strong className="text-slate-900 dark:text-white">Nike, Adidas, Under Armour.</strong> They sign exclusive deals worth $100M+ to outfit athletic departments. Nike's deal with Ohio State? 15 years, $252 million.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 items-start">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
                            <ShoppingBagIcon size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Vertical Giant</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                <strong className="text-slate-900 dark:text-white">Fanatics.</strong> They license, manufacture, AND sell directly online. When a team wins at 11 PM, merch is ready by midnight.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 items-start">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
                            <FingerprintIcon size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Category Specialists</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                                <strong className="text-slate-900 dark:text-white">Top of the World (hats), Wincraft (decals).</strong> Plus hundreds of niche licensees making everything from dog collars to BBQ sets.
                            </p>
                        </div>
                    </div>
                </div>

                {/* NEW SECTION: Can anyone become a licensee? */}
                <h2 id="barriers" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Can anyone become a licensee?</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    In theory, yes. In practice, it's tough. Universities (and their agencies) are selective. You need more than just a cool idea.
                </p>

                <div className="mb-12 bg-slate-50 dark:bg-[#0B1120] rounded-2xl p-8 border border-slate-100 dark:border-white/5">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <LockIcon size={20} className="text-slate-400" /> The Gatekeeping Checklist:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {["A solid business plan", "Proof of insurance", "High-quality product samples", "Financial stability", "Willingness to pay admin fees + advance royalties"].map((items, index) => (
                            <li key={index} className="flex gap-3 items-center text-slate-700 dark:text-slate-300">
                                <CheckCircle2Icon size={18} className="text-emerald-500 shrink-0" /> {items}
                            </li>
                        ))}
                    </ul>

                    <div className="p-4 bg-white dark:bg-[#0F172A] rounded-xl border border-slate-200 dark:border-white/5">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide text-red-500 flex items-center gap-2">
                            <AlertCircleIcon size={16} /> The Real Challenge: Approvals
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Every. Single. Design. Must. Be. Approved. <br />
                            Want to make a funny t-shirt with the mascot doing something silly? <strong className="text-red-500">Rejected</strong>—doesn't align with brand guidelines. <br />
                            Want to use slightly the wrong shade of blue? <strong className="text-red-500">Rejected</strong>. <br />
                            Want to use the logo but also add your own design elements? Better submit it for approval and wait 2-4 weeks.
                        </p>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 italic">Universities are fiercely protective because their brand is worth billions. One poorly made product or offensive design could damage that.</p>
                </div>

                {/* Section 4: Trends & Future */}
                <h2 id="trends" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">What's Changing?</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    The market is transforming thanks to one acronym: <strong>NIL</strong> (Name, Image, and Likeness). Student-athletes can now profit from their fame, meaning vendors can make deals directly with star quarterbacks, not just the university.
                </p>

                {/* Quote Box */}
                <div className="my-14 py-12 relative">
                    <QuoteIcon className="absolute top-0 left-0 w-16 h-16 text-slate-100 dark:text-slate-800 -z-10 transform -translate-y-1/2" />
                    <blockquote className="text-2xl md:text-3xl italic font-bold text-slate-800 dark:text-slate-200 leading-tight text-center px-8">
                        "Imagine buying a t-shirt with both the Alabama logo AND the star quarterback's signature. That's the new frontier."
                    </blockquote>
                </div>

                <div className="mb-16">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-xl">Other Trends Reshaping the Market:</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400 shrink-0">
                                <ZapIcon size={18} />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed"><strong>Direct-to-consumer is king:</strong> Why sell through Dick's Sporting Goods when you can keep bigger margins online? Fanatics dominates here, but smaller brands are finding success too.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400 shrink-0">
                                <ZapIcon size={18} />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed"><strong>Boutique over basic:</strong> Mass-produced, generic hoodies are losing ground to premium brands offering vintage designs, better materials, and unique styles. Think of it as the craft beer movement, but for college merch.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400 shrink-0">
                                <ZapIcon size={18} />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed"><strong>Sustainability matters:</strong> Younger consumers care about environmental impact. Smart vendors are adapting with eco-friendly materials and ethical manufacturing.</span>
                        </li>
                    </ul>
                </div>

                {/* NEW SECTION: The Bottom Line */}
                <h2 id="bottom-line" className="scroll-mt-32 text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">The Bottom Line</h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    Collegiate licensing is a perfect storm that can only exist in America. You need: universities as identity-formation institutions + college sports as mainstream entertainment + massive scale + professional organization + lifelong alumni loyalty.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    Remove any one ingredient, and the recipe fails. That's why Oxford doesn't have a licensing industry despite being older and arguably more prestigious than most American universities.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-8 mb-8">
                    It's also why this $6+ billion market isn't going anywhere. As long as Americans form deep emotional bonds with their universities, they'll want to wear, display, and celebrate those connections.
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white leading-8 mb-12 border-l-4 border-blue-500 pl-6">
                    It's more than merchandise. It's identity in physical form. And you can't put a price on that.
                </p>


                {/* Editorial "Featured Solution" Box */}
                <div className="mt-12 p-8 md:p-12 bg-linear-to-br from-slate-900 to-slate-800 dark:from-blue-950/30 dark:to-slate-900/50 rounded-2xl border border-slate-700 dark:border-blue-500/20 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold text-xs uppercase tracking-widest">
                                <ShieldCheckIcon size={14} /> And if you're in the licensing business?
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Turn the Nightmare into a Machine.</h3>
                            <p className="text-slate-300 text-base leading-relaxed mb-6">
                                All this complexity, the approvals, the vendors, the compliance, the royalty tracking doesn't have to run on email chains and broken spreadsheets anymore. Alpha Dezine built software specifically for this industry (not a generic tool trying to fit).
                            </p>
                            <p className="text-slate-300 text-base leading-relaxed mb-8">
                                Trusted by 250+ licensing agencies, universities, and vendors, our platform cuts approval cycles from <strong>14 days to 2 days</strong>, handles 400+ approvals daily, and integrates seamlessly with existing systems like Learfield, CLC, and Fanatics.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                                    Schedule Demo <ArrowRightIcon size={14} />
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-32 bg-slate-700 dark:bg-white/10 mx-4"></div>
                        <div className="md:w-1/3 text-left">
                            <div className="text-5xl font-bold text-white mb-2">2 Days</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">Avg. Approval Time</div>
                        </div>
                    </div>
                </div>
            </BlogLayout>
        </>
    )
}

export default PageContent
