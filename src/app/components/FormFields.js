"use client";

export function TextInput({ label, value, onChange, placeholder, hint }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm bg-white"
      />
    </div>
  );
}

export function TextArea({ label, value, onChange, placeholder, hint, rows = 4 }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm bg-white resize-y"
      />
    </div>
  );
}

export function SelectInput({ label, value, onChange, options, hint }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm bg-white"
      >
        <option value="">-- Selectionner --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}
