import Background from './components/Background';
import TerminalTabs from './components/TerminalTabs';

function App() {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-zinc-200">
      <Background />
      <main className="relative z-10 h-full pt-8">
        <TerminalTabs />
      </main>
      {/* footer removed from fixed viewport layout */}
    </div>
  );
}

export default App;


