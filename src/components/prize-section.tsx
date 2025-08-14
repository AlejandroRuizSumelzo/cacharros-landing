import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingDown,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PrizesSection() {
  const mainCompetitions = [
    {
      category: "INMORTALES",
      total: "76 €",
      icon: Crown,
      gradient: "from-chart-4 to-chart-4/80",
      bgGradient: "from-chart-4/10 to-chart-4/5",
      positions: [
        { position: "1º", amount: "28 €", highlight: true },
        { position: "2º", amount: "22 €" },
        { position: "3º", amount: "16 €" },
        { position: "4º", amount: "10 €" },
      ],
    },
    {
      category: "CHAMPIONS",
      total: "112 €",
      icon: Trophy,
      gradient: "from-primary to-primary/80",
      bgGradient: "from-primary/10 to-primary/5",
      positions: [
        { position: "1º", amount: "40 €", highlight: true },
        { position: "2º", amount: "32 €" },
        { position: "3º", amount: "24 €" },
        { position: "4º", amount: "16 €" },
      ],
    },
  ];

  const secondaryCompetitions = [
    {
      category: "UEFA",
      total: "60 €",
      icon: Star,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      positions: [
        { position: "1º", amount: "28 €" },
        { position: "2º", amount: "20 €" },
        { position: "3º", amount: "12 €" },
      ],
    },
    {
      category: "CONFERENCE",
      total: "23 €",
      icon: Medal,
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      positions: [
        { position: "1º", amount: "15 €" },
        { position: "2º", amount: "8 €" },
      ],
    },
    {
      category: "DESCENSO",
      total: "7 €",
      icon: TrendingDown,
      color: "text-muted-foreground",
      bgColor: "bg-muted/20",
      positions: [{ position: "1º", amount: "7 €" }],
    },
    {
      category: "COPA",
      total: "57 €",
      icon: Trophy,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
      positions: [
        { position: "1º", amount: "30€/CAMISETA" },
        { position: "2º", amount: "20€/BUFANDA" },
        { position: "3º", amount: "7 €" },
      ],
    },
  ];

  const ligaPrizes = [
    { position: "1º", amount: "58 €", tier: "gold" },
    { position: "2º", amount: "54 €", tier: "silver" },
    { position: "3º", amount: "50 €", tier: "bronze" },
    { position: "4º", amount: "45 €", tier: "top" },
    { position: "5º", amount: "40 €", tier: "top" },
    { position: "6º", amount: "34 €", tier: "top" },
    { position: "7º", amount: "29 €" },
    { position: "8º", amount: "23 €" },
    { position: "9º", amount: "18 €" },
    { position: "10º", amount: "13 €" },
    { position: "11º", amount: "9 €" },
    { position: "12º", amount: "4 €" },
  ];

  const weeklyPrizes = [
    { position: "1º", amount: "2.50 €" },
    { position: "2º", amount: "1.50 €" },
    { position: "3º", amount: "1 €" },
    { position: "4º", amount: "0.50 €" },
  ];

  const specialPrizes = [
    { name: "JORNADA + ALTA", amount: "5 €" },
    { name: "CAMPEÓN DE INVIERNO", amount: "7 €" },
    { name: "FIN DE TEMPORADA 1º", amount: "19 €" },
    { name: "FIN DE TEMPORADA 2º", amount: "8 €" },
  ];

  return (
    <section
      id="prize"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-gradient-to-r from-primary/20 to-chart-2/20">
            <Badge
              variant="secondary"
              className="px-6 py-3 text-base font-semibold bg-card/80 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Sistema de Premios
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            960€ en Premios
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Distribución de premios diseñada para premiar la constancia, la
            estrategia y la competitividad en cada jornada.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-8">
            {mainCompetitions.map((competition) => (
              <Card
                key={competition.category}
                className="group relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${competition.bgGradient} opacity-50`}
                />

                <CardHeader className="relative z-10 pb-6">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${competition.gradient} shadow-lg`}
                      >
                        <competition.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          {competition.category}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Competición Principal
                        </p>
                      </div>
                    </div>
                    <Badge className="px-4 py-2 text-lg font-bold bg-foreground text-background">
                      {competition.total}
                    </Badge>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-3">
                  {competition.positions.map((pos) => (
                    <div
                      key={pos.position}
                      className={`flex justify-between items-center p-4 rounded-xl transition-colors ${
                        pos.highlight
                          ? "bg-gradient-to-r from-chart-4/20 to-transparent border border-chart-4/30"
                          : "bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-semibold text-lg">
                        {pos.position}
                      </span>
                      <Badge
                        variant={pos.highlight ? "default" : "secondary"}
                        className="text-sm font-bold"
                      >
                        {pos.amount}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryCompetitions.map((competition) => (
              <Card
                key={competition.category}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader
                  className={`${competition.bgColor} border-b border-border/10`}
                >
                  <CardTitle className="flex items-center gap-3">
                    <competition.icon
                      className={`h-6 w-6 ${competition.color}`}
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">
                        {competition.category}
                      </h4>
                      <Badge variant="outline" className="mt-1 font-semibold">
                        {competition.total}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  {competition.positions.map((pos) => (
                    <div
                      key={pos.position}
                      className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium">{pos.position}</span>
                      <Badge variant="secondary" className="text-xs">
                        {pos.amount}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <Card className="lg:col-span-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <CardHeader className="relative z-10 border-b border-border/10">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-lg">
                      <Trophy className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">LIGA REGULAR</h3>
                      <p className="text-sm text-muted-foreground">
                        Clasificación Final
                      </p>
                    </div>
                  </div>
                  <Badge className="px-4 py-2 text-lg font-bold bg-foreground text-background">
                    377 €
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {ligaPrizes.map((prize, index) => (
                    <div
                      key={prize.position}
                      className={`flex justify-between items-center p-3 rounded-lg transition-colors ${
                        prize.tier === "gold"
                          ? "bg-gradient-to-r from-chart-4/20 to-transparent border border-chart-4/30"
                          : prize.tier === "silver"
                          ? "bg-gradient-to-r from-muted/30 to-transparent border border-border/30"
                          : prize.tier === "bronze"
                          ? "bg-gradient-to-r from-chart-2/20 to-transparent border border-chart-2/30"
                          : prize.tier === "top"
                          ? "bg-primary/10"
                          : "bg-muted/20"
                      }`}
                    >
                      <span className="font-semibold">{prize.position}</span>
                      <Badge
                        variant={index < 6 ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {prize.amount}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="bg-chart-5/10 border-b border-border/10">
                  <CardTitle className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-chart-5" />
                    <div>
                      <h4 className="text-lg font-bold">POR JORNADAS</h4>
                      <Badge variant="outline" className="mt-1 font-semibold">
                        209 €
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  {weeklyPrizes.map((prize, index) => (
                    <div
                      key={prize.position}
                      className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium">{prize.position}</span>
                      <Badge
                        variant={index === 0 ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {prize.amount}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-chart-3/10 border-b border-border/10">
                  <CardTitle className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-chart-3" />
                    <h4 className="text-lg font-bold">ESPECIALES</h4>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  {specialPrizes.map((prize) => (
                    <div
                      key={prize.name}
                      className="text-center p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                    >
                      <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                        {prize.name}
                      </div>
                      <Badge variant="default" className="font-bold">
                        {prize.amount}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader className="bg-destructive/5 border-b border-destructive/10">
                  <CardTitle className="flex items-center gap-3 text-destructive">
                    <AlertTriangle className="h-6 w-6" />
                    <div>
                      <h4 className="text-lg font-bold">PENALIZACIÓN</h4>
                      <Badge variant="destructive" className="mt-1">
                        -2 €
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Por incumplimiento del número mínimo de jugadores
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
