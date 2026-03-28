"use client";

import { useBusinessPlan } from "../BusinessPlanContext";
import { TextInput, TextArea, SectionHeader } from "../FormFields";

export default function FinancialForm() {
  const { data, updateSection } = useBusinessPlan();
  const s = data.financial;
  const update = (field, value) => updateSection("financial", { [field]: value });

  return (
    <div>
      <SectionHeader
        title="Plan financier"
        subtitle="Presentez vos previsions financieres et votre modele economique."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <TextInput
          label="Couts de demarrage"
          value={s.startupCosts}
          onChange={(v) => update("startupCosts", v)}
          placeholder="Ex: 50 000 EUR"
          hint="Investissement initial necessaire"
        />
        <TextInput
          label="Depenses mensuelles estimees"
          value={s.monthlyExpenses}
          onChange={(v) => update("monthlyExpenses", v)}
          placeholder="Ex: 8 000 EUR/mois"
          hint="Salaires, loyer, outils, marketing..."
        />
      </div>
      <TextArea
        label="Modele de revenus"
        value={s.revenueModel}
        onChange={(v) => update("revenueModel", v)}
        placeholder="Comment gagnez-vous de l'argent ? (abonnement, commission, vente directe...)"
        hint="Detaillez chaque source de revenu"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
        <TextInput
          label="CA previsionnel Annee 1"
          value={s.revenueProjectionY1}
          onChange={(v) => update("revenueProjectionY1", v)}
          placeholder="Ex: 120 000 EUR"
        />
        <TextInput
          label="CA previsionnel Annee 2"
          value={s.revenueProjectionY2}
          onChange={(v) => update("revenueProjectionY2", v)}
          placeholder="Ex: 350 000 EUR"
        />
        <TextInput
          label="CA previsionnel Annee 3"
          value={s.revenueProjectionY3}
          onChange={(v) => update("revenueProjectionY3", v)}
          placeholder="Ex: 800 000 EUR"
        />
      </div>
      <TextInput
        label="Point mort (break-even)"
        value={s.breakEvenPoint}
        onChange={(v) => update("breakEvenPoint", v)}
        placeholder="Ex: Mois 14 apres le lancement"
        hint="Quand l'entreprise commencera-t-elle a etre rentable ?"
      />
      <TextArea
        label="Sources de financement"
        value={s.fundingSources}
        onChange={(v) => update("fundingSources", v)}
        placeholder="Fonds propres, love money, pret bancaire, levee de fonds, subventions..."
        hint="Detaillez le montant par source"
      />
    </div>
  );
}
