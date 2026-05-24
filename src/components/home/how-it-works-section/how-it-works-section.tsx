import { component$ } from "@builder.io/qwik";

const steps = [
  "Escolha a classe e a disciplina",
  "Acesse aulas e exercicios",
  "Acompanhe o progresso",
];

export const HowItWorksSection = component$(() => {
  return (
    <section class="px-5 py-16">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-edumoz-blue-dark">Como funciona</h2>
        <ol class="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
          <li class="rounded-lg bg-edumoz-blue p-5 text-white" key={step}>
            <span class="text-sm font-semibold text-edumoz-yellow">
              Passo {index + 1}
            </span>
            <p class="mt-2 text-lg font-semibold">{step}</p>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
});
