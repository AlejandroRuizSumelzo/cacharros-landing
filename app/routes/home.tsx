import type { MetaFunction } from "react-router";

import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Cacharros League - Fantasy Football 25/26" },
    {
      name: "description",
      content:
        "Liga fantasy de fútbol más competitiva. Temporada 25/26 con nuevas reglas y premios increíbles.",
    },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
    </div>
  );
}
