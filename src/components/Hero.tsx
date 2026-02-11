import { WorkflowPreview } from "./WorkflowPreview";
import { WaitlistForm } from "./Waitlist";

export function Hero() {
    return (
        <section className="px-6 pb-24 pt-32 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-500 text-[10px] font-bold uppercase tracking-widest">
                    ✨ Making building in public effortless
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
                    Document your progress <br />
                    <span className="text-lime-500">without the work.</span>
                </h1>

                <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                    Atum captures your updates as you work. Turn every commit, design tweak, and milestone into clean public posts and private logs—automatically.
                </p>

                <div id="waitlist" className="max-w-md pt-4">
                    <WaitlistForm />
                </div>
            </div>

            <div className="relative">
                <div className="absolute -inset-10 bg-lime-500/10 blur-3xl rounded-full opacity-50 pointer-events-none" />
                <WorkflowPreview />
            </div>
        </section>
    );
}
