// app/page.tsx
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { Hero } from "../src/components/Hero";
import { WordCard } from "../src/components/WordCard";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10 space-y-12">
        <Hero />

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <WordCard
            word="Sankofa"
            meanings={{
              en: "A Twi word from Ghana meaning 'go back and get it' — symbolizing the importance of learning from the past.",
              local: "Sɛ wo werɛ fi na wosan kɔ fa a, ɛnyɛ bɔne.",
              fr: "Retourner chercher ce qui a été oublié — apprendre du passé."
            }}
            audioUrl="/audio/sankofa.mp3"
          />

          <WordCard
            word="Gbongu"
            meanings={{
              en: "A ceremonial drum used by chieftains in northern Sierra Leone to summon attention or mark events.",
              kr: "북부 시에라리온의 족장이 사용한 의식용 북.",
              local: "Bengbeng ti chiefman wɔr kɔl pipul."
            }}
          />

          <WordCard
            word="Kɔkɔ"
            meanings={{
              en: "A traditional porridge made from fermented millet, often served in cultural ceremonies.",
              local: "Kɔkɔ yɛ banke nɛ kpɔkpɔe, ji yɛdɔ wɔ ɔkpɔni.",
              ha: "Abinci na gargajiya daga gero mai tsami."
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
