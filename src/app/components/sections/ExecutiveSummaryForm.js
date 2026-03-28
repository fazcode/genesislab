"use client";

import { useBusinessPlan } from "../BusinessPlanContext";
import { TextInput, TextArea, SectionHeader } from "../FormFields";

export default function ExecutiveSummaryForm() {
  const { data, updateSection } = useBusinessPlan();
  const s = data.executiveSummary;
  const update = (field, value) => updateSection("executiveSummary", { [field]: value });

  return (
    <div>
      <SectionHeader
        title="Resume executif"
        subtitle="Presentez votre projet de maniere synthetique. C'est la premiere chose que liront vos investisseurs."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <TextInput
          label="Nom du projet"
          value={s.projectName}
          onChange={(v) => update("projectName", v)}
          placeholder="Ex: TechFood"
        />
        <TextInput
          label="Slogan / Tagline"
          value={s.tagline}
          onChange={(v) => update("tagline", v)}
          placeholder="Ex: La livraison de repas reinventee"
        />
      </div>
      <TextArea
        label="Mission"
        value={s.mission}
        onChange={(v) => update("mission", v)}
        placeholder="Quelle est la raison d'etre de votre entreprise ?"
        hint="Decrivez en quelques phrases pourquoi votre entreprise existe"
      />
      <TextArea
        label="Vision"
        value={s.vision}
        onChange={(v) => update("vision", v)}
        placeholder="Ou voyez-vous votre entreprise dans 5 ans ?"
        hint="Decrivez l'ambition a long terme"
      />
      <TextArea
        label="Objectifs principaux"
        value={s.objectives}
        onChange={(v) => update("objectives", v)}
        placeholder="1. Atteindre 1000 clients en 6 mois&#10;2. Lever 500k EUR&#10;3. ..."
        hint="Listez 3 a 5 objectifs mesurables"
      />
      <TextInput
        label="Financement recherche"
        value={s.fundingNeeded}
        onChange={(v) => update("fundingNeeded", v)}
        placeholder="Ex: 250 000 EUR"
      />
    </div>
  );
}
