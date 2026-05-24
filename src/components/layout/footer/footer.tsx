import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="border-t border-slate-200 bg-white px-5 py-8">
      <p class="mx-auto max-w-6xl text-sm text-slate-600">
        EduMoz - Aprender, Crescer e Brilhar.
      </p>
    </footer>
  );
});
