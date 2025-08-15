import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PrizesSection } from "@/components/prize-section";
import { RulesSection } from "@/components/rules-section";
import { FutmondoScoringSystem } from "@/components/futmondo-scoring-system";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <RulesSection />
      <PrizesSection />
      <FutmondoScoringSystem />
    </div>
  );
}

export default App;
