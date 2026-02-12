export function Footer() {
    return (
        <footer className="px-6 py-12 border-t border-white/5 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                    <img src="/Atumlogo.png" alt="Atum Logo" className="w-6 h-6 rounded object-contain" />
                    <span className="text-white font-bold">Atum</span>
                </div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-lime-500 transition-colors">X (Twitter)</a>
                    <a href="#" className="hover:text-lime-500 transition-colors">GitHub</a>
                    <a href="#" className="hover:text-lime-500 transition-colors">Contact</a>
                </div>
                <div>&copy; 2024 Atum Labs</div>
            </div>
        </footer>
    );
}
