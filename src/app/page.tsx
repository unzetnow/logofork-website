import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <section
      id="homepage"
      className="dark:bg-zinc-950 selection:bg-black selection:text-white"
    >
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </section>
  );
}
