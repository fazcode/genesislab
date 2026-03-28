"use client";

import { useBusinessPlan } from "../BusinessPlanContext";
import { TextInput, TextArea, SectionHeader } from "../FormFields";

export default function MarketForm() {
  const { data, updateSection } = useBusinessPlan();
  const s = data.market;
  const update = (field, value) => updateSection("market", { [field]: value });

  return (
    <div>
      <SectionHeader
        title="Analyse de marche"
        subtitle="Demontrez que vous connaissez votre marche et votre positionnement."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <TextInput
          label="Marche cible"
          value={s.targetMarket}
          onChange={(v) => update("targetMarket", v)}
          placeholder="Ex: Marche de la livraison de repas en France"
        />
        <TextInput
          label="Taille du marche"
          value={s.marketSize}
          onChange={(v) => update("marketSize", v)}
          placeholder="Ex: 7 milliards EUR en 2025, croissance de 15%/an"
        />
      </div>
      <TextArea
        label="Tendances du marche"
        value={s.trends}
        onChange={(v) => update("trends", v)}
        placeholder="Quelles sont les grandes tendances qui favorisent votre activite ?"
        hint="Croissance du digital, changement de comportement des consommateurs, etc."
      />
      <TextArea
        label="Clients cibles"
        value={s.targetCustomers}
        onChange={(v) => update("targetCustomers", v)}
        placeholder="Decrivez votre persona client ideal (age, revenus, habitudes...)"
        hint="Soyez precis : segment B2B/B2C, taille d'entreprise, demographiques..."
      />
      <TextArea
        label="Besoins des clients"
        value={s.customerNeeds}
        onChange={(v) => update("customerNeeds", v)}
        placeholder="Quels problemes resolvez-vous pour vos clients ?"
      />
      <TextArea
        label="Concurrents principaux"
        value={s.competitors}
        onChange={(v) => update("competitors", v)}
        placeholder="Listez vos concurrents directs et indirects et leur positionnement"
        hint="Nom, forces, faiblesses, part de marche estimee"
      />
      <TextArea
        label="Avantage concurrentiel"
        value={s.competitiveAdvantage}
        onChange={(v) => update("competitiveAdvantage", v)}
        placeholder="Qu'est-ce qui vous differencie de la concurrence ?"
      />
    </div>
  );
}
