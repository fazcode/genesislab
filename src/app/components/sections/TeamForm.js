"use client";

import { useBusinessPlan } from "../BusinessPlanContext";
import { TextArea, SectionHeader } from "../FormFields";

export default function TeamForm() {
  const { data, updateSection } = useBusinessPlan();
  const s = data.team;
  const update = (field, value) => updateSection("team", { [field]: value });

  return (
    <div>
      <SectionHeader
        title="Equipe"
        subtitle="Presentez les personnes cles qui portent le projet."
      />
      <TextArea
        label="Fondateur(s)"
        value={s.founders}
        onChange={(v) => update("founders", v)}
        placeholder="Nom, parcours, competences cles, role dans le projet"
        hint="Les investisseurs investissent dans les equipes avant tout"
        rows={5}
      />
      <TextArea
        label="Membres cles de l'equipe"
        value={s.keyMembers}
        onChange={(v) => update("keyMembers", v)}
        placeholder="CTO, Directeur commercial, etc. - leur experience et leur role"
        rows={4}
      />
      <TextArea
        label="Organisation"
        value={s.organigram}
        onChange={(v) => update("organigram", v)}
        placeholder="Decrivez l'organisation de l'equipe et les responsabilites"
      />
      <TextArea
        label="Plan de recrutement"
        value={s.hiringPlan}
        onChange={(v) => update("hiringPlan", v)}
        placeholder="Quels profils prevoyez-vous de recruter et quand ?"
        hint="Ex: 1 developpeur a M+3, 1 commercial a M+6..."
      />
      <TextArea
        label="Conseillers & mentors"
        value={s.advisors}
        onChange={(v) => update("advisors", v)}
        placeholder="Experts, mentors, board d'advisors..."
      />
    </div>
  );
}
