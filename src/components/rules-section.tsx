import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Users, Trophy, Euro, Calendar } from "lucide-react";

export function RulesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="mb-4">
          <Users className="w-4 h-4" />
          32 Managers
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Reglamento de la Liga
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Normas principales y más importantes del juego para una competición
          justa y emocionante
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Trophy className="w-5 h-5 text-primary" />
              Reglas Generales
            </CardTitle>
            <CardDescription>
              Normativas que se aplicarán durante toda la liga
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Límite por equipo</h4>
                  <p className="text-sm text-muted-foreground">
                    Máximo <strong>2 jugadores por equipo</strong> en tu
                    plantilla
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Restricción TOP 4</h4>
                  <p className="text-sm text-muted-foreground">
                    Solo <strong>1 jugador por equipo</strong> de los 4 primeros
                    clasificados
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-2">
                    Ejemplo de aplicación
                  </h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Si tienes 2 jugadores del Villarreal (5º clasificado) y esa
                    jornada acaba 4º, para la siguiente jornada solo podrás
                    alinear 1 jugador del Villarreal.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-green-700 dark:text-green-300">
              <Calendar className="w-5 h-5" />
              Jornada 1 - Reglas Especiales
            </CardTitle>
            <CardDescription>
              Condiciones particulares para la primera jornada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">
                    Sin restricción TOP 4
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Para la primera jornada: máximo{" "}
                    <strong>2 jugadores por equipo</strong> sin aplicar la regla
                    de los 4 primeros clasificados.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-red-700 dark:text-red-300">
              <AlertTriangle className="w-5 h-5" />
              Sistema de Sanciones
            </CardTitle>
            <CardDescription>
              Penalizaciones por incumplimiento del reglamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <h4 className="font-medium text-red-800 dark:text-red-200">
                    Penalización en puntos
                  </h4>
                </div>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  -25 puntos
                </p>
                <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                  Por cada infracción
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Euro className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <h4 className="font-medium text-red-800 dark:text-red-200">
                    Penalización económica
                  </h4>
                </div>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  -2€
                </p>
                <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                  Por cada infracción
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-700 dark:text-red-300">
                <strong>Importante:</strong> Las sanciones son acumulables
                durante toda la liga. Cada infracción se suma tanto en puntos
                como en penalización económica.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Trophy className="w-5 h-5 text-primary" />
              Referencia de Clasificación
            </CardTitle>
            <CardDescription>
              Fuente oficial para determinar las posiciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                    Página Oficial de LaLiga
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                    La clasificación de equipos se tomará siempre de la página
                    oficial de LaLiga para determinar qué equipos están en las
                    primeras 4 posiciones.
                  </p>
                  <a
                    href="https://www.laliga.com/laliga-easports/clasificacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                  >
                    <Trophy className="w-4 h-4" />
                    Ver Clasificación Oficial
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground">
          Las reglas podrán ampliarse conforme se desarrollen torneos y nuevas
          situaciones. Mantente atento a las actualizaciones del reglamento.
        </p>
      </div>
    </section>
  );
}
