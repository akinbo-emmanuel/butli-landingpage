import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] text-white">
      <Hero />
      <About />
    </main>
  );
}
