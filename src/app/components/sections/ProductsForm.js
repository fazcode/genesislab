"use client";

import { useBusinessPlan } from "../BusinessPlanContext";
import { TextInput, TextArea, SectionHeader } from "../FormFields";

export default function ProductsForm() {
  const { data, updateSection } = useBusinessPlan();
  const s = data.products;
  const update = (field, value) => updateSection("products", { [field]: value });

  return (
    <div>
      <SectionHeader
        title="Produits & Services"
        subtitle="Detaillez votre offre et ce qui la rend unique."
      />
      <TextArea
        label="Description des produits / services"
        value={s.description}
        onChange={(v) => update("description", v)}
        placeholder="Decrivez en detail ce que vous proposez a vos clients"
        rows={5}
      />
      <TextArea
        label="Proposition de valeur"
        value={s.valueProposition}
        onChange={(v) => update("valueProposition", v)}
        placeholder="Pourquoi un client choisirait-il votre solution plutot qu'une autre ?"
        hint="Focalisez-vous sur le benefice client, pas sur les fonctionnalites"
      />
      <TextArea
        label="Grille tarifaire"
        value={s.pricing}
        onChange={(v) => update("pricing", v)}
        placeholder="Decrivez votre politique de prix (forfaits, abonnements, a l'unite...)"
        hint="Mentionnez les marges visees si possible"
      />
      <TextArea
        label="Cycle de vie du produit"
        value={s.lifecycle}
        onChange={(v) => update("lifecycle", v)}
        placeholder="Feuille de route, evolutions prevues, versions futures..."
      />
      <TextInput
        label="Propriete intellectuelle"
        value={s.intellectualProperty}
        onChange={(v) => update("intellectualProperty", v)}
        placeholder="Brevets, marques deposees, droits d'auteur, secrets commerciaux..."
      />
    </div>
  );
}
