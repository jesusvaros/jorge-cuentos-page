import { PropsWithChildren } from "react";
import { Header } from "./Header";

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-page-pattern text-stone-900">
      <Header />
      <main className="mx-auto w-[min(1120px,92vw)] py-8">{children}</main>
      <footer className="mx-auto mt-8 w-[min(1120px,92vw)] border-t border-amber-900/20 py-6 text-sm text-stone-700">
        Pagina personal del escritor. React + TypeScript + Tailwind.
      </footer>
    </div>
  );
}
