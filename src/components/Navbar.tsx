export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center text-black font-black italic">
                        A
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Atum</span>
                </div>
                <button
                    onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm font-bold text-lime-500 hover:text-lime-400 transition-colors"
                >
                    Get Early Access
                </button>
            </div>
        </nav>
    );
}
