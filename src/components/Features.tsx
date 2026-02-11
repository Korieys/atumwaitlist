import { MousePointer2, Share2, Lock, PenTool, Layout, Zap } from 'lucide-react';
import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="group p-8 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-lime-500/30 transition-all duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-lime-500/5 text-lime-500 rounded-xl mb-6 group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export function Features() {
    return (
        <section className="px-6 py-24 border-t border-white/5 bg-zinc-950/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-white">Focus on shipping, not posting.</h2>
                    <p className="text-zinc-500">Everything you need to grow your audience while you code.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={MousePointer2}
                        title="Auto-Capture"
                        description="Atum watches your workflow. It turns commits and design changes into updates for you."
                    />
                    <FeatureCard
                        icon={Share2}
                        title="Easy Broadcasting"
                        description="Send your updates to X, LinkedIn, or your personal dev log with a single click."
                    />
                    <FeatureCard
                        icon={Lock}
                        title="Privacy First"
                        description="Keep your deep work private. You decide which updates go public and which stay in your log."
                    />
                    <FeatureCard
                        icon={PenTool}
                        title="Smart Journaling"
                        description="Maintain a precise internal record of every step without ever having to manually write it down."
                    />
                    <FeatureCard
                        icon={Layout}
                        title="Visual Updates"
                        description="Turn your progress into beautiful timeline summaries and micro-content for social media."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Stay Consistent"
                        description="Remove the 'what should I post?' pressure by letting your work speak for itself."
                    />
                </div>
            </div>
        </section>
    );
}
