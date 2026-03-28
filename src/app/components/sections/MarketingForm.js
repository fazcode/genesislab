"use client";

import { useBusinessPlan } from "../BusinessPlanContext";
import { TextInput, TextArea, SectionHeader } from "../FormFields";

export default function MarketingForm() {
  const { data, updateSection } = useBusinessPlan();
  const s = data.marketing;
  const update = (field, value) => updateSection("marketing", { [field]: value });

  return (
    <div>
      <SectionHeader
        title="Strategie marketing"
        subtitle="Comment allez-vous atteindre et convaincre vos clients ?"
      />
      <TextArea
        label="Positionnement"
        value={s.positioning}
        onChange={(v) => update("positioning", v)}
        placeholder="Comment souhaitez-vous etre percu sur le marche ?"
        hint="Premium, low-cost, specialiste, innovant..."
      />
      <TextArea
        label="Canaux de distribution"
        value={s.channels}
        onChange={(v) => update("channels", v)}
        placeholder="Par quels canaux allez-vous vendre ? (en ligne, boutique, revendeurs...)"
      />
      <TextArea
        label="Strategie d'acquisition"
        value={s.acquisitionStrategy}
        onChange={(v) => update("acquisitionStrategy", v)}
        placeholder="Comment allez-vous attirer vos premiers clients ?"
        hint="SEO, reseaux sociaux, publicite payante, bouche-a-oreille, partenariats..."
      />
      <TextInput
        label="Budget communication"
        value={s.communicationBudget}
        onChange={(v) => update("communicationBudget", v)}
        placeholder="Ex: 2000 EUR/mois la premiere annee"
      />
      <TextArea
        label="Partenariats envisages"
        value={s.partnerships}
        onChange={(v) => update("partnerships", v)}
        placeholder="Partenaires strategiques, distributeurs, influenceurs..."
      />
      <TextInput
        label="Objectifs commerciaux"
        value={s.salesGoals}
        onChange={(v) => update("salesGoals", v)}
        placeholder="Ex: 100 clients/mois a 6 mois, 500 clients/mois a 1 an"
      />
    </div>
  );
}
