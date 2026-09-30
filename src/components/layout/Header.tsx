"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { useLead } from "@/components/forms/LeadModal";
import { SearchBox } from "@/components/search/SearchBox";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { open } = useLead();
  const [compact, setCompact] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menu]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-white md:bg-white/92 md:backdrop-blur-md transition-all",
          compact ? "border-line py-2" : "border-transparent py-3.5",
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 md:px-8">
          <Logo compact={compact} priority />
          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-muted transition hover:text-ink",
                  pathname.startsWith(item.href) && "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <SearchBox />
            <a href={site.phoneHref} className="hidden text-sm font-semibold xl:inline">
              {site.phone}
            </a>
            <Button onClick={() => open("kp")}>Получить КП</Button>
          </div>
          <div className="ml-auto flex items-center gap-2 md:hidden">
            <a href={site.phoneHref} className="grid h-10 w-10 place-items-center rounded-full bg-soft" aria-label="Позвонить">
              ☎
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white"
              aria-label="Меню"
              onClick={() => setMenu(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-white md:hidden"
          style={{ backgroundColor: "#ffffff" }}
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <Logo />
            <button className="grid h-10 w-10 place-items-center text-3xl leading-none" onClick={() => setMenu(false)} aria-label="Закрыть">
              ×
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4">
            <div className="grid gap-1 rounded-3xl bg-soft p-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl bg-white px-4 py-3 text-lg font-medium",
                    pathname.startsWith(item.href) && "bg-accent text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="grid gap-2 p-4 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <Button
              className="w-full"
              onClick={() => {
                setMenu(false);
                open("kp");
              }}
            >
              Получить КП
            </Button>
            <Button href={site.phoneHref} variant="dark" className="w-full">
              Позвонить
            </Button>
            <Button href={site.maxHref} variant="line" className="w-full">
              Написать в МАКС
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
