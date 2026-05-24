import { component$, Slot } from "@builder.io/qwik";

export const Card = component$(() => {
  return (
    <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <Slot />
    </article>
  );
});
