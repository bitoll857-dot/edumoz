import { component$, type QRL } from "@builder.io/qwik";

type AccessibilityButtonProps = {
  onClick$: QRL<() => void>;
};

export default component$<AccessibilityButtonProps>(({ onClick$ }) => {
  return (
    <button
      type="button"
      aria-label="Abrir opcoes de acessibilidade"
      class="flex size-10 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-black text-edumoz-blue transition duration-300 hover:border-edumoz-blue hover:bg-slate-50"
      onClick$={onClick$}
    >
      A
    </button>
  );
});
