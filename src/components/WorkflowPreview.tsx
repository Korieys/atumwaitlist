import { useState, useEffect } from 'react';
import { Terminal, Sparkles, Share2 } from 'lucide-react';

export const WorkflowPreview = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { label: "You Code", icon: <Terminal size={14} />, detail: "git commit -m 'updated auth'" },
        { label: "Atum Captures", icon: <Sparkles size={14} />, detail: "Processing update..." },
        { label: "Audience Sees", icon: <Share2 size={14} />, detail: "New post on X / LinkedIn" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(s => (s + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-900/80 border border-lime-500/20 rounded-xl p-6 backdrop-blur-md shadow-2xl max-w-sm mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Live Preview</span>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    <div className="w-2 h-2 rounded-full bg-lime-500" />
                </div>
            </div>
            <div className="space-y-4">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-500 ${idx === activeStep ? 'bg-lime-500/10 border border-lime-500/30 translate-x-2' : 'opacity-40'
                            }`}
                    >
                        <div className={`p-2 rounded-md ${idx === activeStep ? 'text-lime-500' : 'text-zinc-400'}`}>
                            {step.icon}
                        </div>
                        <div>
                            <div className="text-xs font-bold text-white">{step.label}</div>
                            <div className="text-[10px] font-mono text-zinc-500">{step.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
