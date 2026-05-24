export type BillingCycle = "monthly" | "yearly" | "school";

export type PlanFeature = string;

export type Plan = {
  name: string;
  slug: string;
  audience: "Aluno" | "Pais" | "Escola";
  billingCycle: BillingCycle;
  features: PlanFeature[];
};
