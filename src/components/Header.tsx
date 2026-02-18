import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio", exact: true },
  { to: "/cuentos", label: "Cuentos" },
  { to: "/fanzines", label: "Fanzines" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-4 border-b border-amber-900/20 py-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Letras en movimiento</p>
        <h1 className="font-serif-display text-3xl text-stone-900">Nombre del Escritor</h1>
      </div>

      <nav className="flex flex-wrap gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            exact={link.exact}
            className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-amber-700 hover:bg-amber-50 hover:text-amber-800"
            activeClassName="!border-amber-700 !bg-amber-50 !text-amber-800"
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
