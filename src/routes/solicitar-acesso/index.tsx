import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="mx-auto max-w-6xl px-5 py-16">
      <h1 class="text-4xl font-bold text-edumoz-blue-dark">
        Solicitar acesso
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-slate-600">
        Pre-registo para alunos, familias, professores e escolas.
      </p>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Solicitar acesso | EduMoz",
  meta: [
    {
      name: "description",
      content: "Pre-registo para acesso a plataforma EduMoz.",
    },
  ],
};
