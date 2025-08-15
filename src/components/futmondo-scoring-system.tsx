import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pressScoring = {
  as: [
    { rating: "4 picas", points: 14 },
    { rating: "3 picas", points: 10 },
    { rating: "2 picas", points: 6 },
    { rating: "1 pica", points: 2 },
    { rating: "Guión (-)", points: -2 },
    { rating: "Sin calificar", points: 0 },
  ],
  marca: [
    { rating: "4 estrellas", points: 14 },
    { rating: "3 estrellas", points: 10 },
    { rating: "2 estrellas", points: 6 },
    { rating: "1 estrella", points: 2 },
    { rating: "Guión (-)", points: -2 },
    { rating: "Sin calificar", points: 0 },
  ],
  tiempoJuego: [
    { rating: "10", points: 8 },
    { rating: "9", points: 6 },
    { rating: "8", points: 5 },
    { rating: "7", points: 3 },
    { rating: "6", points: 2 },
    { rating: "5", points: 1 },
    { rating: "4", points: 0 },
    { rating: "2-3", points: -1 },
    { rating: "0-1", points: -2 },
  ],
  sofascore: [
    { rating: "10", points: 15 },
    { rating: "9.7-9.9", points: 14 },
    { rating: "9.3-9.6", points: 13 },
    { rating: "9.0-9.2", points: 12 },
    { rating: "8.7-8.9", points: 11 },
    { rating: "8.3-8.6", points: 10 },
    { rating: "8.0-8.2", points: 9 },
    { rating: "7.8-7.9", points: 8 },
    { rating: "7.6-7.7", points: 7 },
    { rating: "7.4-7.5", points: 6 },
    { rating: "7.2-7.3", points: 5 },
    { rating: "7.0-7.1", points: 4 },
    { rating: "6.7-6.9", points: 3 },
    { rating: "6.4-6.6", points: 2 },
    { rating: "6.1-6.3", points: 1 },
    { rating: "6.0", points: 0 },
    { rating: "5.6-5.9", points: -1 },
    { rating: "5.0-5.5", points: -2 },
    { rating: "3.1-4.9", points: -3 },
    { rating: "0-3.0", points: -4 },
  ],
};

type ScoringItem = {
  rating: string;
  points: number;
};

interface ScoringTableProps {
  title: string;
  data: ScoringItem[];
  icon?: string;
}

const ScoringTable: React.FC<ScoringTableProps> = ({ title, data, icon }) => (
  <Card className="h-fit">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0"
          >
            <span className="text-sm font-medium">{item.rating}</span>
            <Badge
              variant={
                item.points > 0
                  ? "default"
                  : item.points < 0
                  ? "destructive"
                  : "secondary"
              }
            >
              {item.points > 0 ? "+" : ""}
              {item.points} pts
            </Badge>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const FutmondoScoringSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "press" | "basic" | "medium" | "complete"
  >("press");

  const tabs = [
    { id: "press", label: "Puntuación de Prensa", icon: "📰" },
    { id: "basic", label: "Estadísticas Básicas", icon: "⚽" },
    { id: "medium", label: "Estadísticas Medias", icon: "📊" },
    { id: "complete", label: "Estadísticas Completas", icon: "🏆" },
  ];

  const exampleConfig = {
    as: 30,
    marca: 20,
    tiempoJuego: 100,
    sofascore: 20,
  };

  const exampleScores = {
    as: { rating: "2 picas", points: 6 },
    marca: { rating: "1 estrella", points: 2 },
    tiempoJuego: { rating: "6", points: 2 },
    sofascore: { rating: "7.0", points: 4 },
  };

  const calculateExample = () => {
    const asPoints = (exampleScores.as.points * exampleConfig.as) / 100;
    const marcaPoints =
      (exampleScores.marca.points * exampleConfig.marca) / 100;
    const tiempoPoints =
      (exampleScores.tiempoJuego.points * exampleConfig.tiempoJuego) / 100;
    const sofaPoints =
      (exampleScores.sofascore.points * exampleConfig.sofascore) / 100;

    return {
      asPoints,
      marcaPoints,
      tiempoPoints,
      sofaPoints,
      total: asPoints + marcaPoints + tiempoPoints + sofaPoints,
    };
  };

  const example = calculateExample();

  return (
    <div id="scoring" className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Sistema de Puntuación Futmondo
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sistema configurable que combina puntuaciones de medios de prensa
          especializados con estadísticas detalladas de rendimiento
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "press" && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>🎯 Modo Configurable - Parte de Prensa</CardTitle>
              <CardDescription>
                Personaliza la importancia de cada medio de prensa en tu
                campeonato
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Opciones disponibles:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  <Badge variant="outline">AS</Badge>
                  <Badge variant="outline">Marca</Badge>
                  <Badge variant="outline">Tiempo de juego</Badge>
                  <Badge variant="outline">Sofascore</Badge>
                  <Badge variant="secondary">Sin medios de prensa</Badge>
                </div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">
                  Configuración de porcentajes:
                </h4>
                <p className="text-amber-800 text-sm">
                  Cada medio puede configurarse del 0% al 100% en tramos del 10%
                  (0-10-20-30...90-100)
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ScoringTable title="Diario AS" data={pressScoring.as} icon="📰" />
            <ScoringTable
              title="Diario Marca"
              data={pressScoring.marca}
              icon="⭐"
            />
            <ScoringTable
              title="Tiempo de Juego"
              data={pressScoring.tiempoJuego}
              icon="⏱️"
            />
            <ScoringTable
              title="Sofascore"
              data={pressScoring.sofascore}
              icon="📱"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>📊 Ejemplo de Cálculo</CardTitle>
              <CardDescription>
                Configuración: AS 30% + Marca 20% + Tiempo de juego 100% +
                Sofascore 20%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Notas obtenidas:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>AS: 2 picas</span>
                      <Badge>{exampleScores.as.points} pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Marca: 1 estrella</span>
                      <Badge>{exampleScores.marca.points} pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Tiempo de juego: 6</span>
                      <Badge>{exampleScores.tiempoJuego.points} pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Sofascore: 7.0</span>
                      <Badge>{exampleScores.sofascore.points} pts</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Puntos finales:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>AS (30%):</span>
                      <Badge variant="secondary">{example.asPoints} pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Marca (20%):</span>
                      <Badge variant="secondary">
                        {example.marcaPoints} pts
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Tiempo (100%):</span>
                      <Badge variant="secondary">
                        {example.tiempoPoints} pts
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Sofascore (20%):</span>
                      <Badge variant="secondary">
                        {example.sofaPoints} pts
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>TOTAL:</span>
                      <Badge variant="default">{example.total} pts</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> Las puntuaciones se redondean (0.5+
                  hacia arriba, 0.4- hacia abajo)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "basic" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>⚽ Estadísticas Básicas (Modo Prensa)</CardTitle>
              <CardDescription>
                Puntuaciones fundamentales basadas en acciones clave del partido
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700">
                    🎯 Todos los jugadores
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Gol de penalti</span>
                      <Badge>+2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Jugar 60+ min</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Asistencia</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gol en propia</span>
                      <Badge variant="destructive">-1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Fallar penalti</span>
                      <Badge variant="destructive">-2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Doble amarilla</span>
                      <Badge variant="destructive">-3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Roja directa</span>
                      <Badge variant="destructive">-5 pts</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-700">🥅 Porteros</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Marcar gol</span>
                      <Badge>+8 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Parar penalti</span>
                      <Badge>+3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Portería a cero (45+ min)</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Por cada 2 goles</span>
                      <Badge variant="destructive">-1 pt</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-700">🛡️ Defensas</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Marcar gol</span>
                      <Badge>+6 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Portería a cero (45+ min)</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Por cada 2 goles</span>
                      <Badge variant="destructive">-1 pt</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orange-700">
                      ⚽ Centrocampistas
                    </h4>
                    <div className="flex justify-between">
                      <span className="text-sm">Marcar gol</span>
                      <Badge>+4 pts</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-red-700">
                      🎯 Delanteros
                    </h4>
                    <div className="flex justify-between">
                      <span className="text-sm">Marcar gol</span>
                      <Badge>+3 pts</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📋 Aclaraciones Importantes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">
                    ⏱️ Tiempo mínimo
                  </h5>
                  <p className="text-blue-800 text-sm">
                    Para puntuar, el jugador debe jugar al menos 1 minuto
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">
                    🔄 Fuentes oficiales
                  </h5>
                  <p className="text-green-800 text-sm">
                    Las puntuaciones se basan en AS y Marca (web/app/impreso)
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-900 mb-2">
                    ⚠️ Tarjetas retiradas
                  </h5>
                  <p className="text-yellow-800 text-sm">
                    Si el comité retira una tarjeta, se devuelven los puntos
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">
                    📊 Proveedor de datos
                  </h5>
                  <p className="text-purple-800 text-sm">
                    90 minutos reglamentarios, sin tiempo añadido
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "medium" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>📊 Estadísticas Medias (Modo Mixto)</CardTitle>
              <CardDescription>
                Equilibrio entre simplicidad y detalle estadístico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Acciones ofensivas */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700">
                    ⚽ Acciones Ofensivas
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Gol de penalti</span>
                      <Badge>+2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Asistencia</span>
                      <Badge>+1.5 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tiro a puerta</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tiro al palo</span>
                      <Badge>+0.8 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gran ocasión creada</span>
                      <Badge>+0.3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gran ocasión fallada</span>
                      <Badge variant="destructive">-0.3 pts</Badge>
                    </div>
                  </div>
                </div>

                {/* Acciones de juego */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-700">
                    🎯 Acciones de Juego
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Centro preciso</span>
                      <Badge>+0.3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pase al área exitoso</span>
                      <Badge>+0.3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Regate exitoso</span>
                      <Badge>+0.2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pase interceptado</span>
                      <Badge>+0.3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Balón robado</span>
                      <Badge>+0.5 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">
                        Balón robado (último hombre)
                      </span>
                      <Badge>+1.5 pts</Badge>
                    </div>
                  </div>
                </div>

                {/* Penaltis y disciplina */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-700">
                    ⚖️ Penaltis y Disciplina
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti provocado</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti parado</span>
                      <Badge>+3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti fallado</span>
                      <Badge variant="destructive">-3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti cometido</span>
                      <Badge variant="destructive">-1.5 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tarjeta amarilla</span>
                      <Badge variant="destructive">-1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Roja directa</span>
                      <Badge variant="destructive">-3 pts</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Bonificación por precisión de pases */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">
                  🎯 Bonificación por Precisión de Pases (45+ minutos)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Badge className="mb-1">+3 pts</Badge>
                    <p className="text-xs">90%+ precisión</p>
                  </div>
                  <div className="text-center">
                    <Badge className="mb-1">+2 pts</Badge>
                    <p className="text-xs">65-89% precisión</p>
                  </div>
                  <div className="text-center">
                    <Badge className="mb-1">+1 pt</Badge>
                    <p className="text-xs">50-64% precisión</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="destructive" className="mb-1">
                      -1 pt
                    </Badge>
                    <p className="text-xs">&lt;50% precisión</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  * Los defensas reciben la mitad de puntos. Los porteros no
                  computan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Puntuaciones por posición */}
          <Card>
            <CardHeader>
              <CardTitle>🏆 Puntuaciones Específicas por Posición</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">
                    🥅 Porteros
                  </h5>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Gol anotado</span>
                      <Badge>+6 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Portería a cero</span>
                      <Badge>+3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Por gol recibido</span>
                      <Badge variant="destructive">-1 pt</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">
                    🛡️ Defensas
                  </h5>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Gol anotado</span>
                      <Badge>+5 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Portería a cero</span>
                      <Badge>+3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Por gol recibido</span>
                      <Badge variant="destructive">-0.3 pts</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">
                    ⚽ Centrocampistas
                  </h5>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Gol anotado</span>
                      <Badge>+4 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Portería a cero</span>
                      <Badge>+1 pt</Badge>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h5 className="font-semibold text-red-900 mb-2">
                    🎯 Delanteros
                  </h5>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Gol anotado</span>
                      <Badge>+3 pts</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "complete" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🏆 Estadísticas Completas (Modo Stats)</CardTitle>
              <CardDescription>
                Sistema más detallado basado únicamente en el rendimiento
                durante el partido
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Goles y asistencias */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700">
                    ⚽ Goles y Asistencias
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Gol normal</span>
                      <Badge>+7 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gol decisivo</span>
                      <Badge>+9 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gol de penalti</span>
                      <Badge>+5 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Asistencia</span>
                      <Badge>+4 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gol en propia</span>
                      <Badge variant="destructive">-3 pts</Badge>
                    </div>
                  </div>
                </div>

                {/* Acciones de ataque */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-700">
                    🎯 Acciones de Ataque
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Tiro a puerta</span>
                      <Badge>+3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tiro al palo</span>
                      <Badge>+2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Centro preciso</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gran ocasión creada</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gran ocasión fallada</span>
                      <Badge variant="destructive">-1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Por cada 2 regates</span>
                      <Badge>+1 pt</Badge>
                    </div>
                  </div>
                </div>

                {/* Acciones defensivas */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-700">
                    🛡️ Acciones Defensivas
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Entrada (tackle)</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Entrada último hombre</span>
                      <Badge>+2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pase interceptado</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Salvar gol bajo palos</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Error garrafal</span>
                      <Badge variant="destructive">-3 pts</Badge>
                    </div>
                  </div>
                </div>

                {/* Penaltis */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-700">⚖️ Penaltis</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti provocado</span>
                      <Badge>+2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti parado</span>
                      <Badge>+8 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti fallado</span>
                      <Badge variant="destructive">-5 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Penalti cometido</span>
                      <Badge variant="destructive">-3 pts</Badge>
                    </div>
                  </div>
                </div>

                {/* Disciplina */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700">
                    🟨🟥 Disciplina
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Falta recibida</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Falta cometida</span>
                      <Badge variant="destructive">-1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tarjeta amarilla</span>
                      <Badge variant="destructive">-2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Doble amarilla</span>
                      <Badge variant="destructive">-6 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Roja directa</span>
                      <Badge variant="destructive">-6 pts</Badge>
                    </div>
                  </div>
                </div>

                {/* Portería */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan-700">🥅 Portería</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Parada</span>
                      <Badge>+2 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Centro atajado</span>
                      <Badge>+1 pt</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Bonificaciones específicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🥅 Porteros</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Portería a cero (75+ min)</span>
                      <Badge>+6 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Por cada gol recibido</span>
                      <Badge variant="destructive">-3 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Victoria (45+ min)</span>
                      <Badge>+4 pts</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Empate (45+ min)</span>
                      <Badge>+1 pt</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Derrota (45+ min)</span>
                      <Badge variant="destructive">-2 pts</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🛡️ Defensas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between">
                      <span className="text-sm">Portería a cero (75+ min)</span>
                      <Badge>+6 pts</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Notas importantes */}
          <Card>
            <CardHeader>
              <CardTitle>📋 Aclaraciones del Modo Stats</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-2">
                  ⚽ Gol decisivo
                </h5>
                <p className="text-blue-800 text-sm">
                  El gol que otorga la primera ventaja al equipo ganador (ej:
                  2-1 en un 4-1 final)
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">
                  🎯 Combinaciones
                </h5>
                <p className="text-green-800 text-sm">
                  Gol normal = 7 + 3 (tiro) = 10 pts total
                  <br />
                  Penalti parado = 8 + 2 (parada) = 10 pts total
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-900 mb-2">
                  ⏱️ Tiempos mínimos
                </h5>
                <p className="text-purple-800 text-sm">
                  Portería a cero: 75+ min
                  <br />
                  Victoria/Empate/Derrota: 45+ min
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-semibold text-amber-900 mb-2">
                  🔄 Actualizaciones
                </h5>
                <p className="text-amber-800 text-sm">
                  Las puntuaciones pueden cambiar hasta el día siguiente del
                  partido
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer con información importante */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                🔄 Actualizaciones
              </h4>
              <p className="text-sm text-gray-600">
                Las puntuaciones pueden modificarse hasta el día siguiente del
                partido
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                📊 Transparencia
              </h4>
              <p className="text-sm text-gray-600">
                Todas las puntuaciones se basan en proveedores oficiales de
                datos
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">⚖️ Equidad</h4>
              <p className="text-sm text-gray-600">
                Sistema 100% configurable para adaptarse a cualquier preferencia
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <p className="text-xs text-gray-500 text-center">
            Información extraída de{" "}
            <a
              href="https://help.futmondo.com/article/269-modo-configurable-futmondo-liga-ea-sports"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Futmondo - Modo Configurable
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
