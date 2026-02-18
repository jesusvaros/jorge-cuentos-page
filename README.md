# Writer Friend Page (React + TypeScript + Tailwind)

SPA para la pagina personal de un escritor con dos colecciones:

- `cuentos`
- `fanzines` (etiquetado en UI como fanzines)

No usa backend. Todo el contenido sale de un JSON local.

## Rutas

- `/` portada con secciones de cuentos y fanzines
- `/cuentos` listado completo de cuentos
- `/fanzines` listado completo de fanzines
- `/cuentos/:slug` lectura completa
- `/fanzines/:slug` lectura completa

## Fuente de datos

`/src/data/library.json`

Formato requerido:

```json
{
  "fanzines": [
    {
      "name": "string",
      "duration of read": "string",
      "text": "rich text/html",
      "image cover": "string link",
      "price": "string"
    }
  ],
  "cuentos": [
    {
      "name": "string",
      "duration of read": "string",
      "text": "rich text/html",
      "image cover": "string link",
      "price": "string"
    }
  ]
}
```

## Arquitectura (SOLID orientada)

- `domain`: modelos y tipos del negocio
- `application`: interfaces y servicios
- `infrastructure`: implementacion de repositorio JSON
- `features/pages/components`: UI segmentada y mantenible

La UI consume `StoryService`, no el JSON en directo.

## Ejecutar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
