import { component$ } from "@builder.io/qwik";

const benefits = [
  "Conteudos alinhados ao curriculo nacional",
  "Exercicios com feedback imediato",
  "Progresso visivel para alunos e pais",
];

export const BenefitsSection = component$(() => {
  return (
    <section class="bg-white px-5 py-16">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-edumoz-blue-dark">Beneficios</h2>
        <ul class="mt-8 grid gap-4 md:grid-cols-3">
        {benefits.map((benefit) => (
          <li
            class="rounded-lg border border-slate-200 bg-slate-50 p-5 text-slate-700"
            key={benefit}
          >
            {benefit}
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
});
