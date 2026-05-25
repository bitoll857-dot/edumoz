import { component$, Slot } from "@builder.io/qwik";
import type { QwikIntrinsicElements } from "@builder.io/qwik";

type ButtonProps = {
  href?: string;
  fullWidth?: boolean;
} & QwikIntrinsicElements["button"];

export const Button = component$<ButtonProps>(
  ({ href, fullWidth, class: className, ...props }) => {
    const baseClass =
      "inline-flex rounded-md bg-edumoz-blue px-4 py-2 font-semibold text-white hover:bg-edumoz-blue-dark";

    const widthClass = fullWidth ? " w-full justify-center" : "";

    const finalClass = `${baseClass}${widthClass} ${className ?? ""}`;

    if (href) {
      return (
        <a class={finalClass} href={href}>
          <Slot />
        </a>
      );
    }

    return (
      <button
        class={finalClass}
        type="button"
        {...props}
      >
        <Slot />
      </button>
    );
  }
);