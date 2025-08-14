import { Calendar, Users, Trophy, Target, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const stats = [
    {
      icon: Users,
      value: "32",
      label: "Managers",
      gradient: "from-primary/20 to-primary/10",
    },
    {
      icon: Trophy,
      value: "960 €",
      label: "Premio Total",
      gradient: "from-chart-2/20 to-chart-2/10",
    },
    {
      icon: Target,
      value: "38",
      label: "Jornadas",
      gradient: "from-chart-3/20 to-chart-3/10",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,oklch(var(--primary))_0%,transparent_50%)] opacity-[0.15]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="px-6 py-3 text-sm font-medium bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-colors"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Temporada 25/26 • Ya Disponible
            </Badge>
          </div>

          <div className="space-y-6 animate-fade-in delay-150">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                CACHARROS
              </span>
              <span className="block bg-gradient-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent">
                LEAGUE
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              La liga fantasy más competitiva de España.{" "}
              <span className="text-foreground/80">
                Nuevas reglas, grandes premios
              </span>{" "}
              y la gloria eterna te esperan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in delay-300">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 hover:bg-card/70 transition-all duration-500 hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative flex flex-col items-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/80 shadow-sm group-hover:shadow-md transition-shadow">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in delay-500">
            <Button
              size="lg"
              className="px-10 py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Únete Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-base font-semibold rounded-xl border-border/50 hover:bg-card/50 backdrop-blur-sm transition-all duration-300"
            >
              Ver Reglas 25/26
            </Button>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce delay-1000">
            <div className="flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Explorar
              </div>
              <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
