"use client";

import { useBusinessPlan } from "../BusinessPlanContext";

function SummarySection({ title, icon, fields }) {
  const hasContent = fields.some(([, value]) => value && value.trim() !== "");
  if (!hasContent) return null;

  return (
    <div className="mb-8 break-inside-avoid">
      <h3 className="text-lg font-bold text-blue-700 border-b-2 border-blue-200 pb-2 mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      <div className="space-y-2">
        {fields.map(
          ([label, value]) =>
            value &&
            value.trim() !== "" && (
              <div key={label}>
                <span className="text-sm font-semibold text-gray-600">
                  {label} :
                </span>
                <p className="text-gray-800 whitespace-pre-line ml-1 mt-0.5">
                  {value}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default function SummaryView() {
  const { data, getCompletionPercentage, resetPlan } = useBusinessPlan();
  const completion = getCompletionPercentage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="no-print mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Apercu du Business Plan
        </h2>
        <p className="text-gray-500 mb-4">
          Relisez votre business plan avant de l&apos;exporter.
          Completude : {completion}%
        </p>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm flex items-center gap-2"
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
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Exporter en PDF
          </button>
          <button
            onClick={() => {
              if (window.confirm("Etes-vous sur de vouloir tout reinitialiser ? Cette action est irreversible.")) {
                resetPlan();
              }
            }}
            className="px-5 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition font-medium text-sm border border-red-200"
          >
            Reinitialiser
          </button>
        </div>
      </div>

      {/* Printable content */}
      <div className="print-only hidden mb-8">
        <h1 className="text-3xl font-bold text-center mb-1">
          {data.executiveSummary.projectName || "Business Plan"}
        </h1>
        {data.executiveSummary.tagline && (
          <p className="text-center text-gray-500 italic text-lg">
            {data.executiveSummary.tagline}
          </p>
        )}
        <hr className="my-4" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        {data.executiveSummary.projectName && (
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {data.executiveSummary.projectName}
            </h2>
            {data.executiveSummary.tagline && (
              <p className="text-gray-500 italic text-lg mt-1">
                {data.executiveSummary.tagline}
              </p>
            )}
          </div>
        )}

        <SummarySection
          title="Resume executif"
          icon="📋"
          fields={[
            ["Mission", data.executiveSummary.mission],
            ["Vision", data.executiveSummary.vision],
            ["Objectifs", data.executiveSummary.objectives],
            ["Financement recherche", data.executiveSummary.fundingNeeded],
          ]}
        />

        <SummarySection
          title="L'entreprise"
          icon="🏢"
          fields={[
            ["Denomination", data.company.legalName],
            ["Forme juridique", data.company.legalForm],
            ["Date de creation", data.company.creationDate],
            ["Siege social", data.company.address],
            ["Secteur", data.company.sector],
            ["Stade", data.company.stage],
            ["Description", data.company.description],
          ]}
        />

        <SummarySection
          title="Analyse de marche"
          icon="📊"
          fields={[
            ["Marche cible", data.market.targetMarket],
            ["Taille du marche", data.market.marketSize],
            ["Tendances", data.market.trends],
            ["Clients cibles", data.market.targetCustomers],
            ["Besoins clients", data.market.customerNeeds],
            ["Concurrents", data.market.competitors],
            ["Avantage concurrentiel", data.market.competitiveAdvantage],
          ]}
        />

        <SummarySection
          title="Produits & Services"
          icon="💡"
          fields={[
            ["Description", data.products.description],
            ["Proposition de valeur", data.products.valueProposition],
            ["Tarification", data.products.pricing],
            ["Cycle de vie", data.products.lifecycle],
            ["Propriete intellectuelle", data.products.intellectualProperty],
          ]}
        />

        <SummarySection
          title="Strategie marketing"
          icon="📢"
          fields={[
            ["Positionnement", data.marketing.positioning],
            ["Canaux de distribution", data.marketing.channels],
            ["Strategie d'acquisition", data.marketing.acquisitionStrategy],
            ["Budget communication", data.marketing.communicationBudget],
            ["Partenariats", data.marketing.partnerships],
            ["Objectifs commerciaux", data.marketing.salesGoals],
          ]}
        />

        <SummarySection
          title="Plan financier"
          icon="💰"
          fields={[
            ["Couts de demarrage", data.financial.startupCosts],
            ["Depenses mensuelles", data.financial.monthlyExpenses],
            ["Modele de revenus", data.financial.revenueModel],
            ["CA Annee 1", data.financial.revenueProjectionY1],
            ["CA Annee 2", data.financial.revenueProjectionY2],
            ["CA Annee 3", data.financial.revenueProjectionY3],
            ["Point mort", data.financial.breakEvenPoint],
            ["Sources de financement", data.financial.fundingSources],
          ]}
        />

        <SummarySection
          title="Equipe"
          icon="👥"
          fields={[
            ["Fondateurs", data.team.founders],
            ["Membres cles", data.team.keyMembers],
            ["Organisation", data.team.organigram],
            ["Plan de recrutement", data.team.hiringPlan],
            ["Conseillers", data.team.advisors],
          ]}
        />

        {completion === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-5xl mb-4">📝</p>
            <p className="text-lg">
              Votre business plan est vide. Commencez par remplir les differentes
              sections.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
