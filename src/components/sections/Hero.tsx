import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { heroData } from '../../data/hero';
import Dock from '../Dock';

// Utility to check if we're on mobile
const isMobile = () => window.innerWidth < 768;

// Static terminal script so we don't recreate it every render
const conversation = [
  { command: 'whoami', response: 'deepak' },
  { command: 'pwd', response: '/home/deepak/nyc' },
  { command: 'ls', response: 'intro  about  work  projects  contact' },
];

export default function Hero() {
  const { greeting, tagline } = heroData;
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const isWaitingRef = useRef(false);

  useEffect(() => {
    if (isComplete || isWaitingRef.current) return; // Stop if already complete or waiting to advance

    let timeout: number;
    let hintTimeout: number | undefined;

    if (currentIndex < conversation.length) {
      const currentItem = conversation[currentIndex];
      const commandText = `$ ${currentItem.command}\n`;
      const responseText = `${currentItem.response}\n`;
      const fullText = `${commandText}${responseText}`;

      if (currentLine.length < commandText.length) {
        // Type the command characters
        timeout = window.setTimeout(() => {
          setCurrentLine(commandText.slice(0, currentLine.length + 1));
        }, Math.random() * 50 + 30); // Random typing speed
      } else if (currentLine.length < fullText.length) {
        // Instantly drop the response once the command is done
        setCurrentLine(fullText);
      } else {
        // Line complete, pause, then add to history and move to next
        isWaitingRef.current = true;
        timeout = window.setTimeout(() => {
          setTerminalLines(prev => [...prev, fullText]);
          setCurrentLine('');
          setCurrentIndex(prev => prev + 1);
          isWaitingRef.current = false;
        }, currentIndex === conversation.length - 1 ? 1500 : 2000); // Pause before next line/hint
      }
    } else if (currentIndex === conversation.length && !isComplete) {
      // Add hint after all commands are done
      const hintText = `\n${isMobile() ? '💡 Swipe left/right to navigate tabs' : '💡 Use ← → arrow keys to navigate tabs'}\n`;
      isWaitingRef.current = true;
      timeout = window.setTimeout(() => {
        setCurrentLine(hintText);
        hintTimeout = window.setTimeout(() => {
          setTerminalLines(prev => [...prev, hintText]);
          setCurrentLine('');
          setIsComplete(true); // Mark as complete to prevent further execution
          isWaitingRef.current = false;
        }, 1000);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
      if (hintTimeout) clearTimeout(hintTimeout);
    };
  }, [currentIndex, currentLine, isComplete]);
  return (
    <section id="top" className="relative pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100">
              {tagline}
            </h1>
            <p className="text-lg text-zinc-400 max-w-prose">
              {greeting}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-emerald-600 text-black px-4 py-2 rounded hover:bg-emerald-500">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-2 rounded hover:bg-zinc-800">
                Contact
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="h-[320px] sm:h-[380px] md:h-auto md:aspect-square rounded-lg bg-zinc-900 border border-zinc-800 shadow-inner flex flex-col p-4 overflow-hidden">
              <div className="text-xs text-zinc-500 mb-2 font-mono">Terminal v2.1.0</div>
              <div className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto font-mono text-xs text-emerald-300 leading-tight">
                  {terminalLines.map((line, index) => (
                    <div key={index} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                  {currentLine && (
                    <div className="whitespace-pre-wrap">
                      {currentLine}
                      <span className="animate-pulse">█</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-xs text-zinc-600 mt-2 font-mono">
                deepak@portfolio:~$
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <Dock embedded />
      </div>
    </section>
  );
}


