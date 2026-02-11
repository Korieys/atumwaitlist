import { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { useWaitlist } from "../hooks/use-waitlist";
import { cn } from "../lib/utils";

export function WaitlistForm() {
    const [email, setEmail] = useState("");
    const { submitEmail, isLoading, error, success } = useWaitlist();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            await submitEmail(email);
        }
    };

    if (success) {
        return (
            <div className="w-full max-w-sm mx-auto p-6 bg-lime-500/10 border border-lime-500/20 rounded-2xl text-lime-500 font-bold flex flex-col items-center gap-3 animate-in fade-in zoom-in duration-500 backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(132,204,22,0.2)]">
                <div className="w-12 h-12 rounded-full bg-lime-500/20 flex items-center justify-center mb-2">
                    <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl">You're on the list!</h3>
                <p className="text-sm text-lime-500/80 font-normal">We'll reach out soon.</p>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-md mx-auto">
            {error && (
                <div className="absolute -top-12 left-0 w-full flex items-center gap-2 text-red-500 text-sm bg-red-500/10 border border-red-500/20 p-2 rounded-lg animate-in slide-in-from-bottom-2">
                    <AlertCircle size={14} />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 blur"></div>

                <div className="relative flex gap-2 p-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        disabled={isLoading}
                        className="flex-1 bg-transparent border-none text-white placeholder:text-zinc-600 focus:outline-none focus:ring-0 px-4 py-2 disabled:opacity-50"
                    />
                    <button
                        disabled={isLoading}
                        className={cn(
                            "h-12 px-6 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-400 transition-all flex items-center gap-2 whitespace-nowrap shadow-[0_0_20px_-5px_rgba(132,204,22,0.5)] hover:shadow-[0_0_30px_-5px_rgba(132,204,22,0.7)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed",
                            isLoading && "px-8"
                        )}
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                Join <span className="hidden sm:inline">Waitlist</span> <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </div>
            </form>
            <p className="mt-4 text-xs text-zinc-500 text-center">
                Processing {Math.floor(Math.random() * 50) + 100} signups today.
            </p>
        </div>
    );
}
