import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import contactDetails from "../data/contact-detail.json";

function toAppPath(href: string): string {
  if (!href.endsWith(".html")) {
    return href;
  }

  if (href === "index.html") {
    return "/";
  }

  return `/${href.replace(".html", "")}`;
}

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div
      className="min-h-screen text-stone-900 [background:radial-gradient(circle_at_12%_14%,#fdf3e2_0%,transparent_38%),radial-gradient(circle_at_82%_18%,#edd3b8_0%,transparent_34%),radial-gradient(circle_at_50%_120%,#e9d3b8_0%,transparent_44%),repeating-linear-gradient(120deg,rgba(255,255,255,0.18)_0_2px,rgba(255,255,255,0)_2px_16px),#f5efe4]"
    >
      <Header />
      <main className="mx-auto w-[min(1120px,92vw)] py-8">{children}</main>

      <footer className="mt-8 border-t border-amber-900/20 bg-gradient-to-b from-[#efe2d2] to-[#e4d0b8] px-0 py-9 text-stone-800">
        <div className="mx-auto grid w-[min(1120px,92vw)] gap-4 md:grid-cols-3">
          <section>
            <h3 className="font-serif-display text-lg text-stone-900">Navegación</h3>
            <ul className="mt-2 space-y-2">
              {contactDetails.pages.map((page) => (
                <li key={page.href}>
                  <Link className="font-semibold text-amber-900 hover:underline" to={toAppPath(page.href)}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-serif-display text-lg text-stone-900">Redes</h3>
            <ul className="mt-2 space-y-2">
              {contactDetails.social.map((social) => (
                <li key={social.label}>
                  <a className="inline-flex items-center gap-2 text-stone-900 hover:underline" href={social.href} target="_blank" rel="noreferrer">
                    <img src={`/${social.icon}`} alt="" className="h-5 w-5" />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-serif-display text-lg text-stone-900">Contacto</h3>
            <a className="mt-2 inline-block font-semibold text-amber-900 hover:underline" href={contactDetails.email.href}>
              {contactDetails.email.label}
            </a>
            <p className="mt-2 text-sm text-stone-700">{contactDetails.legal.copyright}</p>
          </section>
        </div>
      </footer>
    </div>
  );
}
