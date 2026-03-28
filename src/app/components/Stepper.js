"use client";

import { useBusinessPlan } from "./BusinessPlanContext";

const STEPS = [
  { key: "executiveSummary", label: "Resume executif", icon: "📋" },
  { key: "company", label: "Entreprise", icon: "🏢" },
  { key: "market", label: "Marche", icon: "📊" },
  { key: "products", label: "Produits / Services", icon: "💡" },
  { key: "marketing", label: "Strategie marketing", icon: "📢" },
  { key: "financial", label: "Plan financier", icon: "💰" },
  { key: "team", label: "Equipe", icon: "👥" },
  { key: "summary", label: "Apercu", icon: "📄" },
];

export { STEPS };

export default function Stepper() {
  const { currentStep, setCurrentStep, getCompletionPercentage } =
    useBusinessPlan();
  const completion = getCompletionPercentage();

  return (
    <div className="no-print">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${completion}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
          {completion}%
        </span>
      </div>

      <nav className="flex flex-wrap gap-1 mb-6">
        {STEPS.map((step, index) => {
          const isActive = index === currentStep;
          const isPast = index < currentStep;
          return (
            <button
              key={step.key}
              onClick={() => setCurrentStep(index)}
              className={`
                flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : isPast
                      ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }
              `}
            >
              <span className="text-base">{step.icon}</span>
              <span className="hidden sm:inline">{step.label}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
