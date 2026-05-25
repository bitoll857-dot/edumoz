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
            Pre-registo
          </p>
          <h1 class="mt-3 text-4xl font-bold text-edumoz-blue-dark">
            Solicitar acesso
          </h1>
          <p class="mt-4 text-lg leading-8 text-slate-600">
            Regista o interesse para aluno, familia, professor ou escola e
            prepara a entrada na primeira versao da EduMoz.
          </p>
        </section>

        <form class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-5 md:grid-cols-2">
            <div>
              <label
                class="block text-sm font-semibold text-slate-700"
                for="name"
              >
                Nome
              </label>
              <input
                class="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-edumoz-blue"
                id="name"
                placeholder="Nome completo"
                type="text"
              />
            </div>

            <div>
              <label
                class="block text-sm font-semibold text-slate-700"
                for="profile"
              >
                Perfil
              </label>
              <select
                class="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-edumoz-blue"
                id="profile"
              >
                <option>Aluno</option>
                <option>Pai ou encarregado</option>
                <option>Professor</option>
                <option>Escola</option>
              </select>
            </div>
          </div>

          <label class="mt-5 block text-sm font-semibold text-slate-700" for="email">
            Email ou contacto
          </label>
          <input
            class="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-edumoz-blue"
            id="email"
            placeholder="Email ou numero de telefone"
            type="text"
          />

          <label
            class="mt-5 block text-sm font-semibold text-slate-700"
            for="message"
          >
            Mensagem
          </label>
          <textarea
            class="mt-2 min-h-32 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-edumoz-blue"
            id="message"
            placeholder="Conte-nos qual classe, disciplina ou necessidade procura."
          ></textarea>

          <button
            class="mt-6 w-full rounded-md bg-edumoz-blue px-4 py-3 font-semibold text-white hover:bg-edumoz-blue-dark"
            type="button"
          >
            Enviar pedido
          </button>
        </form>
      </main>
    </>
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
