import { useState } from "react";

import { Menu, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Reglas", href: "#rules" },
    { label: "Premios", href: "#prize" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight">CACHARROS</h1>
              <p className="text-xs text-muted-foreground">LEAGUE</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button size="sm" className="font-medium">
              Únete Ya
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="relative">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Trophy className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold">CACHARROS</h2>
                      <p className="text-xs text-muted-foreground">LEAGUE</p>
                    </div>
                  </div>
                </div>

                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navItems.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-3 text-lg font-medium text-foreground hover:text-primary transition-colors group"
                        onClick={() => setIsOpen(false)}
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: isOpen
                            ? "fade-in 0.3s ease-out forwards"
                            : undefined,
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </nav>

                <div className="p-6 border-t bg-muted/30">
                  <Button
                    className="w-full font-medium h-12 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <Trophy className="mr-2 h-4 w-4" />
                    Únete Ya
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    ¡No te pierdas la temporada 25/26!
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
