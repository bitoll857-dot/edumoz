import { component$ } from "@builder.io/qwik";
import { subjects } from "../../../data/subjects";

export const SubjectsSection = component$(() => {
  return (
    <section class="bg-white px-5 py-16">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-edumoz-blue-dark">
          Disciplinas iniciais
        </h2>
        <ul class="mt-8 grid gap-4 md:grid-cols-3">
        {subjects.map((subject) => (
          <li
            class="rounded-lg border border-slate-200 bg-slate-50 p-5"
            key={subject.slug}
          >
            <strong class="block text-lg text-edumoz-blue-dark">
              {subject.name}
            </strong>
            <span class="mt-2 block text-sm text-slate-600">
              {subject.level}
            </span>
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
});
