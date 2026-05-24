import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="mx-auto max-w-6xl px-5 py-16">
      <h1 class="text-4xl font-bold text-edumoz-blue-dark">Area do Aluno</h1>
      <p class="mt-4 max-w-2xl text-lg text-slate-600">
        Dashboard inicial para acompanhar aulas, exercicios e progresso.
      </p>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Area do Aluno | EduMoz",
  meta: [
    {
      name: "description",
      content: "Area inicial do aluno na plataforma EduMoz.",
    },
  ],
};
