export default function FeatureCard({ icon, title, description, gradient }) {
  return (
    <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-indigo-500/30 group cursor-default">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
