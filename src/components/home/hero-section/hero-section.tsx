import { component$ } from "@builder.io/qwik";

export const HeroSection = component$(() => {
  return (
    <section class="mx-auto grid min-h-[520px] w-full max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-wide text-edumoz-blue">
          Educacao online para Mocambique
        </p>
        <h1 class="max-w-3xl text-4xl font-bold leading-tight text-edumoz-blue-dark md:text-6xl">
          EduMoz: aprender nunca foi tao facil.
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Conteudos, exercicios e acompanhamento para estudantes da 1a a 12a
          classe.
        </p>
        <a
          class="mt-8 inline-flex rounded-md bg-edumoz-yellow px-5 py-3 font-semibold text-edumoz-blue-dark hover:bg-yellow-300"
          href="/solicitar-acesso"
        >
          Solicitar acesso
        </a>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold text-edumoz-blue">MVP inicial</p>
        <p class="mt-3 text-3xl font-bold text-edumoz-blue-dark">1a - 12a</p>
        <p class="mt-2 text-slate-600">
          Classes, disciplinas, aulas e progresso organizados num unico lugar.
        </p>
      </div>
    </section>
  );
});
