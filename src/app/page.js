import FeatureCard from "./components/FeatureCard";
import CodePreview from "./components/CodePreview";
import TaskTracker from "./components/TaskTracker";
import LiveMetrics from "./components/LiveMetrics";

const features = [
  {
    icon: "\u2728",
    title: "Full-Stack Generation",
    description:
      "From React components to API routes, Claude Code scaffolds entire features with production-ready code.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: "\uD83D\uDD0D",
    title: "Codebase Understanding",
    description:
      "Instantly navigates complex codebases, understands architecture, and makes targeted changes across files.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: "\uD83D\uDEE0\uFE0F",
    title: "Debugging & Fixes",
    description:
      "Identifies bugs, traces errors through the stack, and applies precise fixes with full context awareness.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Build & Deploy",
    description:
      "Runs tests, checks builds, resolves errors, and ensures everything works before pushing to production.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: "\uD83C\uDFA8",
    title: "UI/UX Design",
    description:
      "Creates beautiful, responsive interfaces with modern design patterns, animations, and accessibility baked in.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: "\uD83E\uDDE9",
    title: "Iterative Refinement",
    description:
      "Refines code through multiple passes — optimizing performance, readability, and maintainability.",
    gradient: "from-violet-500 to-fuchsia-600",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Built entirely by Claude Code
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            Code at the
            <br />
            Speed of Thought
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Claude Code understands your codebase, writes production-ready code,
            and ships features — all from natural language.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#features"
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              Explore Features
            </a>
            <a
              href="#demo"
              className="px-8 py-3 glass rounded-xl text-gray-300 font-medium hover:bg-white/10 transition-colors"
            >
              See it Live
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce text-gray-500">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Claude Code Can Do
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From ideation to deployment — Claude Code handles every step of the
            development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            These interactive components were generated entirely by Claude Code
            — including the animations, state management, and styling.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <CodePreview />
          <div className="flex flex-col gap-8 w-full max-w-md">
            <TaskTracker />
            <LiveMetrics />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            This entire application was designed, coded, and shipped by{" "}
            <span className="text-indigo-400 font-medium">Claude Code</span>{" "}
            — Anthropic&apos;s AI coding agent.
          </p>
        </div>
      </footer>
    </main>
  );
}
