"use client";

import { useState, useEffect } from "react";

const codeLines = [
  { indent: 0, text: 'export default function App() {', color: 'text-purple-400' },
  { indent: 1, text: 'const [data, setData] = useState([]);', color: 'text-cyan-300' },
  { indent: 1, text: '', color: '' },
  { indent: 1, text: 'useEffect(() => {', color: 'text-yellow-300' },
  { indent: 2, text: 'fetchData().then(setData);', color: 'text-green-300' },
  { indent: 1, text: '}, []);', color: 'text-yellow-300' },
  { indent: 1, text: '', color: '' },
  { indent: 1, text: 'return (', color: 'text-purple-400' },
  { indent: 2, text: '<Dashboard', color: 'text-cyan-400' },
  { indent: 3, text: 'data={data}', color: 'text-orange-300' },
  { indent: 3, text: 'theme="dark"', color: 'text-green-400' },
  { indent: 3, text: 'animated={true}', color: 'text-orange-300' },
  { indent: 2, text: '/>', color: 'text-cyan-400' },
  { indent: 1, text: ');', color: 'text-purple-400' },
  { indent: 0, text: '}', color: 'text-purple-400' },
];

export default function CodePreview() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 150);
      return () => clearTimeout(timer);
    }
    // Reset after a pause
    const resetTimer = setTimeout(() => setVisibleLines(0), 3000);
    return () => clearTimeout(resetTimer);
  }, [visibleLines]);

  return (
    <div className="glass rounded-2xl overflow-hidden w-full max-w-lg">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-400 font-mono">app.jsx — Claude Code</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[340px]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
            <span className="text-gray-600 w-8 text-right mr-4 select-none text-xs leading-relaxed">
              {i + 1}
            </span>
            <span className={line.color} style={{ paddingLeft: `${line.indent * 20}px` }}>
              {line.text || "\u00A0"}
            </span>
          </div>
        ))}
        {visibleLines < codeLines.length && (
          <div className="flex items-center mt-1">
            <span className="text-gray-600 w-8 text-right mr-4 text-xs">{visibleLines + 1}</span>
            <span className="w-2 h-5 bg-indigo-400 animate-pulse rounded-sm" />
          </div>
        )}
      </div>
    </div>
  );
}
