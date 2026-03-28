"use client";

import { useBusinessPlan } from "../BusinessPlanContext";
import { TextInput, TextArea, SelectInput, SectionHeader } from "../FormFields";

export default function CompanyForm() {
  const { data, updateSection } = useBusinessPlan();
  const s = data.company;
  const update = (field, value) => updateSection("company", { [field]: value });

  return (
    <div>
      <SectionHeader
        title="Description de l'entreprise"
        subtitle="Informations juridiques et generales sur votre structure."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <TextInput
          label="Denomination sociale"
          value={s.legalName}
          onChange={(v) => update("legalName", v)}
          placeholder="Ex: TechFood SAS"
        />
        <SelectInput
          label="Forme juridique"
          value={s.legalForm}
          onChange={(v) => update("legalForm", v)}
          options={[
            { value: "SAS", label: "SAS" },
            { value: "SARL", label: "SARL" },
            { value: "SA", label: "SA" },
            { value: "EURL", label: "EURL" },
            { value: "Auto-entrepreneur", label: "Auto-entrepreneur" },
            { value: "SCI", label: "SCI" },
            { value: "Association", label: "Association" },
            { value: "Autre", label: "Autre" },
          ]}
        />
        <TextInput
          label="Date de creation (prevue)"
          value={s.creationDate}
          onChange={(v) => update("creationDate", v)}
          placeholder="Ex: Janvier 2026"
        />
        <TextInput
          label="Adresse du siege"
          value={s.address}
          onChange={(v) => update("address", v)}
          placeholder="Ex: 12 rue de la Paix, 75002 Paris"
        />
        <TextInput
          label="Secteur d'activite"
          value={s.sector}
          onChange={(v) => update("sector", v)}
          placeholder="Ex: FoodTech / Restauration"
        />
        <SelectInput
          label="Stade du projet"
          value={s.stage}
          onChange={(v) => update("stage", v)}
          options={[
            { value: "Idee", label: "Idee / Concept" },
            { value: "MVP", label: "MVP / Prototype" },
            { value: "Lancement", label: "Phase de lancement" },
            { value: "Croissance", label: "En croissance" },
            { value: "Maturite", label: "Entreprise mature" },
          ]}
        />
      </div>
      <TextArea
        label="Description de l'activite"
        value={s.description}
        onChange={(v) => update("description", v)}
        placeholder="Decrivez votre activite principale, vos produits ou services..."
        rows={5}
      />
    </div>
  );
}
