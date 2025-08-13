import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PrizesSection } from "@/components/prize-section";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PrizesSection />
    </div>
  );
}

export default App;
