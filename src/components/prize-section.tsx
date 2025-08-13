import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PrizesSection() {
  const mainPrizes = [
    {
      category: "INMORTALES",
      total: "76 €",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      positions: [
        { position: "1º", amount: "28 €" },
        { position: "2º", amount: "22 €" },
        { position: "3º", amount: "16 €" },
        { position: "4º", amount: "10 €" },
      ],
    },
    {
      category: "CHAMPIONS",
      total: "112 €",
      icon: Trophy,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      positions: [
        { position: "1º", amount: "40 €" },
        { position: "2º", amount: "32 €" },
        { position: "3º", amount: "24 €" },
        { position: "4º", amount: "16 €" },
      ],
    },
  ];

  const secondaryPrizes = [
    {
      category: "UEFA",
      total: "60 €",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
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
      color: "text-green-600",
      bgColor: "bg-green-50",
      positions: [
        { position: "1º", amount: "15 €" },
        { position: "2º", amount: "8 €" },
      ],
    },
  ];

  const specialPrizes = [
    {
      category: "DESCENSO",
      total: "7 €",
      icon: TrendingDown,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      positions: [{ position: "1º", amount: "7 €" }],
    },
    {
      category: "COPA",
      total: "57 €",
      icon: Trophy,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      positions: [
        { position: "1º", amount: "30€/CAMISETA" },
        { position: "2º", amount: "20€/BUFANDA" },
        { position: "3º", amount: "7 €" },
      ],
    },
  ];

  const ligaPrizes = [
    { position: "1º", amount: "58 €" },
    { position: "2º", amount: "54 €" },
    { position: "3º", amount: "50 €" },
    { position: "4º", amount: "45 €" },
    { position: "5º", amount: "40 €" },
    { position: "6º", amount: "34 €" },
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

  const seasonalPrizes = [
    { name: "JORNADA + ALTA", amount: "5 €" },
    { name: "CAMPEÓN DE INVIERNO", amount: "7 €" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sistema de Premios
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Trophy className="mr-2 h-5 w-5" />
              Presupuesto Total: 960 €
            </Badge>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Main Competitions */}
          <div className="grid md:grid-cols-2 gap-6">
            {mainPrizes.map((competition) => (
              <Card key={competition.category} className="border-2">
                <CardHeader className={`${competition.bgColor} rounded-t-lg`}>
                  <CardTitle className="flex items-center gap-3">
                    <competition.icon
                      className={`h-6 w-6 ${competition.color}`}
                    />
                    <span className="text-xl font-bold">
                      {competition.category}
                    </span>
                    <Badge className="ml-auto bg-white text-black font-bold">
                      {competition.total}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {competition.positions.map((pos, index) => (
                      <div
                        key={pos.position}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium">{pos.position}</span>
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          {pos.amount}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Secondary Competitions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {secondaryPrizes.map((competition) => (
              <Card key={competition.category}>
                <CardHeader
                  className={`${competition.bgColor} rounded-t-lg py-4`}
                >
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <competition.icon
                      className={`h-5 w-5 ${competition.color}`}
                    />
                    <span>{competition.category}</span>
                  </CardTitle>
                  <Badge className="w-fit bg-white text-black font-bold">
                    {competition.total}
                  </Badge>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {competition.positions.map((pos) => (
                      <div
                        key={pos.position}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="font-medium">{pos.position}</span>
                        <Badge variant="outline" className="text-xs">
                          {pos.amount}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {specialPrizes.map((competition) => (
              <Card key={competition.category}>
                <CardHeader
                  className={`${competition.bgColor} rounded-t-lg py-4`}
                >
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <competition.icon
                      className={`h-5 w-5 ${competition.color}`}
                    />
                    <span>{competition.category}</span>
                  </CardTitle>
                  <Badge className="w-fit bg-white text-black font-bold">
                    {competition.total}
                  </Badge>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {competition.positions.map((pos) => (
                      <div
                        key={pos.position}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="font-medium">{pos.position}</span>
                        <Badge variant="outline" className="text-xs">
                          {pos.amount}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Liga Regular and Weekly Prizes */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Liga Regular */}
            <Card className="lg:col-span-2">
              <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Trophy className="h-6 w-6 text-primary" />
                  LIGA REGULAR
                  <Badge className="ml-auto bg-white text-black font-bold text-lg">
                    377 €
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {ligaPrizes.map((prize, index) => (
                    <div
                      key={prize.position}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                    >
                      <span className="font-medium">{prize.position}</span>
                      <Badge variant={index < 3 ? "default" : "secondary"}>
                        {prize.amount}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly and Seasonal */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="bg-green-50 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-green-600" />
                    POR JORNADAS
                  </CardTitle>
                  <Badge className="w-fit bg-white text-black font-bold">
                    209 €
                  </Badge>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {weeklyPrizes.map((prize) => (
                      <div
                        key={prize.position}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm font-medium">
                          {prize.position}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {prize.amount}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-50 rounded-t-lg">
                  <CardTitle className="text-sm">PREMIOS ESPECIALES</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {seasonalPrizes.map((prize) => (
                      <div key={prize.name} className="text-center">
                        <div className="text-xs font-medium mb-1">
                          {prize.name}
                        </div>
                        <Badge variant="default">{prize.amount}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* End Season and Penalties */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-yellow-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Medal className="h-5 w-5 text-yellow-600" />
                  FIN DE TEMPORADA
                </CardTitle>
                <Badge className="w-fit bg-white text-black font-bold">
                  27 €
                </Badge>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">1º</span>
                    <Badge>19 €</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">2º</span>
                    <Badge variant="secondary">8 €</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader className="bg-red-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="h-5 w-5" />
                  INCUMPLIMIENTO Nº JUGADORES
                </CardTitle>
                <Badge variant="destructive" className="w-fit">
                  -2 €
                </Badge>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Penalización por no cumplir el mínimo de jugadores requeridos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
