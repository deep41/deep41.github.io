import Background from './components/Background';
import TerminalTabs from './components/TerminalTabs';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-200">
      <Background />
      <main className="relative z-10 pt-4">
        <TerminalTabs />
      </main>
      {/* footer removed from fixed viewport layout */}
    </div>
  );
}

export default App;


