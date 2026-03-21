"use client";

import { useState, useEffect } from "react";

function MetricCard({ label, value, suffix, color, icon }) {
  return (
    <div className="glass rounded-xl p-4 flex flex-col gap-1">
      <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider">
        <span>{icon}</span>
        {label}
      </div>
      <div className={`text-2xl font-bold ${color}`}>
        {value}
        <span className="text-sm font-normal text-gray-400 ml-1">{suffix}</span>
      </div>
    </div>
  );
}

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    linesWritten: 847,
    filesCreated: 6,
    buildTime: 1.2,
    lighthouse: 98,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((m) => ({
        linesWritten: m.linesWritten + Math.floor(Math.random() * 5),
        filesCreated: m.filesCreated + (Math.random() > 0.95 ? 1 : 0),
        buildTime: Math.max(0.8, m.buildTime + (Math.random() - 0.5) * 0.1),
        lighthouse: Math.min(100, Math.max(95, m.lighthouse + (Math.random() > 0.5 ? 1 : -1))),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        Live Metrics
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <MetricCard label="Lines Written" value={metrics.linesWritten} suffix="loc" color="text-cyan-400" icon="&lt;/&gt;" />
        <MetricCard label="Files Created" value={metrics.filesCreated} suffix="files" color="text-purple-400" icon="&#128193;" />
        <MetricCard label="Build Time" value={metrics.buildTime.toFixed(1)} suffix="sec" color="text-green-400" icon="&#9889;" />
        <MetricCard label="Lighthouse" value={metrics.lighthouse} suffix="/100" color="text-amber-400" icon="&#9733;" />
      </div>
    </div>
  );
}
