import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../components/layout/header/header";

const subjects = [
  { name: "Matematica", progress: "42%", status: "2 aulas por concluir" },
  { name: "Lingua Portuguesa", progress: "68%", status: "Quiz disponivel" },
  { name: "Ciencias Naturais", progress: "25%", status: "Novo modulo" },
];

export default component$(() => {
  return (
    <>
      <Header />
      <main class="mx-auto max-w-6xl px-5 py-12">
        <section class="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p class="text-sm font-semibold uppercase text-edumoz-blue">
              Area do Aluno
            </p>
            <h1 class="mt-3 text-4xl font-bold text-edumoz-blue-dark">
              Bem-vindo ao teu espaco de estudo.
            </h1>
            <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Acompanha disciplinas, aulas, quizzes e progresso a partir de um
              painel simples.
            </p>
          </div>

          <aside class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-sm font-semibold text-slate-500">Progresso geral</p>
            <p class="mt-2 text-4xl font-bold text-edumoz-blue">48%</p>
            <div class="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
              <div class="h-full w-[48%] rounded-full bg-edumoz-yellow"></div>
            </div>
          </aside>
        </section>

        <section class="mt-10 grid gap-4 md:grid-cols-3">
          {subjects.map((subject) => (
            <article
              class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              key={subject.name}
            >
              <h2 class="text-xl font-bold text-edumoz-blue-dark">
                {subject.name}
              </h2>
              <p class="mt-2 text-sm text-slate-600">{subject.status}</p>
              <p class="mt-5 text-2xl font-bold text-edumoz-blue">
                {subject.progress}
              </p>
            </article>
          ))}
        </section>
      </main>
    </>
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
