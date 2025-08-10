import Background from './components/Background';
import Dock from './components/Dock';
import TerminalTabs from './components/TerminalTabs';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-200">
      <Background />
      <Dock />
      <main className="relative z-10 pt-8">
        <TerminalTabs />
      </main>
      <footer className="relative z-10 border-t border-zinc-800 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Deepak • Built with React + Tailwind</span>
          <a href="#top" className="underline hover:text-zinc-300">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;


