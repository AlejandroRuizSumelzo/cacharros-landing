import { Calendar, Users, Trophy, Target, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  const stats = [
    {
      icon: Users,
      value: "32",
      label: "Managers",
      delay: "0ms",
    },
    {
      icon: Trophy,
      value: "960 €",
      label: "Premio Total",
      delay: "150ms",
    },
    {
      icon: Target,
      value: "38",
      label: "Jornadas",
      delay: "300ms",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto max-w-7xl px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            <Calendar className="mr-2 h-4 w-4" />
            Temporada 25/26 - Ya Disponible
          </Badge>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              CACHARROS
              <span className="block text-primary">LEAGUE</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              La liga fantasy de fútbol más competitiva y emocionante. Nuevas
              reglas, grandes premios y la gloria eterna te esperan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="border-0 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300"
                style={{
                  animationDelay: stat.delay,
                  animation: "fade-in 0.6s ease-out forwards",
                }}
              >
                <CardContent className="flex flex-col items-center p-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="font-medium px-8">
              <Trophy className="mr-2 h-5 w-5" />
              Únete Ahora
            </Button>
            <Button size="lg" variant="outline" className="font-medium px-8">
              Ver Reglas 25/26
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex justify-center p-1">
                <div className="w-1 h-3 bg-muted-foreground/40 rounded-full animate-pulse"></div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
