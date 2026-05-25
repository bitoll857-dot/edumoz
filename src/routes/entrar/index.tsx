import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../components/layout/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[0.9fr_1.1fr]">
        <section>
          <p class="text-sm font-semibold uppercase text-edumoz-blue">
            Acesso
          </p>
          <h1 class="mt-3 text-4xl font-bold text-edumoz-blue-dark">Entrar</h1>
          <p class="mt-4 text-lg leading-8 text-slate-600">
            Area para alunos, pais, professores e escolas acompanharem o
            percurso de aprendizagem.
          </p>
        </section>

        <form class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <label class="block text-sm font-semibold text-slate-700" for="email">
            Email
          </label>
          <input
            class="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-edumoz-blue"
            id="email"
            placeholder="exemplo@email.com"
            type="email"
          />

          <label
            class="mt-5 block text-sm font-semibold text-slate-700"
            for="password"
          >
            Palavra-passe
          </label>
          <input
            class="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-edumoz-blue"
            id="password"
            placeholder="A tua palavra-passe"
            type="password"
          />

          <button
            class="mt-6 w-full rounded-md bg-edumoz-blue px-4 py-3 font-semibold text-white hover:bg-edumoz-blue-dark"
            type="button"
          >
            Entrar na plataforma
          </button>
        </form>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Entrar | EduMoz",
  meta: [
    {
      name: "description",
      content: "Pagina de entrada da plataforma EduMoz.",
    },
  ],
};
