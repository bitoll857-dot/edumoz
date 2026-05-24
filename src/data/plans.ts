import type { Plan } from "../types/plan";

export const plans: Plan[] = [
  {
    name: "Individual",
    slug: "individual",
    audience: "Aluno",
    billingCycle: "monthly",
    features: ["Aulas", "Exercicios", "Progresso"],
  },
  {
    name: "Familia",
    slug: "familia",
    audience: "Pais",
    billingCycle: "monthly",
    features: ["Multiplos filhos", "Relatorios", "Acompanhamento"],
  },
];
