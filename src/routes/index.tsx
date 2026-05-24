import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BenefitsSection } from "../components/home/benefits-section/benefits-section";
import { HeroSection } from "../components/home/hero-section/hero-section";
import { HowItWorksSection } from "../components/home/how-it-works-section/how-it-works-section";
import { SubjectsSection } from "../components/home/subjects-section/subjects-section";
import { Footer } from "../components/layout/footer/footer";
import { Header } from "../components/layout/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SubjectsSection />
        <HowItWorksSection />
        <BenefitsSection />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "EduMoz | Aprender, Crescer e Brilhar",
  meta: [
    {
      name: "description",
      content:
        "Plataforma de educacao online para estudantes da 1a a 12a classe em Mocambique.",
    },
  ],
};
