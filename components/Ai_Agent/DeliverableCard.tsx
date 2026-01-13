import { DeliverableType } from '@/types/Ai Agent/services.types'
import { Check } from 'lucide-react'

interface IDeliverableCard {
    item: DeliverableType
    i: number
}

function DeliverableCard({ item, i }: IDeliverableCard) {
    return (
        <div key={i} className="group grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 p-5 md:p-8 lg:p-12 bg-background rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] border border-transparent hover:border-slate-200 dark:hover:border-zinc-800 items-center hover:shadow-xl dark:shadow-zinc-800 transition-shadow">
            <div className="lg:col-span-5">
                <div className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest mb-2 md:mb-3">Phase 0{item.id}</div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-primary">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {item.description}
                </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
                <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                    {item.deliverables.map((del, d) => (
                        <div key={d} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-background rounded-xl md:rounded-2xl text-xs md:text-sm">
                            <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                <Check className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{del}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-2 md:mt-3 p-3 md:p-4 bg-brand-500/5 rounded-xl md:rounded-2xl border border-brand-500/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-[9px] md:text-[10px] font-mono font-bold text-brand-500 uppercase tracking-widest">Core Deliverable</span>
                    <span className="text-xs md:text-sm font-bold text-primary/80">{i === 0 ? "Agent Plan ready for sign-off" : i === 1 ? "Working agent ready for validation" : i === 2 ? "Maintainable Knowledge Foundation" : i === 3 ? "Transformative Workflow Engine" : "Production Scale Protocol"}</span>
                </div>
            </div>
        </div>
    )
}

export default DeliverableCard