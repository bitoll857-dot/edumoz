import { component$, Slot } from "@builder.io/qwik";

type ButtonProps = {
  href?: string;
};

export const Button = component$<ButtonProps>(({ href }) => {
  const className =
    "inline-flex rounded-md bg-edumoz-blue px-4 py-2 font-semibold text-white hover:bg-edumoz-blue-dark";

  if (href) {
    return (
      <a class={className} href={href}>
        <Slot />
      </a>
    );
  }

  return (
    <button class={className} type="button">
      <Slot />
    </button>
  );
});
