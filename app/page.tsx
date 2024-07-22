import About from "@/components/About";
import Calendar from "@/components/Calendar";
import ContactUs from "@/components/ContactUs";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] text-white">
      <Hero />
      <About />
      <Courses />
      <Calendar />
      <ContactUs />
    </main>
  );
}
