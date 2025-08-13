import { useState } from "react";

import { Menu, Trophy, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white animate-glow">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <h1
                className="text-xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-anton)" }}
              >
                CACHARROS
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                LEAGUE
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#reglas"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Reglas
            </a>
            <a
              href="#premios"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Premios
            </a>
            <a
              href="#clasificacion"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Clasificación
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
            >
              Únete Ya
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <a
                href="#reglas"
                className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Reglas
              </a>
              <a
                href="#premios"
                className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Premios
              </a>
              <a
                href="#clasificacion"
                className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Clasificación
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Contacto
              </a>
              <div className="pt-2">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                >
                  Únete Ya
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
