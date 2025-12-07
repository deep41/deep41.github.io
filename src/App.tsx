import Background from './components/Background';
import TerminalTabs from './components/TerminalTabs';

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black text-zinc-200">
      <Background />
      <main className="relative z-10 flex min-h-0 flex-1 flex-col pt-4">
        <TerminalTabs />
      </main>
      {/* footer removed from fixed viewport layout */}
    </div>
  );
}

export default App;


