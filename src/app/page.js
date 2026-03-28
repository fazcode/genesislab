"use client";

import { BusinessPlanProvider, useBusinessPlan } from "./components/BusinessPlanContext";
import Stepper, { STEPS } from "./components/Stepper";
import ExecutiveSummaryForm from "./components/sections/ExecutiveSummaryForm";
import CompanyForm from "./components/sections/CompanyForm";
import MarketForm from "./components/sections/MarketForm";
import ProductsForm from "./components/sections/ProductsForm";
import MarketingForm from "./components/sections/MarketingForm";
import FinancialForm from "./components/sections/FinancialForm";
import TeamForm from "./components/sections/TeamForm";
import SummaryView from "./components/sections/SummaryView";

const SECTION_COMPONENTS = [
  ExecutiveSummaryForm,
  CompanyForm,
  MarketForm,
  ProductsForm,
  MarketingForm,
  FinancialForm,
  TeamForm,
  SummaryView,
];

function BusinessPlanWizard() {
  const { currentStep, setCurrentStep, loaded } = useBusinessPlan();

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gray-400 text-lg">Chargement...</div>
      </div>
    );
  }

  const CurrentSection = SECTION_COMPONENTS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === STEPS.length - 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 no-print">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">GenesisLab</h1>
              <p className="text-xs text-gray-500">Business Plan Builder</p>
            </div>
          </div>
          <span className="text-sm text-gray-400 hidden sm:block">
            Sauvegarde automatique
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Stepper />

        {/* Current Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <CurrentSection />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 no-print">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={isFirst}
            className={`px-6 py-2.5 rounded-lg font-medium text-sm transition flex items-center gap-2
              ${
                isFirst
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Precedent
          </button>
          {!isLast && (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm flex items-center gap-2"
            >
              Suivant
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          {isLast && (
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Exporter en PDF
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print text-center py-6 text-xs text-gray-400">
        GenesisLab Business Plan Builder - Vos donnees restent sur votre navigateur
      </footer>
    </div>
  );
}

export default function HomePage() {
  return (
    <BusinessPlanProvider>
      <BusinessPlanWizard />
    </BusinessPlanProvider>
  );
}
