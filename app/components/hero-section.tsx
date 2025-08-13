import { Calendar, Users, Trophy, Target } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center space-y-8">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium bg-muted/50 backdrop-blur">
            <Calendar className="mr-2 h-3 w-3" />
            Temporada 25/26 - ¡Ya Disponible!
          </div>

          <div className="space-y-4">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              <span className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-600 bg-clip-text text-transparent">
                CACHARROS
              </span>
              <br />
              <span className="text-foreground">LEAGUE</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              La liga fantasy de fútbol más{" "}
              <span className="text-orange-500 font-bold">competitiva</span> y
              <span className="text-red-600 font-bold"> emocionante</span>.
              Nuevas reglas, grandes premios y la gloria eterna te esperan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div
              className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-card/50 backdrop-blur border hover:border-orange-500/50 transition-all duration-300 animate-float"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Managers</div>
            </div>

            <div
              className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-card/50 backdrop-blur border hover:border-red-500/50 transition-all duration-300 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <Trophy className="h-6 w-6 text-red-500" />
              </div>
              <div className="text-2xl font-bold">€500</div>
              <div className="text-sm text-muted-foreground">Premio Total</div>
            </div>

            <div
              className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-card/50 backdrop-blur border hover:border-blue-500/50 transition-all duration-300 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                <Target className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold">38</div>
              <div className="text-sm text-muted-foreground">Jornadas</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-base px-8 py-3"
            >
              <Trophy className="mr-2 h-5 w-5" />
              ¡Únete Ahora!
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-3">
              Ver Reglas 25/26
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
